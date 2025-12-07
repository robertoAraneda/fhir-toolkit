/**
 * GoalRelationshipType
 * 
 * Types of relationships between two goals.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-relationship-type
 */

export type GoalRelationshipTypeType = 'predecessor' | 'successor' | 'replacement' | 'milestone' | 'other';

export enum GoalRelationshipTypeEnum {
  /** Predecessor */
  Predecessor = 'predecessor',
  /** Successor */
  Successor = 'successor',
  /** Replacement */
  Replacement = 'replacement',
  /** Milestone */
  Milestone = 'milestone',
  /** Other */
  Other = 'other',
}

export const GoalRelationshipTypeValues = ['predecessor', 'successor', 'replacement', 'milestone', 'other'] as const;
