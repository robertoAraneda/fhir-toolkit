/**
 * Action Condition Kind
 * 
 * Defines the kinds of conditions that can appear on actions.
 *
 * @see http://hl7.org/fhir/ValueSet/action-condition-kind
 */

export type ActionConditionKindType = 'applicability' | 'start' | 'stop';

export enum ActionConditionKindEnum {
  /** Applicability */
  Applicability = 'applicability',
  /** Start */
  Start = 'start',
  /** Stop */
  Stop = 'stop',
}

export const ActionConditionKindValues = ['applicability', 'start', 'stop'] as const;
