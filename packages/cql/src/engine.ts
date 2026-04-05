/**
 * CqlEngine — public API for the CQL engine.
 *
 * Mirrors the Go Engine struct (engine.go) with TypeScript idioms:
 * compile-cache, configurable timeout, DoS protection, pluggable providers.
 */

import { compile } from './compiler/compiler.js';
import { CqlEvaluator } from './eval/evaluator.js';
import type { IncludeDef } from './ast/library.js';
import { EvalContext } from './eval/context.js';
import { FunctionRegistry } from './funcs/registry.js';
import { registerBuiltins } from './funcs/builtins.js';
import { resolveModelInfo } from './model/index.js';
import { CqlTooCostlyError, CqlTimeoutError } from './errors.js';
import { CqlCode } from './types/complex.js';
import type { Library } from './ast/library.js';
import type { CqlValue } from './types/value.js';
import type { DataProvider } from './providers/data.js';
import type { TerminologyProvider } from './providers/terminology.js';
import type { ModelInfo } from './model/model-info.js';

/**
 * Minimal interface for UCUM unit conversion.
 * Accepts any object that satisfies this contract (e.g. @fhir-toolkit/ucum UcumService).
 */
export interface UcumServiceLike {
  convert(value: number, from: string, to: string): number;
  isComparable(code1: string, code2: string): boolean;
  multiply?(v1: { value: number; code: string }, v2: { value: number; code: string }): { value: number; code: string };
  divide?(v1: { value: number; code: string }, v2: { value: number; code: string }): { value: number; code: string };
}

export interface CqlEngineOptions {
  dataProvider?: DataProvider;
  terminologyProvider?: TerminologyProvider;
  modelInfo?: 'R4' | 'R4B' | 'R5' | ModelInfo;
  /** Per-evaluation timeout in milliseconds (default: 30 000). */
  timeout?: number;
  /** Maximum CQL source length in characters (DoS protection, default: 102 400). */
  maxExpressionLen?: number;
  /** Maximum number of resources per retrieve (default: 10 000). */
  maxRetrieveSize?: number;
  /** Maximum recursion depth for nested expressions (default: 100). */
  maxDepth?: number;
  /** Optional UCUM service for unit conversion in Quantity operations. */
  ucumService?: UcumServiceLike;
  /**
   * Resolver for included CQL libraries.
   * Called with the library name and version; must return the CQL source text.
   * Required when evaluating CQL that uses `include` statements.
   */
  libraryResolver?: (name: string, version: string) => Promise<string>;
}

export class CqlEngine {
  private readonly cache = new Map<string, Library>();
  private readonly dataProvider: DataProvider | null;
  private readonly terminologyProvider: TerminologyProvider | null;
  private readonly modelInfo: ModelInfo;
  private readonly registry: FunctionRegistry;
  private readonly timeout: number;
  private readonly maxExpressionLen: number;
  private readonly ucumService: UcumServiceLike | null;
  private readonly libraryResolver: ((name: string, version: string) => Promise<string>) | null;

  constructor(options?: CqlEngineOptions) {
    this.timeout = options?.timeout ?? 30_000;
    this.maxExpressionLen = options?.maxExpressionLen ?? 102_400;
    this.modelInfo = resolveModelInfo(options?.modelInfo ?? 'R4');
    this.dataProvider = options?.dataProvider ?? null;
    this.terminologyProvider = options?.terminologyProvider ?? null;
    this.ucumService = options?.ucumService ?? null;
    this.libraryResolver = options?.libraryResolver ?? null;
    this.registry = new FunctionRegistry();
    registerBuiltins(this.registry);
  }

  /**
   * Parse CQL source and return the AST Library (cached).
   *
   * @throws CqlTooCostlyError when source exceeds maxExpressionLen.
   * @throws CqlSyntaxError when the input has syntax errors.
   */
  compile(source: string): Library {
    if (source.length > this.maxExpressionLen) {
      throw new CqlTooCostlyError(
        `source length ${source.length} exceeds max ${this.maxExpressionLen}`,
      );
    }
    const cached = this.cache.get(source);
    if (cached) return cached;
    const lib = compile(source);
    this.cache.set(source, lib);
    return lib;
  }

  /**
   * Parse, compile, and evaluate all named expressions in a CQL library.
   *
   * Returns a record mapping each expression name to its evaluated result.
   */
  async evaluateLibrary(
    source: string,
    context: unknown,
    params?: Record<string, CqlValue | null>,
  ): Promise<Record<string, CqlValue | null>> {
    const lib = this.compile(source);
    const ctx = this.createContext(lib, context, params);
    const evaluator = new CqlEvaluator(ctx, this.registry);
    await this.resolveIncludes(lib, evaluator, context);
    return this.withTimeout(evaluator.evaluateLibrary());
  }

  /**
   * Parse, compile, and evaluate a single named expression from a CQL library.
   */
  async evaluateExpression(
    source: string,
    name: string,
    context: unknown,
    params?: Record<string, CqlValue | null>,
  ): Promise<CqlValue | null> {
    const lib = this.compile(source);
    const ctx = this.createContext(lib, context, params);
    const evaluator = new CqlEvaluator(ctx, this.registry);
    await this.resolveIncludes(lib, evaluator, context);
    return this.withTimeout(evaluator.evaluateExpression(name));
  }

  /** Access the function registry for custom function registration. */
  get functions(): FunctionRegistry {
    return this.registry;
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  /**
   * Resolves included libraries from the main library's `includes` list and registers
   * each included library's evaluator under its alias in the main evaluator.
   */
  private async resolveIncludes(
    lib: Library,
    evaluator: CqlEvaluator,
    context: unknown,
  ): Promise<void> {
    if (!lib.includes || lib.includes.length === 0) return;
    for (const inc of lib.includes) {
      if (!this.libraryResolver) {
        throw new Error(
          `CQL library '${inc.name}' is included but no libraryResolver was provided`,
        );
      }
      const includedSource = await this.libraryResolver(inc.name, inc.version);
      const includedLib = this.compile(includedSource);
      const includedCtx = this.createContext(includedLib, context);
      const includedEvaluator = new CqlEvaluator(includedCtx, this.registry);
      // Recursively resolve includes in the included library
      await this.resolveIncludes(includedLib, includedEvaluator, context);
      evaluator.registerIncludedLibrary(inc.alias, includedEvaluator);
    }
  }

  private createContext(
    lib: Library,
    context: unknown,
    params?: Record<string, CqlValue | null>,
  ): EvalContext {
    const ctx = new EvalContext(
      lib,
      context,
      this.dataProvider,
      this.terminologyProvider,
      null,
      this.ucumService,
    );

    // Register code systems from library definitions
    if (lib.codeSystems) {
      for (const cs of lib.codeSystems) {
        ctx.codeSystems.set(cs.name, new CqlCode(cs.id, cs.id, '', cs.version));
      }
    }

    // Register value sets from library definitions
    if (lib.valueSets) {
      for (const vs of lib.valueSets) {
        ctx.valueSets.set(vs.name, vs.id);
      }
    }

    // Populate user-supplied parameters
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        ctx.parameters.set(k, v);
      }
    }

    return ctx;
  }

  private async withTimeout<T>(promise: Promise<T>): Promise<T> {
    if (this.timeout <= 0) return promise;
    const ms = this.timeout;
    return Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        // Declare setTimeout for environments without DOM lib
        const fn = (globalThis as Record<string, unknown>)['setTimeout'] as (
          cb: () => void,
          delay: number,
        ) => unknown;
        fn(() => reject(new CqlTimeoutError(ms)), ms);
      }),
    ]);
  }
}
