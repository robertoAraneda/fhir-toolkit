/**
 * Task Intent
 * 
 * Distinguishes whether the task is a proposal, plan or full order.
 *
 * @see http://hl7.org/fhir/ValueSet/task-intent
 */

export type TaskIntentType = 'unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';

export enum TaskIntentEnum {
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

export const TaskIntentValues = ['unknown', 'proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'] as const;
