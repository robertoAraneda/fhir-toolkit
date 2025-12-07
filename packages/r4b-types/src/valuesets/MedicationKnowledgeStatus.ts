/**
 * MedicationKnowledgeStatus
 * 
 * MedicationKnowledge Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationknowledge-status
 */

export type MedicationKnowledgeStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum MedicationKnowledgeStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const MedicationKnowledgeStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
