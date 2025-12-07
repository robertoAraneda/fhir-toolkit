/**
 * Immunization Reason Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was administered. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-reason
 */

export type ImmunizationReasonType = '429060002' | '281657000';

export enum ImmunizationReasonEnum {
  _429060002 = '429060002',
  _281657000 = '281657000',
}

export const ImmunizationReasonValues = ['429060002', '281657000'] as const;
