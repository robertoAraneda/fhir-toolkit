/**
 * SpecimenStatus
 * 
 * Codes providing the status/availability of a specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-status
 */

export type SpecimenStatusType = 'available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error';

export enum SpecimenStatusEnum {
  /** Available */
  Available = 'available',
  /** Unavailable */
  Unavailable = 'unavailable',
  /** Unsatisfactory */
  Unsatisfactory = 'unsatisfactory',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const SpecimenStatusValues = ['available', 'unavailable', 'unsatisfactory', 'entered-in-error'] as const;
