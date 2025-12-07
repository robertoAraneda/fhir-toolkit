/**
 * ActionCardinalityBehavior
 * 
 * Defines behavior for an action or a group for how many times that item may be repeated.
 *
 * @see http://hl7.org/fhir/ValueSet/action-cardinality-behavior
 */

export type ActionCardinalityBehaviorType = 'single' | 'multiple';

export enum ActionCardinalityBehaviorEnum {
  /** Single */
  Single = 'single',
  /** Multiple */
  Multiple = 'multiple',
}

export const ActionCardinalityBehaviorValues = ['single', 'multiple'] as const;
