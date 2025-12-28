import type { IElement } from '../../base/index.js';
import type { DaysOfWeekType } from '../../valuesets/index.js';

/**
 * AvailabilityAvailableTime Interface
 * 
 * Times the {item} is available
 * 
 *
 * @see https://hl7.org/fhir/R5/availabilityavailabletime.html
 */
export interface IAvailabilityAvailableTime extends IElement {
  /**
   * mon | tue | wed | thu | fri | sat | sun
   */
  daysOfWeek?: DaysOfWeekType[];
  /**
   * Extension for daysOfWeek
   */
  _daysOfWeek?: IElement;

  /**
   * Always available? i.e. 24 hour service
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
