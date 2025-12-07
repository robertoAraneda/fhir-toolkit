/**
 * Immunization Evaluation Dose Status codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status
 */

export type ImmunizationEvaluationDoseStatusType = 'valid' | 'notvalid';

export enum ImmunizationEvaluationDoseStatusEnum {
  /** Valid */
  Valid = 'valid',
  /** Not valid */
  Notvalid = 'notvalid',
}

export const ImmunizationEvaluationDoseStatusValues = ['valid', 'notvalid'] as const;
