/**
 * Immunization Evaluation Status Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-evaluation-status
 */

export type ImmunizationEvaluationStatusType = 'completed' | 'entered-in-error';

export enum ImmunizationEvaluationStatusEnum {
  Completed = 'completed',
  EnteredInError = 'entered-in-error',
}

export const ImmunizationEvaluationStatusValues = ['completed', 'entered-in-error'] as const;
