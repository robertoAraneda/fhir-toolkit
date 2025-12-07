import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { EncounterStatusType } from '../../valuesets/index.js';

/**
 * EncounterStatusHistory Interface
 * 
 * List of past encounter statuses
 * 
 *
 * @see https://hl7.org/fhir/R4/encounterstatushistory.html
 */
export interface IEncounterStatusHistory extends IBackboneElement {
  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   */
  status: EncounterStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The time that the episode was in the specified status
   */
  period: IPeriod;

}
