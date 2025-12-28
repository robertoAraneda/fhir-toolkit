import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * AppointmentRecurrenceTemplateMonthlyTemplate Interface
 * 
 * Information about monthly recurring appointments
 * 
 *
 * @see https://hl7.org/fhir/R5/appointmentrecurrencetemplatemonthlytemplate.html
 */
export interface IAppointmentRecurrenceTemplateMonthlyTemplate extends IBackboneElement {
  /**
   * Recurs on a specific day of the month
   */
  dayOfMonth?: number;
  /**
   * Extension for dayOfMonth
   */
  _dayOfMonth?: IElement;

  /**
   * Indicates which week of the month the appointment should occur
   */
  nthWeekOfMonth?: ICoding;

  /**
   * Indicates which day of the week the appointment should occur
   */
  dayOfWeek?: ICoding;

  /**
   * Recurs every nth month
   */
  monthInterval: number;
  /**
   * Extension for monthInterval
   */
  _monthInterval?: IElement;

}
