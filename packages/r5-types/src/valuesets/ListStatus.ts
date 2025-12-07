/**
 * List Status
 * 
 * The current state of the list.
 *
 * @see http://hl7.org/fhir/ValueSet/list-status
 */

export type ListStatusType = 'current' | 'retired' | 'entered-in-error';

export enum ListStatusEnum {
  /** Current */
  Current = 'current',
  /** Retired */
  Retired = 'retired',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const ListStatusValues = ['current', 'retired', 'entered-in-error'] as const;
