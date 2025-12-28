import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { EpisodeOfCareStatusType } from '../../valuesets/index.js';

/**
 * EpisodeOfCareStatusHistory Interface
 * 
 * Past list of status codes (the current status may be included to cover the start date of the status)
 * 
 *
 * @see https://hl7.org/fhir/R4B/episodeofcarestatushistory.html
 */
export interface IEpisodeOfCareStatusHistory extends IBackboneElement {
  /**
   * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   */
  status: EpisodeOfCareStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Duration the EpisodeOfCare was in the specified status
   */
  period: IPeriod;

}
