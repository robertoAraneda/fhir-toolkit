/**
 * Goal priority
 * 
 * Indicates the level of importance associated with reaching or sustaining a goal.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-priority
 */

export type GoalPriorityType = 'high-priority' | 'medium-priority' | 'low-priority';

export enum GoalPriorityEnum {
  /** High Priority */
  HighPriority = 'high-priority',
  /** Medium Priority */
  MediumPriority = 'medium-priority',
  /** Low Priority */
  LowPriority = 'low-priority',
}

export const GoalPriorityValues = ['high-priority', 'medium-priority', 'low-priority'] as const;
