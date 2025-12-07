import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAppointmentRecurrenceTemplateMonthlyTemplate } from './IAppointmentRecurrenceTemplateMonthlyTemplate.js';
import type { IAppointmentRecurrenceTemplateWeeklyTemplate } from './IAppointmentRecurrenceTemplateWeeklyTemplate.js';
import type { IAppointmentRecurrenceTemplateYearlyTemplate } from './IAppointmentRecurrenceTemplateYearlyTemplate.js';

/**
 * AppointmentRecurrenceTemplate Interface
 * 
 * Details of the recurrence pattern/template used to generate occurrences
 * 
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplate.html
 */
export interface IAppointmentRecurrenceTemplate extends IBackboneElement {
  /**
   * The timezone of the occurrences
   */
  timezone?: ICodeableConcept;

  /**
   * The frequency of the recurrence
   */
  recurrenceType: ICodeableConcept;

  /**
   * The date when the recurrence should end
   */
  lastOccurrenceDate?: string;
  /**
   * Extension for lastOccurrenceDate
   */
  _lastOccurrenceDate?: IElement;

  /**
   * The number of planned occurrences
   */
  occurrenceCount?: number;
  /**
   * Extension for occurrenceCount
   */
  _occurrenceCount?: IElement;

  /**
   * Specific dates for a recurring set of appointments (no template)
   */
  occurrenceDate?: string[];
  /**
   * Extension for occurrenceDate
   */
  _occurrenceDate?: IElement;

  /**
   * Information about weekly recurring appointments
   */
  weeklyTemplate?: IAppointmentRecurrenceTemplateWeeklyTemplate;

  /**
   * Information about monthly recurring appointments
   */
  monthlyTemplate?: IAppointmentRecurrenceTemplateMonthlyTemplate;

  /**
   * Information about yearly recurring appointments
   */
  yearlyTemplate?: IAppointmentRecurrenceTemplateYearlyTemplate;

  /**
   * Any dates that should be excluded from the series
   */
  excludingDate?: string[];
  /**
   * Extension for excludingDate
   */
  _excludingDate?: IElement;

  /**
   * Any recurrence IDs that should be excluded from the recurrence
   */
  excludingRecurrenceId?: number[];
  /**
   * Extension for excludingRecurrenceId
   */
  _excludingRecurrenceId?: IElement;

}
