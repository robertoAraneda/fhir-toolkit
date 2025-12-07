/**
 * Immunization Origin Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-origin
 */

export type ImmunizationOriginType = 'provider' | 'record' | 'recall' | 'school';

export enum ImmunizationOriginEnum {
  /** Other Provider */
  Provider = 'provider',
  /** Written Record */
  Record = 'record',
  /** Parent/Guardian/Patient Recall */
  Recall = 'recall',
  /** School Record */
  School = 'school',
}

export const ImmunizationOriginValues = ['provider', 'record', 'recall', 'school'] as const;
