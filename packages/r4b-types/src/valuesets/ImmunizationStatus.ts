/**
 * Immunization Status Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-status
 */

export type ImmunizationStatusType = 'completed' | 'entered-in-error' | 'not-done';

export enum ImmunizationStatusEnum {
  Completed = 'completed',
  EnteredInError = 'entered-in-error',
  NotDone = 'not-done',
}

export const ImmunizationStatusValues = ['completed', 'entered-in-error', 'not-done'] as const;
