/**
 * ActionSelectionBehavior
 * 
 * Defines selection behavior of a group.
 *
 * @see http://hl7.org/fhir/ValueSet/action-selection-behavior
 */

export type ActionSelectionBehaviorType = 'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more';

export enum ActionSelectionBehaviorEnum {
  /** Any */
  Any = 'any',
  /** All */
  All = 'all',
  /** All Or None */
  AllOrNone = 'all-or-none',
  /** Exactly One */
  ExactlyOne = 'exactly-one',
  /** At Most One */
  AtMostOne = 'at-most-one',
  /** One Or More */
  OneOrMore = 'one-or-more',
}

export const ActionSelectionBehaviorValues = ['any', 'all', 'all-or-none', 'exactly-one', 'at-most-one', 'one-or-more'] as const;
