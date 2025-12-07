import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * EndpointPayload Interface
 * 
 * Set of payloads that are provided by this endpoint
 * 
 *
 * @see https://hl7.org/fhir/R4/endpointpayload.html
 */
export interface IEndpointPayload extends IBackboneElement {
  /**
   * The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   */
  type?: ICodeableConcept[];

  /**
   * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
   */
  mimeType?: string[];
  /**
   * Extension for mimeType
   */
  _mimeType?: IElement;

}
