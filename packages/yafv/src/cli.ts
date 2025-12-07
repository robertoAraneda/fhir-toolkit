#!/usr/bin/env node

/**
 * FHIR Validator CLI
 *
 * Command-line interface for validating FHIR resources.
 *
 * Usage:
 *   fhir-validate <file> [options]
 *   fhir-validate patient.json
 *   fhir-validate bundle.json --profile http://example.org/Profile
 *   fhir-validate resources/*.json --format json
 */

import { readFile } from 'fs/promises';
import { glob } from 'glob';
import { FhirValidator } from './core/validator.js';
import type { FhirResource, ValidationOptions, OperationOutcome } from './core/types.js';

interface CliOptions {
  files: string[];
  profile?: string;
  format: 'text' | 'json';
  level: 'structural' | 'constraints' | 'terminology' | 'full';
  ig?: string;
  quiet: boolean;
  failFast: boolean;
}

function parseArgs(args: string[]): CliOptions {
  const options: CliOptions = {
    files: [],
    format: 'text',
    level: 'full',
    quiet: false,
    failFast: false,
  };

  let i = 0;
  while (i < args.length) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else if (arg === '--version' || arg === '-v') {
      console.log('fhir-validator-node v0.1.0');
      process.exit(0);
    } else if (arg === '--profile' || arg === '-p') {
      options.profile = args[++i];
    } else if (arg === '--format' || arg === '-f') {
      const format = args[++i];
      if (format === 'json' || format === 'text') {
        options.format = format;
      } else {
        console.error(`Invalid format: ${format}. Use 'text' or 'json'.`);
        process.exit(1);
      }
    } else if (arg === '--level' || arg === '-l') {
      const level = args[++i] ?? '';
      if (['structural', 'constraints', 'terminology', 'full'].includes(level)) {
        options.level = level as CliOptions['level'];
      } else {
        console.error(`Invalid level: ${level}. Use 'structural', 'constraints', 'terminology', or 'full'.`);
        process.exit(1);
      }
    } else if (arg === '--ig') {
      options.ig = args[++i];
    } else if (arg === '--quiet' || arg === '-q') {
      options.quiet = true;
    } else if (arg === '--fail-fast') {
      options.failFast = true;
    } else if (arg && !arg.startsWith('-')) {
      options.files.push(arg);
    } else {
      console.error(`Unknown option: ${arg}`);
      process.exit(1);
    }
    i++;
  }

  return options;
}

function printHelp(): void {
  console.log(`
FHIR Validator CLI

Usage:
  fhir-validate <file> [options]
  fhir-validate <pattern> [options]

Arguments:
  file              Path to a FHIR resource JSON file
  pattern           Glob pattern for multiple files (e.g., "*.json")

Options:
  -h, --help        Show this help message
  -v, --version     Show version
  -p, --profile     Profile URL to validate against
  -f, --format      Output format: 'text' (default) or 'json'
  -l, --level       Validation level: 'structural', 'constraints', 'terminology', or 'full' (default)
  --ig              Path to Implementation Guide directory
  -q, --quiet       Only output errors
  --fail-fast       Stop on first error

Examples:
  fhir-validate patient.json
  fhir-validate bundle.json --profile http://example.org/Profile
  fhir-validate "resources/*.json" --format json
  fhir-validate patient.json --ig ./my-ig
`);
}

function formatOutcomeText(outcome: OperationOutcome, filePath: string): string {
  const lines: string[] = [];
  const errors = outcome.issue.filter((i) => i.severity === 'error' || i.severity === 'fatal');
  const warnings = outcome.issue.filter((i) => i.severity === 'warning');
  const info = outcome.issue.filter((i) => i.severity === 'information');

  if (errors.length === 0) {
    lines.push(`✓ ${filePath}: Valid`);
  } else {
    lines.push(`✗ ${filePath}: ${errors.length} error(s)`);
  }

  for (const issue of errors) {
    const path = issue.expression?.[0] || '';
    lines.push(`  ERROR: ${issue.diagnostics}${path ? ` (${path})` : ''}`);
  }

  for (const issue of warnings) {
    const path = issue.expression?.[0] || '';
    lines.push(`  WARNING: ${issue.diagnostics}${path ? ` (${path})` : ''}`);
  }

  if (!errors.length && !warnings.length && info.length > 0) {
    for (const issue of info) {
      lines.push(`  INFO: ${issue.diagnostics}`);
    }
  }

  return lines.join('\n');
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printHelp();
    process.exit(1);
  }

  const options = parseArgs(args);

  if (options.files.length === 0) {
    console.error('No files specified');
    process.exit(1);
  }

  // Resolve glob patterns
  const files: string[] = [];
  for (const pattern of options.files) {
    const matches = await glob(pattern);
    files.push(...matches);
  }

  if (files.length === 0) {
    console.error('No files found matching the pattern(s)');
    process.exit(1);
  }

  // Initialize validator
  const validator = new FhirValidator();
  await validator.initialize();

  // Load IG if specified
  if (options.ig) {
    const count = await validator.loadIG(options.ig);
    if (!options.quiet) {
      console.log(`Loaded ${count} specs from IG: ${options.ig}`);
    }
  }

  // Validation options
  const validationOptions: ValidationOptions = {
    level: options.level,
    profile: options.profile,
    failFast: options.failFast,
    includeWarnings: true,
  };

  // Validate each file
  const results: Array<{ file: string; outcome: OperationOutcome }> = [];
  let hasErrors = false;

  for (const file of files) {
    try {
      const content = await readFile(file, 'utf-8');
      const resource: FhirResource = JSON.parse(content);
      const outcome = await validator.validate(resource, validationOptions);

      results.push({ file, outcome });

      if (outcome.issue.some((i) => i.severity === 'error' || i.severity === 'fatal')) {
        hasErrors = true;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      results.push({
        file,
        outcome: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'fatal',
              code: 'exception',
              diagnostics: `Failed to process file: ${errorMessage}`,
            },
          ],
        },
      });
      hasErrors = true;
    }
  }

  // Output results
  if (options.format === 'json') {
    const output = results.map((r) => ({
      file: r.file,
      outcome: r.outcome,
    }));
    console.log(JSON.stringify(output, null, 2));
  } else {
    for (const result of results) {
      if (!options.quiet || result.outcome.issue.some((i) => i.severity === 'error' || i.severity === 'fatal')) {
        console.log(formatOutcomeText(result.outcome, result.file));
      }
    }

    // Summary
    if (files.length > 1 && !options.quiet) {
      const valid = results.filter(
        (r) => !r.outcome.issue.some((i) => i.severity === 'error' || i.severity === 'fatal')
      ).length;
      console.log(`\nSummary: ${valid}/${files.length} files valid`);
    }
  }

  // Exit with appropriate code
  process.exit(hasErrors ? 1 : 0);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
