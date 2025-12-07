/**
 * Validation-type
 * 
 * What the target is validated against
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-validation-type
 */

export type ValidationTypeType = 'nothing' | 'primary' | 'multiple';

export enum ValidationTypeEnum {
  /** Nothing */
  Nothing = 'nothing',
  /** Primary Source */
  Primary = 'primary',
  /** Multiple Sources */
  Multiple = 'multiple',
}

export const ValidationTypeValues = ['nothing', 'primary', 'multiple'] as const;
