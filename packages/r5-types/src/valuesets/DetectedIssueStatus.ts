/**
 * Detected Issue Status
 * 
 * Indicates the status of a detected issue
 *
 * @see http://hl7.org/fhir/ValueSet/detectedissue-status
 */

export type DetectedIssueStatusType = 'preliminary' | 'final' | 'entered-in-error' | 'mitigated';

export enum DetectedIssueStatusEnum {
  /** Preliminary */
  Preliminary = 'preliminary',
  /** Final */
  Final = 'final',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Mitigated */
  Mitigated = 'mitigated',
}

export const DetectedIssueStatusValues = ['preliminary', 'final', 'entered-in-error', 'mitigated'] as const;
