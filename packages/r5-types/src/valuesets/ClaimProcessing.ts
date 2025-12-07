/**
 * Claim Processing Codes
 * 
 * This value set includes Claim Processing Outcome codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-outcome
 */

export type ClaimProcessingType = 'queued' | 'complete' | 'error' | 'partial';

export enum ClaimProcessingEnum {
  /** Queued */
  Queued = 'queued',
  /** Processing Complete */
  Complete = 'complete',
  /** Error */
  Error = 'error',
  /** Partial Processing */
  Partial = 'partial',
}

export const ClaimProcessingValues = ['queued', 'complete', 'error', 'partial'] as const;
