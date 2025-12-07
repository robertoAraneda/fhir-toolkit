/**
 * CompositionStatus
 * 
 * The workflow/clinical status of the composition.
 *
 * @see http://hl7.org/fhir/ValueSet/composition-status
 */

export type CompositionStatusType = 'preliminary' | 'final' | 'amended' | 'entered-in-error';

export enum CompositionStatusEnum {
  /** Preliminary */
  Preliminary = 'preliminary',
  /** Final */
  Final = 'final',
  /** Amended */
  Amended = 'amended',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const CompositionStatusValues = ['preliminary', 'final', 'amended', 'entered-in-error'] as const;
