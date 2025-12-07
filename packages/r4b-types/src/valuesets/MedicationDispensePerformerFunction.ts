/**
 * MedicationDispensePerformerFunction
 * 
 * MedicationDispense Performer Function Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationdispense-performer-function
 */

export type MedicationDispensePerformerFunctionType = 'dataenterer' | 'packager' | 'checker' | 'finalchecker';

export enum MedicationDispensePerformerFunctionEnum {
  /** Data Enterer */
  Dataenterer = 'dataenterer',
  /** Packager */
  Packager = 'packager',
  /** Checker */
  Checker = 'checker',
  /** Final Checker */
  Finalchecker = 'finalchecker',
}

export const MedicationDispensePerformerFunctionValues = ['dataenterer', 'packager', 'checker', 'finalchecker'] as const;
