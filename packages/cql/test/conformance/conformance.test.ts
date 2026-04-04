/**
 * CQL Spec Conformance Test Suite
 *
 * Runs the official cqframework/cql-tests conformance suite (1,743 tests)
 * against our CQL engine. Tests are loaded from XML fixture files and
 * each expression is evaluated, then compared against the expected output.
 *
 * Some tests WILL fail — that's expected. The goal is to measure our
 * conformance percentage and identify gaps.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { CqlEngine } from '../../src/index.js';
import { parseTestFile } from './xml-parser.js';
import { parseCvl } from './cvl-parser.js';
import { runConformanceTest, compareValues } from './runner.js';

const FIXTURES_DIR = join(__dirname, 'fixtures');
const engine = new CqlEngine();

// Capabilities we DON'T support — tests requiring these are skipped
const UNSUPPORTED_CAPABILITIES = new Set([
  'ucum-unit-conversion-support', // UCUM unit conversion
  // Add others as discovered
]);

const files = readdirSync(FIXTURES_DIR).filter((f) => f.endsWith('.xml'));

for (const file of files) {
  const xml = readFileSync(join(FIXTURES_DIR, file), 'utf-8');
  const tests = parseTestFile(xml, file);

  describe(file.replace('.xml', ''), () => {
    for (const test of tests) {
      // Skip tests requiring unsupported capabilities
      const unsupported = test.capabilities.find((c) => UNSUPPORTED_CAPABILITIES.has(c));
      if (unsupported) {
        it.skip(`${test.group} > ${test.name} (requires: ${unsupported})`, () => {});
        continue;
      }

      // Skip tests marked as invalid (expression should cause an error)
      if (test.invalid) {
        it.skip(`${test.group} > ${test.name} (invalid expression)`, () => {});
        continue;
      }

      // Skip tests with no expected output
      if (!test.expectedOutput) {
        it.skip(`${test.group} > ${test.name} (no expected output)`, () => {});
        continue;
      }

      it(`${test.group} > ${test.name}: ${test.expression}`, async () => {
        // Parse expected output first — if we can't parse it, skip gracefully
        let expected: CqlValue | null;
        try {
          expected = parseCvl(test.expectedOutput);
        } catch (err) {
          throw new Error(
            `Cannot parse expected output: ${test.expectedOutput}\n  Error: ${(err as Error).message}`,
          );
        }

        let actual: CqlValue | null;
        try {
          actual = await runConformanceTest(engine, test.expression);
        } catch (err) {
          throw new Error(
            `Evaluation failed: ${(err as Error).message}\n  Expression: ${test.expression}\n  Expected: ${test.expectedOutput}`,
          );
        }

        const pass = compareValues(actual, expected);

        if (!pass) {
          throw new Error(
            `Value mismatch\n  Expression: ${test.expression}\n  Expected: ${test.expectedOutput} (${expected?.type ?? 'null'})\n  Actual: ${actual?.toString() ?? 'null'} (${actual?.type ?? 'null'})`,
          );
        }
      });
    }
  });
}
