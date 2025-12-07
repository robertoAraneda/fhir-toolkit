/**
 * Global test setup for @fhir-toolkit/r4
 *
 * This file configures the validator and other global settings
 * required for testing FHIR resources.
 */

import { beforeAll } from 'vitest';
import { setValidator } from '../src/index.js';
import type { IResource } from '@fhir-toolkit/r4-types';

export interface ValidationIssue {
  severity: 'error' | 'warning' | 'information';
  code: string;
  diagnostics: string;
  expression?: string[];
}

export interface ValidationResult {
  isValid: boolean;
  issues: ValidationIssue[];
}

/**
 * Configure the validator before all tests run
 */
beforeAll(async () => {
  const { validate } = await import('@fhir-toolkit/yafv');

  setValidator(async (resource: IResource): Promise<ValidationResult> => {
    const outcome = await validate(resource as any);
    return {
      isValid: !outcome.issue.some(
        (i) => i.severity === 'error' || i.severity === 'fatal'
      ),
      issues: outcome.issue.map((i) => ({
        severity: i.severity as 'error' | 'warning' | 'information',
        code: i.code || 'unknown',
        diagnostics: i.diagnostics || '',
        expression: i.expression,
      })),
    };
  });
});
