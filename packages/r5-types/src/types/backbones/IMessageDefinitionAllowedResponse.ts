import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MessageDefinitionAllowedResponse Interface
 * 
 * Responses to this message
 * 
 *
 * @see https://hl7.org/fhir/R4/messagedefinitionallowedresponse.html
 */
export interface IMessageDefinitionAllowedResponse extends IBackboneElement {
  /**
   * Reference to allowed message definition response
   */
  message: string;
  /**
   * Extension for message
   */
  _message?: IElement;

  /**
   * When should this response be used
   */
  situation?: string;
  /**
   * Extension for situation
   */
  _situation?: IElement;

}
