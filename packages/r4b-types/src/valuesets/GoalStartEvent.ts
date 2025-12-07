/**
 * GoalStartEvent
 * 
 * Identifies types of events that might trigger the start of a goal.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-start-event
 */

export type GoalStartEventType = '32485007' | '308283009' | '442137000' | '386216000';

export enum GoalStartEventEnum {
  /** Admission to hospital */
  _32485007 = '32485007',
  /** Discharge from hospital */
  _308283009 = '308283009',
  /** Completion time of procedure */
  _442137000 = '442137000',
  /** Childbirth */
  _386216000 = '386216000',
}

export const GoalStartEventValues = ['32485007', '308283009', '442137000', '386216000'] as const;
