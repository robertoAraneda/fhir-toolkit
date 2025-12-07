/**
 * Specimen Combined
 * 
 * Codes providing the combined status of a specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-combined
 */

export type SpecimenCombinedType = 'grouped' | 'pooled';

export enum SpecimenCombinedEnum {
  /** Grouped */
  Grouped = 'grouped',
  /** Pooled */
  Pooled = 'pooled',
}

export const SpecimenCombinedValues = ['grouped', 'pooled'] as const;
