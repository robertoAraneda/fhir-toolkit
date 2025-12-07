/**
 * MeasureReportStatus
 * 
 * The status of the measure report.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-report-status
 */

export type MeasureReportStatusType = 'complete' | 'pending' | 'error';

export enum MeasureReportStatusEnum {
  /** Complete */
  Complete = 'complete',
  /** Pending */
  Pending = 'pending',
  /** Error */
  Error = 'error',
}

export const MeasureReportStatusValues = ['complete', 'pending', 'error'] as const;
