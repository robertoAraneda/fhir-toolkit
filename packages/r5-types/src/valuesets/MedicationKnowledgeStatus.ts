/**
 * MedicationKnowledge Status Codes
 * 
 * MedicationKnowledge Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationknowledge-status
 */

export type MedicationKnowledgeStatusType = 'active' | 'entered-in-error' | 'inactive';

export enum MedicationKnowledgeStatusEnum {
  /** Active */
  Active = 'active',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Inactive */
  Inactive = 'inactive',
}

export const MedicationKnowledgeStatusValues = ['active', 'entered-in-error', 'inactive'] as const;
