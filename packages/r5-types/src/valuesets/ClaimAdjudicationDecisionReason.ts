/**
 * Claim Adjudication Decision Reason Codes
 * 
 * This value set includes example Claim Adjudication Decision Reason codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-decision-reason
 */

export type ClaimAdjudicationDecisionReasonType = '0001' | '0002' | '0003' | '0004' | '0005';

export enum ClaimAdjudicationDecisionReasonEnum {
  /** Not medically necessary */
  _0001 = '0001',
  /** Prior authorization not obtained */
  _0002 = '0002',
  /** Provider out-of-network */
  _0003 = '0003',
  /** Service inconsistent with patient age */
  _0004 = '0004',
  /** Benefit limits exceeded */
  _0005 = '0005',
}

export const ClaimAdjudicationDecisionReasonValues = ['0001', '0002', '0003', '0004', '0005'] as const;
