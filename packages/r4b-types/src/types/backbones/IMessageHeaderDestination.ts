import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * MessageHeaderDestination Interface
 * 
 * Message destination application(s)
 * 
 *
 * @see https://hl7.org/fhir/R4/messageheaderdestination.html
 */
export interface IMessageHeaderDestination extends IBackboneElement {
  /**
   * Name of system
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Particular delivery destination within the destination
   */
  target?: IReference<'Device'>;

  /**
   * Actual destination address or id
   */
  endpoint: string;
  /**
   * Extension for endpoint
   */
  _endpoint?: IElement;

  /**
   * Intended "real-world" recipient for the data
   */
  receiver?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
