/**
 * AppointmentStatus
 * 
 * The free/busy status of an appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/appointmentstatus
 */

export type AppointmentStatusType = 'proposed' | 'pending' | 'booked' | 'arrived' | 'fulfilled' | 'cancelled' | 'noshow' | 'entered-in-error' | 'checked-in' | 'waitlist';

export enum AppointmentStatusEnum {
  /** Proposed */
  Proposed = 'proposed',
  /** Pending */
  Pending = 'pending',
  /** Booked */
  Booked = 'booked',
  /** Arrived */
  Arrived = 'arrived',
  /** Fulfilled */
  Fulfilled = 'fulfilled',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** No Show */
  Noshow = 'noshow',
  /** Entered in error */
  EnteredInError = 'entered-in-error',
  /** Checked In */
  CheckedIn = 'checked-in',
  /** Waitlisted */
  Waitlist = 'waitlist',
}

export const AppointmentStatusValues = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'noshow', 'entered-in-error', 'checked-in', 'waitlist'] as const;
