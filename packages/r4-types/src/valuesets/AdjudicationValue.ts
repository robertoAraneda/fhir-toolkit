/**
 * Adjudication Value Codes
 * 
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 *
 * @see http://hl7.org/fhir/ValueSet/adjudication
 */

export type AdjudicationValueType = 'submitted' | 'copay' | 'eligible' | 'deductible' | 'unallocdeduct' | 'eligpercent' | 'tax' | 'benefit';

export enum AdjudicationValueEnum {
  /** Submitted Amount */
  Submitted = 'submitted',
  /** CoPay */
  Copay = 'copay',
  /** Eligible Amount */
  Eligible = 'eligible',
  /** Deductible */
  Deductible = 'deductible',
  /** Unallocated Deductible */
  Unallocdeduct = 'unallocdeduct',
  /** Eligible % */
  Eligpercent = 'eligpercent',
  /** Tax */
  Tax = 'tax',
  /** Benefit Amount */
  Benefit = 'benefit',
}

export const AdjudicationValueValues = ['submitted', 'copay', 'eligible', 'deductible', 'unallocdeduct', 'eligpercent', 'tax', 'benefit'] as const;
