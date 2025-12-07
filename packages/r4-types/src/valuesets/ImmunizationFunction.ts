/**
 * Immunization Function Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the function a practitioner or organization may play in the immunization event. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-function
 */

export type ImmunizationFunctionType = 'OP' | 'AP';

export enum ImmunizationFunctionEnum {
  Op = 'OP',
  Ap = 'AP',
}

export const ImmunizationFunctionValues = ['OP', 'AP'] as const;
