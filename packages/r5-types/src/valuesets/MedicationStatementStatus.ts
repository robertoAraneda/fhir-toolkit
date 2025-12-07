/**
 * MedicationStatement Status Codes
 * 
 * MedicationStatement Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-statement-status
 */

export type MedicationStatementStatusType = 'recorded' | 'entered-in-error' | 'draft';

export enum MedicationStatementStatusEnum {
  /** Recorded */
  Recorded = 'recorded',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Draft */
  Draft = 'draft',
}

export const MedicationStatementStatusValues = ['recorded', 'entered-in-error', 'draft'] as const;
