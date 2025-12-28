import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SubscriptionChannelTypeType } from '../../valuesets/index.js';

/**
 * SubscriptionChannel Interface
 * 
 * The channel on which to report matches to the criteria
 * 
 *
 * @see https://hl7.org/fhir/R4B/subscriptionchannel.html
 */
export interface ISubscriptionChannel extends IBackboneElement {
  /**
   * rest-hook | websocket | email | sms | message
   */
  type: SubscriptionChannelTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Where the channel points to
   */
  endpoint?: string;
  /**
   * Extension for endpoint
   */
  _endpoint?: IElement;

  /**
   * MIME type to send, or omit for no payload
   */
  payload?: string;
  /**
   * Extension for payload
   */
  _payload?: IElement;

  /**
   * Usage depends on the channel type
   */
  header?: string[];
  /**
   * Extension for header
   */
  _header?: IElement;

}
