/**
 * Enrollment Outcome
 * 
 * The outcome of the processing.
 *
 * @see http://hl7.org/fhir/ValueSet/enrollment-outcome
 */

export type EnrollmentOutcomeType = 'queued' | 'complete' | 'error' | 'partial';

export enum EnrollmentOutcomeEnum {
  /** Queued */
  Queued = 'queued',
  /** Processing Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial Processing */
  Partial = 'partial',
}

export const EnrollmentOutcomeValues = ['queued', 'complete', 'error', 'partial'] as const;
