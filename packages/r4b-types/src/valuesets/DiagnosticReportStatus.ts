/**
 * DiagnosticReportStatus
 * 
 * The status of the diagnostic report.
 *
 * @see http://hl7.org/fhir/ValueSet/diagnostic-report-status
 */

export type DiagnosticReportStatusType = 'registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled' | 'entered-in-error' | 'unknown';

export enum DiagnosticReportStatusEnum {
  /** Registered */
  Registered = 'registered',
  /** Partial */
  Partial = 'partial',
  /** Preliminary */
  Preliminary = 'preliminary',
  /** Final */
  Final = 'final',
  /** Amended */
  Amended = 'amended',
  /** Corrected */
  Corrected = 'corrected',
  /** Appended */
  Appended = 'appended',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const DiagnosticReportStatusValues = ['registered', 'partial', 'preliminary', 'final', 'amended', 'corrected', 'appended', 'cancelled', 'entered-in-error', 'unknown'] as const;
