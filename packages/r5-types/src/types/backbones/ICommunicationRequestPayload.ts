import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * CommunicationRequestPayload Interface
 * 
 * Message payload
 * 
 *
 * @see https://hl7.org/fhir/R5/communicationrequestpayload.html
 */
export interface ICommunicationRequestPayload extends IBackboneElement {
  /**
   * Message part content
   */
  contentAttachment?: IAttachment;

  /**
   * Message part content
   */
  contentReference?: IReference;

  /**
   * Message part content
   */
  contentCodeableConcept?: ICodeableConcept;

}
