/**
 * Eligibility Outcome
 * 
 * The outcome of the processing.
 *
 * @see http://hl7.org/fhir/ValueSet/eligibility-outcome
 */

export type EligibilityOutcomeType = 'queued' | 'complete' | 'error' | 'partial';

export enum EligibilityOutcomeEnum {
  /** Queued */
  Queued = 'queued',
  /** Processing Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial Processing */
  Partial = 'partial',
}

export const EligibilityOutcomeValues = ['queued', 'complete', 'error', 'partial'] as const;
