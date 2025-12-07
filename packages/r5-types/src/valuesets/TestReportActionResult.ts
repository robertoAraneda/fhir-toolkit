/**
 * Test Report Action Result
 * 
 * The results of executing an action.
 *
 * @see http://hl7.org/fhir/ValueSet/report-action-result-codes
 */

export type TestReportActionResultType = 'pass' | 'skip' | 'fail' | 'warning' | 'error';

export enum TestReportActionResultEnum {
  /** Pass */
  Pass = 'pass',
  /** Skip */
  Skip = 'skip',
  /** Fail */
  Fail = 'fail',
  /** Warning */
  Warning = 'warning',
  /** Error */
  Error = 'error',
}

export const TestReportActionResultValues = ['pass', 'skip', 'fail', 'warning', 'error'] as const;
