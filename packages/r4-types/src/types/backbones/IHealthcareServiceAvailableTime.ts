import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DaysOfWeekType } from '../../valuesets/index.js';

/**
 * HealthcareServiceAvailableTime Interface
 * 
 * Times the Service Site is available
 * 
 *
 * @see https://hl7.org/fhir/R4/healthcareserviceavailabletime.html
 */
export interface IHealthcareServiceAvailableTime extends IBackboneElement {
  /**
   * mon | tue | wed | thu | fri | sat | sun
   */
  daysOfWeek?: DaysOfWeekType[];
  /**
   * Extension for daysOfWeek
   */
  _daysOfWeek?: IElement;

  /**
   * Always available? e.g. 24 hour service
   */
  allDay?: boolean;
  /**
   * Extension for allDay
   */
  _allDay?: IElement;

  /**
   * Opening time of day (ignored if allDay = true)
   */
  availableStartTime?: string;
  /**
   * Extension for availableStartTime
   */
  _availableStartTime?: IElement;

  /**
   * Closing time of day (ignored if allDay = true)
   */
  availableEndTime?: string;
  /**
   * Extension for availableEndTime
   */
  _availableEndTime?: IElement;

}
