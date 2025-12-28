import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * CommunicationRequestPayload Interface
 * 
 * Message payload
 * 
 *
 * @see https://hl7.org/fhir/R4B/communicationrequestpayload.html
 */
export interface ICommunicationRequestPayload extends IBackboneElement {
  /**
   * Message part content
   */
  contentString?: string;
  /**
   * Extension for contentString
   */
  _contentString?: IElement;

  /**
   * Message part content
   */
  contentAttachment?: IAttachment;

  /**
   * Message part content
   */
  contentReference?: IReference;

}
