/**
 * Stereochemistry
 * 
 * The optical rotation type of a substance.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-stereochemistry
 */

export type StereochemistryType = 'ConstitutionalIsomer' | 'Stereoisomer' | 'Enantiomer';

export enum StereochemistryEnum {
  /** constitutional isomer */
  Constitutionalisomer = 'ConstitutionalIsomer',
  /** stereoisomer */
  Stereoisomer = 'Stereoisomer',
  /** enantiomer */
  Enantiomer = 'Enantiomer',
}

export const StereochemistryValues = ['ConstitutionalIsomer', 'Stereoisomer', 'Enantiomer'] as const;
