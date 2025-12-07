/**
 * Genomic Study Status
 * 
 * The status of the GenomicStudy.
 *
 * @see http://hl7.org/fhir/ValueSet/genomicstudy-status
 */

export type GenomicStudyStatusType = 'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';

export enum GenomicStudyStatusEnum {
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

export const GenomicStudyStatusValues = ['registered', 'available', 'cancelled', 'entered-in-error', 'unknown'] as const;
