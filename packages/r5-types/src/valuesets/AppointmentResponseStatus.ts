/**
 * Appointment Response Status
 * 
 * The Participation status for a participant in response to a request for an appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/appointmentresponse-status
 */

export type AppointmentResponseStatusType = 'accepted' | 'declined' | 'tentative' | 'needs-action' | 'entered-in-error';

export enum AppointmentResponseStatusEnum {
  /** Accepted */
  Accepted = 'accepted',
  /** Declined */
  Declined = 'declined',
  /** Tentative */
  Tentative = 'tentative',
  /** Needs Action */
  NeedsAction = 'needs-action',
  /** Entered in error */
  EnteredInError = 'entered-in-error',
}

export const AppointmentResponseStatusValues = ['accepted', 'declined', 'tentative', 'needs-action', 'entered-in-error'] as const;
