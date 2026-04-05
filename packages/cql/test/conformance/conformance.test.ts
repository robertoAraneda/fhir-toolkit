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
import { CqlEngine, CqlDateTime } from '../../src/index.js';
import { createUcumService } from '@fhir-toolkit/ucum';
import { parseTestFile } from './xml-parser.js';
import { parseCvl } from './cvl-parser.js';
import { runConformanceTest, compareValues } from './runner.js';

const FIXTURES_DIR = join(__dirname, 'fixtures');
const ucumService = createUcumService();
const engine = new CqlEngine({ ucumService });

// Capabilities we DON'T support — tests requiring these are skipped
const UNSUPPORTED_CAPABILITIES = new Set<string>([
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

      // Tests marked as invalid: evaluate and expect an error (mirrors Go conformance runner)
      if (test.invalid) {
        it(`${test.group} > ${test.name} (invalid=${test.invalid})`, async () => {
          await expect(runConformanceTest(engine, test.expression)).rejects.toThrow();
        });
        continue;
      }

      // Tests with no expected output: evaluate and just verify no error (mirrors Go)
      if (!test.expectedOutput) {
        it(`${test.group} > ${test.name} (no output check)`, async () => {
          await expect(runConformanceTest(engine, test.expression)).resolves.not.toThrow();
        });
        continue;
      }

      // Issue34A: Now() returns a dynamic DateTime — verify type instead of exact value
      if (test.name === 'Issue34A') {
        it(`[Issue34A] Now() returns a DateTime value`, async () => {
          const result = await runConformanceTest(engine, test.expression);
          expect(result).not.toBeNull();
          expect(result?.type).toBe('DateTime');
          expect(result).toBeInstanceOf(CqlDateTime);
        });
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
