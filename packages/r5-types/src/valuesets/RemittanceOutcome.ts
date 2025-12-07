/**
 * RemittanceOutcome
 * 
 * The outcome of the processing.
 *
 * @see http://hl7.org/fhir/ValueSet/remittance-outcome
 */

export type RemittanceOutcomeType = 'complete' | 'error' | 'partial';

export enum RemittanceOutcomeEnum {
  /** Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial */
  Partial = 'partial',
}

export const RemittanceOutcomeValues = ['complete', 'error', 'partial'] as const;
