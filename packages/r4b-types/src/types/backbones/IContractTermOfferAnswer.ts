import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ContractTermOfferAnswer Interface
 * 
 * Response to offer text
 * 
 *
 * @see https://hl7.org/fhir/R4B/contracttermofferanswer.html
 */
export interface IContractTermOfferAnswer extends IBackboneElement {
  /**
   * The actual answer response
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The actual answer response
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The actual answer response
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The actual answer response
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * The actual answer response
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The actual answer response
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * The actual answer response
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * The actual answer response
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * The actual answer response
   */
  valueAttachment?: IAttachment;

  /**
   * The actual answer response
   */
  valueCoding?: ICoding;

  /**
   * The actual answer response
   */
  valueQuantity?: IQuantity;

  /**
   * The actual answer response
   */
  valueReference?: IReference;

}
