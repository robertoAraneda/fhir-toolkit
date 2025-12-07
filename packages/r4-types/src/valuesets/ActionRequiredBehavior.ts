/**
 * ActionRequiredBehavior
 * 
 * Defines expectations around whether an action or action group is required.
 *
 * @see http://hl7.org/fhir/ValueSet/action-required-behavior
 */

export type ActionRequiredBehaviorType = 'must' | 'could' | 'must-unless-documented';

export enum ActionRequiredBehaviorEnum {
  /** Must */
  Must = 'must',
  /** Could */
  Could = 'could',
  /** Must Unless Documented */
  MustUnlessDocumented = 'must-unless-documented',
}

export const ActionRequiredBehaviorValues = ['must', 'could', 'must-unless-documented'] as const;
