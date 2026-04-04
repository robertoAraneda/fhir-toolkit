/**
 * Test execution helpers for CQL conformance tests.
 */

import { CqlEngine } from '../../src/index.js';
import { parseCvl } from './cvl-parser.js';
import type { CqlValue } from '../../src/types/value.js';

/**
 * Compare two CqlValues using equivalence semantics.
 * Returns true if both are null or if they are equivalent.
 */
export function compareValues(actual: CqlValue | null, expected: CqlValue | null): boolean {
  if (actual === null && expected === null) return true;
  if (actual === null || expected === null) return false;

  // Use equivalent() for comparison (more lenient than equals)
  try {
    return actual.equivalent(expected);
  } catch {
    // If equivalent throws (e.g., incompatible types), try equals
    try {
      return actual.equals(expected);
    } catch {
      return false;
    }
  }
}

/**
 * Run a single conformance test expression through the CQL engine.
 *
 * Wraps the expression in a minimal CQL library and evaluates it.
 */
export async function runConformanceTest(
  engine: CqlEngine,
  expression: string,
): Promise<CqlValue | null> {
  const source = `library ConformanceTest version '1.0'\ndefine __result: ${expression}`;
  return engine.evaluateExpression(source, '__result', null);
}
