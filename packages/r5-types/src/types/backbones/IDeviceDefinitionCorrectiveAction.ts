import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { DeviceCorrectiveActionScopeType } from '../../valuesets/index.js';

/**
 * DeviceDefinitionCorrectiveAction Interface
 * 
 * Tracking of latest field safety corrective action
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitioncorrectiveaction.html
 */
export interface IDeviceDefinitionCorrectiveAction extends IBackboneElement {
  /**
   * Whether the corrective action was a recall
   */
  recall: boolean;
  /**
   * Extension for recall
   */
  _recall?: IElement;

  /**
   * model | lot-numbers | serial-numbers
   */
  scope?: DeviceCorrectiveActionScopeType;
  /**
   * Extension for scope
   */
  _scope?: IElement;

  /**
   * Start and end dates of the  corrective action
   */
  period: IPeriod;

}
