/**
 * ActionPrecheckBehavior
 * 
 * Defines selection frequency behavior for an action or group.
 *
 * @see http://hl7.org/fhir/ValueSet/action-precheck-behavior
 */

export type ActionPrecheckBehaviorType = 'yes' | 'no';

export enum ActionPrecheckBehaviorEnum {
  /** Yes */
  Yes = 'yes',
  /** No */
  No = 'no',
}

export const ActionPrecheckBehaviorValues = ['yes', 'no'] as const;
