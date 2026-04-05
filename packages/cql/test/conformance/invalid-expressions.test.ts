/**
 * CQL Invalid Expression Conformance Tests
 *
 * Verifies that the CQL engine throws errors for expressions marked as
 * invalid="true" or invalid="semantic" in the conformance test fixtures.
 *
 * Tests that FAIL here (engine returns null instead of throwing) represent
 * bugs to fix in Phase 2.
 *
 * Results as of initial implementation:
 * 5 / 42 invalid expression tests correctly throw errors
 * 37 tests where engine returns a value instead of throwing (to fix in Phase 2)
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { CqlEngine, CqlSyntaxError, CqlEvalError } from '../../src/index.js';
import { parseTestFile } from './xml-parser.js';
import { runConformanceTest } from './runner.js';

const FIXTURES_DIR = join(__dirname, 'fixtures');
const engine = new CqlEngine();

// Collect invalid tests from all fixture files.
// The xml-parser only marks invalid="true" as invalid (boolean), so we
// also scan raw XML to capture invalid="semantic" tests.
type InvalidTest = { file: string; name: string; expression: string; invalidKind: 'true' | 'semantic' };
const invalidTests: InvalidTest[] = [];

for (const file of readdirSync(FIXTURES_DIR).filter((f) => f.endsWith('.xml'))) {
  const filePath = join(FIXTURES_DIR, file);
  const xml = readFileSync(filePath, 'utf-8');

  // Use the parser for invalid="true" tests (parser sets invalid: true for these)
  const tests = parseTestFile(xml, file);
  for (const test of tests) {
    if (test.invalid) {
      invalidTests.push({ file, name: test.name, expression: test.expression, invalidKind: 'true' });
    }
  }

  // Also extract invalid="semantic" tests directly from raw XML, since the
  // parser regex only matches invalid="true"
  const semanticRegex = /<test\s+name="([^"]*)"[^>]*>([\s\S]*?)<\/test>/g;
  let testMatch: RegExpExecArray | null;
  while ((testMatch = semanticRegex.exec(xml)) !== null) {
    const testName = testMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    const testBody = testMatch[2];
    const exprMatch = testBody.match(/<expression([^>]*)>([\s\S]*?)<\/expression>/);
    if (!exprMatch) continue;
    const exprAttrs = exprMatch[1];
    if (!/invalid\s*=\s*"semantic"/.test(exprAttrs)) continue;
    const expression = exprMatch[2]
      .trim()
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
    invalidTests.push({ file, name: testName, expression, invalidKind: 'semantic' });
  }
}

describe(`invalid CQL expressions (${invalidTests.length} total)`, () => {
  for (const { file, name, expression, invalidKind } of invalidTests) {
    it(`[${file}] ${name} (invalid=${invalidKind})`, async () => {
      await expect(
        runConformanceTest(engine, expression),
      ).rejects.toThrow();
    });
  }
});
