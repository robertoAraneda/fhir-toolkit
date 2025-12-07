/**
 * Composition Status
 * 
 * The workflow/clinical status of the composition.
 *
 * @see http://hl7.org/fhir/ValueSet/composition-status
 */

export type CompositionStatusType = 'registered' | 'partial' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'appended' | 'cancelled' | 'entered-in-error' | 'deprecated' | 'unknown';

export enum CompositionStatusEnum {
  /** Registered */
  Registered = 'registered',
  /** Partial */
  Partial = 'partial',
  /** Preliminary */
  Preliminary = 'preliminary',
  /** Final */
  Final = 'final',
  /** Amended */
  Amended = 'amended',
  /** Corrected */
  Corrected = 'corrected',
  /** Appended */
  Appended = 'appended',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Deprecated */
  Deprecated = 'deprecated',
  /** Unknown */
  Unknown = 'unknown',
}

export const CompositionStatusValues = ['registered', 'partial', 'preliminary', 'final', 'amended', 'corrected', 'appended', 'cancelled', 'entered-in-error', 'deprecated', 'unknown'] as const;
