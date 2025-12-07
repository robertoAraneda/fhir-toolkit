/**
 * Medication administration  performer  function  codes
 * 
 * MedicationAdministration Performer Function Codes
 *
 * @see http://hl7.org/fhir/ValueSet/med-admin-perform-function
 */

export type MedicationAdministrationPerformerFunctionType = 'performer' | 'verifier' | 'witness';

export enum MedicationAdministrationPerformerFunctionEnum {
  /** Performer */
  Performer = 'performer',
  /** Verifier */
  Verifier = 'verifier',
  /** Witness */
  Witness = 'witness',
}

export const MedicationAdministrationPerformerFunctionValues = ['performer', 'verifier', 'witness'] as const;
