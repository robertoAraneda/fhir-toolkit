/**
 * Medication Dose Aids
 * 
 * Medication Dose Aids
 *
 * @see http://hl7.org/fhir/ValueSet/medication-dose-aid
 */

export type MedicationDoseAidsType = 'blisterpack' | 'dosette' | 'sachets';

export enum MedicationDoseAidsEnum {
  /** Blister Pack */
  Blisterpack = 'blisterpack',
  /** Dosette */
  Dosette = 'dosette',
  /** Sachets */
  Sachets = 'sachets',
}

export const MedicationDoseAidsValues = ['blisterpack', 'dosette', 'sachets'] as const;
