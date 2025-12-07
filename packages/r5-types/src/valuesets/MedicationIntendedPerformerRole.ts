/**
 * Medication Intended Performer Role
 * 
 * Medication Intended Performer Role
 *
 * @see http://hl7.org/fhir/ValueSet/medication-intended-performer-role
 */

export type MedicationIntendedPerformerRoleType = 'registerednurse' | 'oncologynurse' | 'paincontrolnurse' | 'physician' | 'pharmacist';

export enum MedicationIntendedPerformerRoleEnum {
  /** Registered Nurse */
  Registerednurse = 'registerednurse',
  /** Oncology Nurse */
  Oncologynurse = 'oncologynurse',
  /** Pain Control Nurse */
  Paincontrolnurse = 'paincontrolnurse',
  /** Physician */
  Physician = 'physician',
  /** Pharmacist */
  Pharmacist = 'pharmacist',
}

export const MedicationIntendedPerformerRoleValues = ['registerednurse', 'oncologynurse', 'paincontrolnurse', 'physician', 'pharmacist'] as const;
