/**
 * RemittanceOutcome
 * 
 * The outcome of the processing.
 *
 * @see http://hl7.org/fhir/ValueSet/remittance-outcome
 */

export type RemittanceOutcomeType = 'queued' | 'complete' | 'error' | 'partial';

export enum RemittanceOutcomeEnum {
  /** Queued */
  Queued = 'queued',
  /** Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial */
  Partial = 'partial',
}

export const RemittanceOutcomeValues = ['queued', 'complete', 'error', 'partial'] as const;
