import type { IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * AvailabilityNotAvailableTime Interface
 * 
 * Not available during this time due to provided reason
 * 
 *
 * @see https://hl7.org/fhir/R4/availabilitynotavailabletime.html
 */
export interface IAvailabilityNotAvailableTime extends IElement {
  /**
   * Reason presented to the user explaining why time not available
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Service not available during this period
   */
  during?: IPeriod;

}
