import type { IDataType } from '../../base/index.js';
import type { IAvailabilityAvailableTime } from '../backbones/IAvailabilityAvailableTime.js';
import type { IAvailabilityNotAvailableTime } from '../backbones/IAvailabilityNotAvailableTime.js';

/**
 * Availability Interface
 * 
 * Availability data for an {item}.
 * 
 *
 * @see https://hl7.org/fhir/R5/availability.html
 */
export interface IAvailability extends IDataType {
  /**
   * Times the {item} is available
   */
  availableTime?: IAvailabilityAvailableTime[];

  /**
   * Not available during this time due to provided reason
   */
  notAvailableTime?: IAvailabilityNotAvailableTime[];

}
