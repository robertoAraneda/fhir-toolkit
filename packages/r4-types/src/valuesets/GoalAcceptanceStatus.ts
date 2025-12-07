/**
 * GoalAcceptanceStatus
 * 
 * Codes indicating whether the goal has been accepted by a stakeholder.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-acceptance-status
 */

export type GoalAcceptanceStatusType = 'agree' | 'disagree' | 'pending';

export enum GoalAcceptanceStatusEnum {
  /** Agree */
  Agree = 'agree',
  /** Disagree */
  Disagree = 'disagree',
  /** Pending */
  Pending = 'pending',
}

export const GoalAcceptanceStatusValues = ['agree', 'disagree', 'pending'] as const;
