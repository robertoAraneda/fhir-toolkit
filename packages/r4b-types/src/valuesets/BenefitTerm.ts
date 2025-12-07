/**
 * Benefit Term Codes
 * 
 * This value set includes a smattering of Benefit Term codes.
 *
 * @see http://hl7.org/fhir/ValueSet/benefit-term
 */

export type BenefitTermType = 'annual' | 'day' | 'lifetime';

export enum BenefitTermEnum {
  /** Annual */
  Annual = 'annual',
  /** Day */
  Day = 'day',
  /** Lifetime */
  Lifetime = 'lifetime',
}

export const BenefitTermValues = ['annual', 'day', 'lifetime'] as const;
