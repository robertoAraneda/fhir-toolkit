/**
 * Example Coverage Financial Exception Codes
 * 
 * This value set includes Example Coverage Financial Exception Codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-financial-exception
 */

export type ExampleCoverageFinancialExceptionType = 'retired' | 'foster';

export enum ExampleCoverageFinancialExceptionEnum {
  /** Retired */
  Retired = 'retired',
  /** Foster child */
  Foster = 'foster',
}

export const ExampleCoverageFinancialExceptionValues = ['retired', 'foster'] as const;
