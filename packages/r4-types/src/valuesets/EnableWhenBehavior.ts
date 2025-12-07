/**
 * EnableWhenBehavior
 * 
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior
 */

export type EnableWhenBehaviorType = 'all' | 'any';

export enum EnableWhenBehaviorEnum {
  /** All */
  All = 'all',
  /** Any */
  Any = 'any',
}

export const EnableWhenBehaviorValues = ['all', 'any'] as const;
