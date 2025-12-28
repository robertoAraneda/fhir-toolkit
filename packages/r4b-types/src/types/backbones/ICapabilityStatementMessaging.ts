import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICapabilityStatementMessagingEndpoint } from './ICapabilityStatementMessagingEndpoint.js';
import type { ICapabilityStatementMessagingSupportedMessage } from './ICapabilityStatementMessagingSupportedMessage.js';

/**
 * CapabilityStatementMessaging Interface
 * 
 * If messaging is supported
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementmessaging.html
 */
export interface ICapabilityStatementMessaging extends IBackboneElement {
  /**
   * Where messages should be sent
   */
  endpoint?: ICapabilityStatementMessagingEndpoint[];

  /**
   * Reliable Message Cache Length (min)
   */
  reliableCache?: number;
  /**
   * Extension for reliableCache
   */
  _reliableCache?: IElement;

  /**
   * Messaging interface behavior details
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Messages supported by this system
   */
  supportedMessage?: ICapabilityStatementMessagingSupportedMessage[];

}
