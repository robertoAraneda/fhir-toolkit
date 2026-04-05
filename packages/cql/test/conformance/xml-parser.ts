/**
 * XML test file parser for the cqframework/cql-tests conformance suite.
 *
 * Uses simple regex/string-based parsing to avoid adding an XML dependency.
 * Handles the specific structure of the CQL conformance test XML files.
 */

export interface ConformanceTest {
  /** Test name from the name attribute. */
  name: string;
  /** Group name this test belongs to. */
  group: string;
  /** CQL expression to evaluate. */
  expression: string;
  /** Expected output in CVL format (empty string if test expects an error). */
  expectedOutput: string;
  /** Required capabilities (from <capability> elements inside the test). */
  capabilities: string[];
  /** Whether the expression is marked invalid="true". */
  invalid: boolean;
}

/**
 * Parse a CQL conformance test XML file into a flat array of tests.
 *
 * Extracts <group> and <test> elements with their attributes and content.
 * Tests marked with `invalid="true"` on the expression are included with
 * the `invalid` flag set, so the runner can handle them appropriately.
 */
export function parseTestFile(xml: string, fileName: string): ConformanceTest[] {
  const tests: ConformanceTest[] = [];

  // Collect file-level capabilities
  const fileCapabilities = extractFileCapabilities(xml);

  // Find all <group> elements
  const groupRegex = /<group\s+name="([^"]*)"[^>]*>([\s\S]*?)<\/group>/g;
  let groupMatch: RegExpExecArray | null;

  while ((groupMatch = groupRegex.exec(xml)) !== null) {
    const groupName = decodeXmlEntities(groupMatch[1]);
    const groupBody = groupMatch[2];

    // Collect group-level capabilities
    const groupCapabilities = extractCapabilities(groupBody, true);

    // Find all <test> elements within this group
    const testRegex = /<test\s+name="([^"]*)"[^>]*>([\s\S]*?)<\/test>/g;
    let testMatch: RegExpExecArray | null;

    while ((testMatch = testRegex.exec(groupBody)) !== null) {
      const testName = decodeXmlEntities(testMatch[1]);
      const testBody = testMatch[2];

      // Extract test-level capabilities
      const testCapabilities = extractCapabilities(testBody, false);

      // Merge capabilities: file + group + test level
      const allCapabilities = [
        ...fileCapabilities,
        ...groupCapabilities,
        ...testCapabilities,
      ];

      // Extract expression
      const exprMatch = testBody.match(/<expression([^>]*)>([\s\S]*?)<\/expression>/);
      if (!exprMatch) continue;

      const exprAttrs = exprMatch[1];
      const expression = decodeXmlEntities(exprMatch[2].trim());
      const invalid = /invalid\s*=\s*"true"/.test(exprAttrs);

      // Extract output (may not exist for invalid expressions)
      const outputMatch = testBody.match(/<output>([\s\S]*?)<\/output>/);
      const expectedOutput = outputMatch ? decodeXmlEntities(outputMatch[1].trim()) : '';

      tests.push({
        name: testName,
        group: groupName,
        expression,
        expectedOutput,
        capabilities: [...new Set(allCapabilities)],
        invalid,
      });
    }
  }

  return tests;
}

/**
 * Extract file-level capabilities (before any <group>).
 */
function extractFileCapabilities(xml: string): string[] {
  const firstGroupIdx = xml.indexOf('<group');
  if (firstGroupIdx === -1) return [];
  const header = xml.slice(0, firstGroupIdx);
  return extractCapabilities(header, false);
}

/**
 * Extract capability codes from a section of XML.
 *
 * If `beforeTestsOnly` is true, only extract capabilities that appear
 * before the first <test> element (group-level, not test-level).
 */
function extractCapabilities(xml: string, beforeTestsOnly: boolean): string[] {
  const section = beforeTestsOnly
    ? xml.slice(0, xml.indexOf('<test') === -1 ? xml.length : xml.indexOf('<test'))
    : xml;

  const caps: string[] = [];
  const capRegex = /<capability\s+code="([^"]*)"[^/]*\/?\s*>/g;
  let capMatch: RegExpExecArray | null;

  while ((capMatch = capRegex.exec(section)) !== null) {
    caps.push(capMatch[1]);
  }

  return caps;
}

/**
 * Decode common XML entities.
 */
function decodeXmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}
