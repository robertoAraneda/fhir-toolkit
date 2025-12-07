/**
 * Test Script Scope Conformance Type
 * 
 * The expectation of whether the test must pass for the system to be considered conformant with the artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-scope-conformance-codes
 */

export type TestScriptScopeConformanceTypeType = 'required' | 'optional' | 'strict';

export enum TestScriptScopeConformanceTypeEnum {
  /** Required */
  Required = 'required',
  /** Optional */
  Optional = 'optional',
  /** Strict */
  Strict = 'strict',
}

export const TestScriptScopeConformanceTypeValues = ['required', 'optional', 'strict'] as const;
