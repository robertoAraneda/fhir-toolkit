/**
 * Specimen Contained Preference
 * 
 * Degree of preference of a type of conditioned specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-contained-preference
 */

export type SpecimenContainedPreferenceType = 'preferred' | 'alternate';

export enum SpecimenContainedPreferenceEnum {
  /** Preferred */
  Preferred = 'preferred',
  /** Alternate */
  Alternate = 'alternate',
}

export const SpecimenContainedPreferenceValues = ['preferred', 'alternate'] as const;
