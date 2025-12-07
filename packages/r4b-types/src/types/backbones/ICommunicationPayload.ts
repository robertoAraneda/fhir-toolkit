import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * CommunicationPayload Interface
 * 
 * Message payload
 * 
 *
 * @see https://hl7.org/fhir/R4/communicationpayload.html
 */
export interface ICommunicationPayload extends IBackboneElement {
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
