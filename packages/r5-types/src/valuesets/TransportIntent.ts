/**
 * Transport Intent
 * 
 * Distinguishes whether the transport is a proposal, plan or full order.
 *
 * @see http://hl7.org/fhir/ValueSet/transport-intent
 */

export type TransportIntentType = 'unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';

export enum TransportIntentEnum {
  /** Unknown */
  Unknown = 'unknown',
  Proposal = 'proposal',
  Plan = 'plan',
  Order = 'order',
  OriginalOrder = 'original-order',
  ReflexOrder = 'reflex-order',
  FillerOrder = 'filler-order',
  InstanceOrder = 'instance-order',
  Option = 'option',
}

export const TransportIntentValues = ['unknown', 'proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'] as const;
