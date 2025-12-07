/**
 * ActionGroupingBehavior
 * 
 * Defines organization behavior of a group.
 *
 * @see http://hl7.org/fhir/ValueSet/action-grouping-behavior
 */

export type ActionGroupingBehaviorType = 'visual-group' | 'logical-group' | 'sentence-group';

export enum ActionGroupingBehaviorEnum {
  /** Visual Group */
  VisualGroup = 'visual-group',
  /** Logical Group */
  LogicalGroup = 'logical-group',
  /** Sentence Group */
  SentenceGroup = 'sentence-group',
}

export const ActionGroupingBehaviorValues = ['visual-group', 'logical-group', 'sentence-group'] as const;
