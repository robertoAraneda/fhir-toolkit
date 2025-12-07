import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * AppointmentRecurrenceTemplateWeeklyTemplate Interface
 * 
 * Information about weekly recurring appointments
 * 
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplateweeklytemplate.html
 */
export interface IAppointmentRecurrenceTemplateWeeklyTemplate extends IBackboneElement {
  /**
   * Recurs on Mondays
   */
  monday?: boolean;
  /**
   * Extension for monday
   */
  _monday?: IElement;

  /**
   * Recurs on Tuesday
   */
  tuesday?: boolean;
  /**
   * Extension for tuesday
   */
  _tuesday?: IElement;

  /**
   * Recurs on Wednesday
   */
  wednesday?: boolean;
  /**
   * Extension for wednesday
   */
  _wednesday?: IElement;

  /**
   * Recurs on Thursday
   */
  thursday?: boolean;
  /**
   * Extension for thursday
   */
  _thursday?: IElement;

  /**
   * Recurs on Friday
   */
  friday?: boolean;
  /**
   * Extension for friday
   */
  _friday?: IElement;

  /**
   * Recurs on Saturday
   */
  saturday?: boolean;
  /**
   * Extension for saturday
   */
  _saturday?: IElement;

  /**
   * Recurs on Sunday
   */
  sunday?: boolean;
  /**
   * Extension for sunday
   */
  _sunday?: IElement;

  /**
   * Recurs every nth week
   */
  weekInterval?: number;
  /**
   * Extension for weekInterval
   */
  _weekInterval?: IElement;

}
