/**
 * FHIRPath Evaluator
 *
 * Wraps the fhirpath.js library for constraint evaluation.
 * Provides caching, context management, and error handling.
 */

import fhirpath from 'fhirpath';
import fhirpathR4Model from 'fhirpath/fhir-context/r4';
import { LRUCache } from 'lru-cache';
import { type ResourceIndex, resolveReference } from './fhirpath-resolver.js';
import { isCodeInValueSet, type Coding } from './terminology-validator.js';
import type { SpecRegistry } from '../core/spec-registry.js';

export interface FHIRPathContext {
  /** The resource being validated */
  resource: any;
  /** The root resource (for contained resources) */
  rootResource?: any;
  /** Additional context variables */
  context?: Record<string, any>;
  /** Resource index for resolve() support */
  resourceIndex?: ResourceIndex;
  /** SpecRegistry for memberOf() terminology validation */
  registry?: SpecRegistry;
}

export interface EvaluationResult {
  /** Whether the evaluation was successful */
  success: boolean;
  /** The result of the evaluation */
  result?: any[];
  /** Error message if evaluation failed */
  error?: string;
}

export interface ConstraintEvaluationResult {
  /** Whether the constraint passed */
  passed: boolean;
  /** Error message if evaluation failed */
  error?: string;
}

// Mutable references set before each evaluation so compiled closures can access them.
let activeResourceIndex: ResourceIndex | undefined;
let activeRegistry: SpecRegistry | undefined;

// userInvocationTable compiled into all cached expressions.
const userInvocationTable = {
  resolve: {
    fn: (inputs: any[]) => {
      if (!activeResourceIndex) return [];
      const results: any[] = [];
      for (const input of inputs) {
        const ref = typeof input === 'string' ? input : input?.reference;
        if (!ref) continue;
        const resolved = resolveReference(ref, activeResourceIndex);
        if (resolved) results.push(resolved);
      }
      return results;
    },
    arity: { 0: [] as string[] },
  },
  memberOf: {
    fn: (inputs: any[], valueSetUrl: string) => {
      if (!activeRegistry || inputs.length !== 1 || inputs[0] == null) return [];
      const input = inputs[0];
      const valueSet = activeRegistry.getValueSet(valueSetUrl);
      if (!valueSet) {
        // Can't validate against unknown ValueSet - return true (fail-open)
        return [true];
      }

      // Input is a code string
      if (typeof input === 'string') {
        return [isCodeInValueSet({ code: input }, valueSet, activeRegistry)];
      }

      // Input is a Coding { system, code }
      if (input.code !== undefined && !Array.isArray(input.coding)) {
        const coding: Coding = { system: input.system, code: input.code };
        return [isCodeInValueSet(coding, valueSet, activeRegistry)];
      }

      // Input is a CodeableConcept { coding: [...] }
      if (Array.isArray(input.coding)) {
        const result = input.coding.some((c: any) =>
          isCodeInValueSet({ system: c.system, code: c.code }, valueSet, activeRegistry!)
        );
        return [result];
      }

      return [true];
    },
    arity: { 1: ['String'] as string[] },
  },
};

// Cache for compiled FHIRPath expressions (all compiled with resolve() support)
const expressionCache = new LRUCache<string, any>({
  max: 500,
});

/**
 * Evaluate a FHIRPath expression against a resource
 */
export function evaluate(
  expression: string,
  resource: any,
  context?: FHIRPathContext
): EvaluationResult {
  try {
    // Build the environment with context variables
    // fhirpath.js expects variables without the % prefix
    const environment: Record<string, any> = {};

    if (context) {
      // Standard FHIRPath context variables
      environment['resource'] = context.resource || resource;
      environment['rootResource'] = context.rootResource || resource;

      // Additional context variables
      if (context.context) {
        for (const [key, value] of Object.entries(context.context)) {
          environment[key] = value;
        }
      }
    } else {
      environment['resource'] = resource;
      environment['rootResource'] = resource;
    }

    // Check cache for compiled expression
    let compiled = expressionCache.get(expression);
    if (!compiled) {
      compiled = fhirpath.compile(expression, fhirpathR4Model, {
        userInvocationTable,
      });
      expressionCache.set(expression, compiled);
    }

    // Set mutable references for this evaluation.
    // The compiled closures (resolve, memberOf) read from these.
    const previousIndex = activeResourceIndex;
    const previousRegistry = activeRegistry;
    activeResourceIndex = context?.resourceIndex;
    activeRegistry = context?.registry;
    try {
      const result = compiled(resource, environment);
      return { success: true, result };
    } finally {
      activeResourceIndex = previousIndex;
      activeRegistry = previousRegistry;
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Evaluate a FHIRPath constraint expression
 * Returns true if the constraint is satisfied (expression evaluates to true or empty)
 */
export function evaluateConstraint(
  expression: string,
  resource: any,
  context?: FHIRPathContext
): ConstraintEvaluationResult {
  const evalResult = evaluate(expression, resource, context);

  if (!evalResult.success) {
    return {
      passed: false,
      error: evalResult.error,
    };
  }

  // Constraint passes if result is:
  // - empty array (no items to check)
  // - array with true as first element
  // - array with all truthy values
  const result = evalResult.result || [];

  if (result.length === 0) {
    // Empty result means constraint is satisfied (no items to validate)
    return { passed: true };
  }

  // For boolean constraints, check if the result is true
  if (result.length === 1 && typeof result[0] === 'boolean') {
    return { passed: result[0] };
  }

  // For other results, check if all values are truthy
  const allTruthy = result.every((v) => Boolean(v));
  return { passed: allTruthy };
}

/**
 * Evaluate a FHIRPath expression at a specific path within a resource
 */
export function evaluateAtPath(
  expression: string,
  resource: any,
  path: string,
  context?: FHIRPathContext
): EvaluationResult {
  // First, navigate to the specified path
  const pathResult = evaluate(path, resource, context);

  if (!pathResult.success || !pathResult.result || pathResult.result.length === 0) {
    return {
      success: true,
      result: [],
    };
  }

  // Evaluate the expression against each element at the path
  const results: any[] = [];
  for (const element of pathResult.result) {
    const elementContext: FHIRPathContext = {
      resource: element,
      rootResource: context?.rootResource || resource,
      context: context?.context,
    };

    const evalResult = evaluate(expression, element, elementContext);
    if (evalResult.success && evalResult.result) {
      results.push(...evalResult.result);
    }
  }

  return {
    success: true,
    result: results,
  };
}

/**
 * Extract the element path from a constraint context
 * Converts ElementDefinition path to FHIRPath expression
 */
export function pathToFHIRPath(elementPath: string): string {
  // Convert dot notation to FHIRPath
  // e.g., "Patient.name.family" stays as "Patient.name.family"
  // but we need to handle choice types
  return elementPath.replace(/\[x\]/g, '');
}

/**
 * Clear the expression cache
 */
export function clearCache(): void {
  expressionCache.clear();
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { size: number; max: number } {
  return {
    size: expressionCache.size,
    max: 500,
  };
}
