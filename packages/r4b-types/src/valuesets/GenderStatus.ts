/**
 * GenderStatus
 * 
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 *
 * @see http://hl7.org/fhir/ValueSet/animal-genderstatus
 */

export type GenderStatusType = 'neutered' | 'intact' | 'unknown';

export enum GenderStatusEnum {
  /** Neutered */
  Neutered = 'neutered',
  /** Intact */
  Intact = 'intact',
  /** Unknown */
  Unknown = 'unknown',
}

export const GenderStatusValues = ['neutered', 'intact', 'unknown'] as const;
