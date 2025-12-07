/**
 * FM Condition Codes
 * 
 * This value set includes sample Conditions codes.
 *
 * @see http://hl7.org/fhir/ValueSet/fm-conditions
 */

export type FMConditionType = '123987';

export enum FMConditionEnum {
  /** Headache */
  _123987 = '123987',
}

export const FMConditionValues = ['123987'] as const;
