/**
 * Goal achievement status
 * 
 * Describes the progression, or lack thereof, towards the goal against the target.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-achievement
 */

export type GoalAchievementStatusType = 'in-progress' | 'improving' | 'worsening' | 'no-change' | 'achieved' | 'sustaining' | 'not-achieved' | 'no-progress' | 'not-attainable';

export enum GoalAchievementStatusEnum {
  /** In Progress */
  InProgress = 'in-progress',
  /** Improving */
  Improving = 'improving',
  /** Worsening */
  Worsening = 'worsening',
  /** No Change */
  NoChange = 'no-change',
  /** Achieved */
  Achieved = 'achieved',
  /** Sustaining */
  Sustaining = 'sustaining',
  /** Not Achieved */
  NotAchieved = 'not-achieved',
  /** No Progress */
  NoProgress = 'no-progress',
  /** Not Attainable */
  NotAttainable = 'not-attainable',
}

export const GoalAchievementStatusValues = ['in-progress', 'improving', 'worsening', 'no-change', 'achieved', 'sustaining', 'not-achieved', 'no-progress', 'not-attainable'] as const;
