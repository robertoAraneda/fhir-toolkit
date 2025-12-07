/**
 * Test Script Scope Phase Type
 * 
 * The phase of testing for this artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-scope-phase-codes
 */

export type TestScriptScopePhaseTypeType = 'unit' | 'integration' | 'production';

export enum TestScriptScopePhaseTypeEnum {
  /** Unit */
  Unit = 'unit',
  /** Integration */
  Integration = 'integration',
  /** Production */
  Production = 'production',
}

export const TestScriptScopePhaseTypeValues = ['unit', 'integration', 'production'] as const;
