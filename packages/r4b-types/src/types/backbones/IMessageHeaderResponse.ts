import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ResponseTypeType } from '../../valuesets/index.js';

/**
 * MessageHeaderResponse Interface
 * 
 * If this is a reply to prior message
 * 
 *
 * @see https://hl7.org/fhir/R4/messageheaderresponse.html
 */
export interface IMessageHeaderResponse extends IBackboneElement {
  /**
   * Id of original message
   */
  identifier: string;
  /**
   * Extension for identifier
   */
  _identifier?: IElement;

  /**
   * ok | transient-error | fatal-error
   */
  code: ResponseTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Specific list of hints/warnings/errors
   */
  details?: IReference<'OperationOutcome'>;

}
