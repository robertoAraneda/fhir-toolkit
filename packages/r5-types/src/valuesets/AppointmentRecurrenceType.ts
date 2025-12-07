/**
 * Appointment Recurrence Type
 * 
 * The recurrence type of a recurring appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/appointment-recurrrence-type
 */

export type AppointmentRecurrenceTypeType = 'd' | 'wk' | 'mo' | 'a';

export enum AppointmentRecurrenceTypeEnum {
  /** day */
  D = 'd',
  /** week */
  Wk = 'wk',
  /** month */
  Mo = 'mo',
  /** year */
  A = 'a',
}

export const AppointmentRecurrenceTypeValues = ['d', 'wk', 'mo', 'a'] as const;
