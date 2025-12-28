import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * CapabilityStatementMessagingEndpoint Interface
 * 
 * Where messages should be sent
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementmessagingendpoint.html
 */
export interface ICapabilityStatementMessagingEndpoint extends IBackboneElement {
  /**
   * http | ftp | mllp +
   */
  protocol: ICoding;

  /**
   * Network address or identifier of the end-point
   */
  address: string;
  /**
   * Extension for address
   */
  _address?: IElement;

}
