/**
 * Practitioner specialty
 * 
 * This example value set defines a set of codes that can be used to indicate the specialty of a Practitioner.
 *
 * @see http://hl7.org/fhir/ValueSet/practitioner-specialty
 */

export type PractitionerSpecialtyType = 'cardio' | 'dent' | 'dietary' | 'midw' | 'sysarch';

export enum PractitionerSpecialtyEnum {
  /** Cardiologist */
  Cardio = 'cardio',
  /** Dentist */
  Dent = 'dent',
  /** Dietary consultant */
  Dietary = 'dietary',
  /** Midwife */
  Midw = 'midw',
  /** Systems architect */
  Sysarch = 'sysarch',
}

export const PractitionerSpecialtyValues = ['cardio', 'dent', 'dietary', 'midw', 'sysarch'] as const;
