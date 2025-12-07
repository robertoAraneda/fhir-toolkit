import type { IBackboneElement, IElement } from '../../base/index.js';
import type { EventCapabilityModeType } from '../../valuesets/index.js';

/**
 * CapabilityStatementMessagingSupportedMessage Interface
 * 
 * Messages supported by this system
 * 
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementmessagingsupportedmessage.html
 */
export interface ICapabilityStatementMessagingSupportedMessage extends IBackboneElement {
  /**
   * sender | receiver
   */
  mode: EventCapabilityModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Message supported by this system
   */
  definition: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

}
