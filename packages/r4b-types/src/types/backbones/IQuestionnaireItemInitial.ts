import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * QuestionnaireItemInitial Interface
 * 
 * Initial value(s) when item is first rendered
 * 
 *
 * @see https://hl7.org/fhir/R4B/questionnaireiteminitial.html
 */
export interface IQuestionnaireItemInitial extends IBackboneElement {
  /**
   * Actual value for initializing the question
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Actual value for initializing the question
   */
  valueAttachment?: IAttachment;

  /**
   * Actual value for initializing the question
   */
  valueCoding?: ICoding;

  /**
   * Actual value for initializing the question
   */
  valueQuantity?: IQuantity;

  /**
   * Actual value for initializing the question
   */
  valueReference?: IReference;

}
