/**
 * ObservationStatus
 * 
 * Codes providing the status of an observation.
 *
 * @see http://hl7.org/fhir/ValueSet/observation-status
 */

export type ObservationStatusType = 'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown';

export enum ObservationStatusEnum {
  /** Registered */
  Registered = 'registered',
  /** Preliminary */
  Preliminary = 'preliminary',
  /** Final */
  Final = 'final',
  /** Amended */
  Amended = 'amended',
  /** Corrected */
  Corrected = 'corrected',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const ObservationStatusValues = ['registered', 'preliminary', 'final', 'amended', 'corrected', 'cancelled', 'entered-in-error', 'unknown'] as const;
