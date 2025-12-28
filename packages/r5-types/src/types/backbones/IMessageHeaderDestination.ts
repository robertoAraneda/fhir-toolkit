import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * MessageHeaderDestination Interface
 * 
 * Message destination application(s)
 * 
 *
 * @see https://hl7.org/fhir/R5/messageheaderdestination.html
 */
export interface IMessageHeaderDestination extends IBackboneElement {
  /**
   * Actual destination address or Endpoint resource
   */
  endpointUrl?: string;
  /**
   * Extension for endpointUrl
   */
  _endpointUrl?: IElement;

  /**
   * Actual destination address or Endpoint resource
   */
  endpointReference?: IReference;

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
   * Intended "real-world" recipient for the data
   */
  receiver?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
