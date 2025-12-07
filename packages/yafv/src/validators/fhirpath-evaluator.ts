/**
 * FHIRPath Evaluator
 *
 * Wraps the fhirpath.js library for constraint evaluation.
 * Provides caching, context management, and error handling.
 */

import fhirpath from 'fhirpath';
import fhirpathR4Model from 'fhirpath/fhir-context/r4';
import { LRUCache } from 'lru-cache';

export interface FHIRPathContext {
  /** The resource being validated */
  resource: any;
  /** The root resource (for contained resources) */
  rootResource?: any;
  /** Additional context variables */
  context?: Record<string, any>;
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

// Cache for compiled FHIRPath expressions
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
      compiled = fhirpath.compile(expression, fhirpathR4Model);
      expressionCache.set(expression, compiled);
    }

    // Evaluate the expression with R4 model for proper choice type resolution
    const result = compiled(resource, environment);

    return {
      success: true,
      result,
    };
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
