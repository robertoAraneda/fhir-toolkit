import type { CqlValue } from '../types/index.js';
import type { CqlCode } from '../types/index.js';
import type { Library } from '../ast/library.js';
import type { DataProvider } from '../providers/data.js';
import type { TerminologyProvider } from '../providers/terminology.js';
import type { UcumServiceLike } from '../engine.js';
import type { ModelInfo } from '../model/model-info.js';

export class EvalContext {
  readonly aliases = new Map<string, CqlValue | null>();
  readonly letBindings = new Map<string, CqlValue | null>();
  readonly definitions = new Map<string, CqlValue | null>();
  readonly parameters = new Map<string, CqlValue | null>();
  readonly codeSystems = new Map<string, CqlCode>();
  readonly valueSets = new Map<string, string>();
  thisValue: CqlValue | null = null;
  indexValue = 0;
  totalValue: CqlValue | null = null;

  constructor(
    readonly library: Library | null,
    readonly contextResource: unknown,
    readonly dataProvider: DataProvider | null = null,
    readonly terminologyProvider: TerminologyProvider | null = null,
    private readonly parent: EvalContext | null = null,
    readonly ucumService: UcumServiceLike | null = null,
    readonly modelInfo: ModelInfo | null = null,
  ) {}

  childScope(): EvalContext {
    const child = new EvalContext(
      this.library,
      this.contextResource,
      this.dataProvider,
      this.terminologyProvider,
      this,
      this.ucumService,
      this.modelInfo,
    );
    return child;
  }

  resolveIdentifier(name: string): CqlValue | null | undefined {
    // Resolution order: aliases -> letBindings -> definitions -> parameters -> parent
    if (this.aliases.has(name)) return this.aliases.get(name) ?? null;
    if (this.letBindings.has(name)) return this.letBindings.get(name) ?? null;
    if (this.definitions.has(name)) return this.definitions.get(name) ?? null;
    if (this.parameters.has(name)) return this.parameters.get(name) ?? null;
    if (this.parent) return this.parent.resolveIdentifier(name);
    return undefined; // not found
  }

  resolveValueSetUrl(name: string): string | null {
    if (this.valueSets.has(name)) return this.valueSets.get(name) ?? null;
    if (this.parent) return this.parent.resolveValueSetUrl(name);
    return null;
  }

  resolveCodeSystem(name: string): CqlCode | null {
    if (this.codeSystems.has(name)) return this.codeSystems.get(name) ?? null;
    if (this.parent) return this.parent.resolveCodeSystem(name);
    return null;
  }
}
