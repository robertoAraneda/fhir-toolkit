/**
 * Test Report Status
 * 
 * The current status of the test report.
 *
 * @see http://hl7.org/fhir/ValueSet/report-status-codes
 */

export type TestReportStatusType = 'completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error';

export enum TestReportStatusEnum {
  /** Completed */
  Completed = 'completed',
  /** In Progress */
  InProgress = 'in-progress',
  /** Waiting */
  Waiting = 'waiting',
  /** Stopped */
  Stopped = 'stopped',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const TestReportStatusValues = ['completed', 'in-progress', 'waiting', 'stopped', 'entered-in-error'] as const;
