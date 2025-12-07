import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * AppointmentRecurrenceTemplateYearlyTemplate Interface
 * 
 * Information about yearly recurring appointments
 * 
 *
 * @see https://hl7.org/fhir/R4/appointmentrecurrencetemplateyearlytemplate.html
 */
export interface IAppointmentRecurrenceTemplateYearlyTemplate extends IBackboneElement {
  /**
   * Recurs every nth year
   */
  yearInterval: number;
  /**
   * Extension for yearInterval
   */
  _yearInterval?: IElement;

}
