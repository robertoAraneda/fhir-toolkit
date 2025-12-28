import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * CommunicationPayload Interface
 * 
 * Message payload
 * 
 *
 * @see https://hl7.org/fhir/R5/communicationpayload.html
 */
export interface ICommunicationPayload extends IBackboneElement {
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
