/**
 * medicationRequest Intent
 * 
 * MedicationRequest Intent Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-intent
 */

export type MedicationRequestIntentType = 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';

export enum MedicationRequestIntentEnum {
  /** Proposal */
  Proposal = 'proposal',
  /** Plan */
  Plan = 'plan',
  /** Order */
  Order = 'order',
  /** Original Order */
  OriginalOrder = 'original-order',
  /** Reflex Order */
  ReflexOrder = 'reflex-order',
  /** Filler Order */
  FillerOrder = 'filler-order',
  /** Instance Order */
  InstanceOrder = 'instance-order',
  /** Option */
  Option = 'option',
}

export const MedicationRequestIntentValues = ['proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'] as const;
