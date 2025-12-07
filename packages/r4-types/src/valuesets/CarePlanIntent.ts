/**
 * Care Plan Intent
 * 
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 *
 * @see http://hl7.org/fhir/ValueSet/care-plan-intent
 */

export type CarePlanIntentType = 'proposal' | 'plan' | 'order' | 'option';

export enum CarePlanIntentEnum {
  Proposal = 'proposal',
  Plan = 'plan',
  Order = 'order',
  Option = 'option',
}

export const CarePlanIntentValues = ['proposal', 'plan', 'order', 'option'] as const;
