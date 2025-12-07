/**
 * Slot Status
 * 
 * The free/busy status of the slot.
 *
 * @see http://hl7.org/fhir/ValueSet/slotstatus
 */

export type SlotStatusType = 'busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error';

export enum SlotStatusEnum {
  /** Busy */
  Busy = 'busy',
  /** Free */
  Free = 'free',
  /** Busy (Unavailable) */
  BusyUnavailable = 'busy-unavailable',
  /** Busy (Tentative) */
  BusyTentative = 'busy-tentative',
  /** Entered in error */
  EnteredInError = 'entered-in-error',
}

export const SlotStatusValues = ['busy', 'free', 'busy-unavailable', 'busy-tentative', 'entered-in-error'] as const;
