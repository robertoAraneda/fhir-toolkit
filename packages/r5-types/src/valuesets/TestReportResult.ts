/**
 * Test Report Result
 * 
 * The reported execution result.
 *
 * @see http://hl7.org/fhir/ValueSet/report-result-codes
 */

export type TestReportResultType = 'pass' | 'fail' | 'pending';

export enum TestReportResultEnum {
  /** Pass */
  Pass = 'pass',
  /** Fail */
  Fail = 'fail',
  /** Pending */
  Pending = 'pending',
}

export const TestReportResultValues = ['pass', 'fail', 'pending'] as const;
