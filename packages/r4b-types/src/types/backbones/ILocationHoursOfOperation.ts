import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DaysOfWeekType } from '../../valuesets/index.js';

/**
 * LocationHoursOfOperation Interface
 * 
 * What days/times during a week is this location usually open
 * 
 *
 * @see https://hl7.org/fhir/R4B/locationhoursofoperation.html
 */
export interface ILocationHoursOfOperation extends IBackboneElement {
  /**
   * mon | tue | wed | thu | fri | sat | sun
   */
  daysOfWeek?: DaysOfWeekType[];
  /**
   * Extension for daysOfWeek
   */
  _daysOfWeek?: IElement;

  /**
   * The Location is open all day
   */
  allDay?: boolean;
  /**
   * Extension for allDay
   */
  _allDay?: IElement;

  /**
   * Time that the Location opens
   */
  openingTime?: string;
  /**
   * Extension for openingTime
   */
  _openingTime?: IElement;

  /**
   * Time that the Location closes
   */
  closingTime?: string;
  /**
   * Extension for closingTime
   */
  _closingTime?: IElement;

}
