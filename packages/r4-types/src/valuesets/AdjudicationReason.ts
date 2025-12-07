/**
 * Adjudication Reason Codes
 * 
 * This value set includes smattering of Adjudication Reason codes.
 *
 * @see http://hl7.org/fhir/ValueSet/adjudication-reason
 */

export type AdjudicationReasonType = 'ar001' | 'ar002';

export enum AdjudicationReasonEnum {
  /** Not covered */
  Ar001 = 'ar001',
  /** Plan Limit Reached */
  Ar002 = 'ar002',
}

export const AdjudicationReasonValues = ['ar001', 'ar002'] as const;
