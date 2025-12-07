/**
 * Practitioner role
 * 
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 *
 * @see http://hl7.org/fhir/ValueSet/practitioner-role
 */

export type PractitionerRoleType = 'doctor' | 'nurse' | 'pharmacist' | 'researcher' | 'teacher' | 'ict';

export enum PractitionerRoleEnum {
  /** Doctor */
  Doctor = 'doctor',
  /** Nurse */
  Nurse = 'nurse',
  /** Pharmacist */
  Pharmacist = 'pharmacist',
  /** Researcher */
  Researcher = 'researcher',
  /** Teacher/educator */
  Teacher = 'teacher',
  /** ICT professional */
  Ict = 'ict',
}

export const PractitionerRoleValues = ['doctor', 'nurse', 'pharmacist', 'researcher', 'teacher', 'ict'] as const;
