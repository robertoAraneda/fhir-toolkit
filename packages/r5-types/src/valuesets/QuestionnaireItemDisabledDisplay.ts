/**
 * Questionnaire Item Disabled Display
 * 
 * Codes that guide the display of disabled questionnaire items
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-disabled-display
 */

export type QuestionnaireItemDisabledDisplayType = 'hidden' | 'protected';

export enum QuestionnaireItemDisabledDisplayEnum {
  /** Hidden */
  Hidden = 'hidden',
  /** Protected */
  Protected = 'protected',
}

export const QuestionnaireItemDisabledDisplayValues = ['hidden', 'protected'] as const;
