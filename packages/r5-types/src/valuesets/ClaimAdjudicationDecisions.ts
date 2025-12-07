/**
 * Claim Adjudication Decision Codes
 * 
 * This value set includes Claim Adjudication Decision codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-decision
 */

export type ClaimAdjudicationDecisionsType = 'denied' | 'approved' | 'partial' | 'pending';

export enum ClaimAdjudicationDecisionsEnum {
  /** Denied */
  Denied = 'denied',
  /** Approved */
  Approved = 'approved',
  /** Partial */
  Partial = 'partial',
  /** Pending */
  Pending = 'pending',
}

export const ClaimAdjudicationDecisionsValues = ['denied', 'approved', 'partial', 'pending'] as const;
