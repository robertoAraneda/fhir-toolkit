/**
 * Imaging Study Status
 * 
 * The status of the ImagingStudy.
 *
 * @see http://hl7.org/fhir/ValueSet/imagingstudy-status
 */

export type ImagingStudyStatusType = 'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';

export enum ImagingStudyStatusEnum {
  /** Registered */
  Registered = 'registered',
  /** Available */
  Available = 'available',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const ImagingStudyStatusValues = ['registered', 'available', 'cancelled', 'entered-in-error', 'unknown'] as const;
