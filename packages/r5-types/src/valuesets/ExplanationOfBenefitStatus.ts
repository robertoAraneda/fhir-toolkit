/**
 * Explanation Of Benefit Status
 * 
 * A code specifying the state of the resource instance.
 *
 * @see http://hl7.org/fhir/ValueSet/explanationofbenefit-status
 */

export type ExplanationOfBenefitStatusType = 'active' | 'cancelled' | 'draft' | 'entered-in-error';

export enum ExplanationOfBenefitStatusEnum {
  /** Active */
  Active = 'active',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Draft */
  Draft = 'draft',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const ExplanationOfBenefitStatusValues = ['active', 'cancelled', 'draft', 'entered-in-error'] as const;
