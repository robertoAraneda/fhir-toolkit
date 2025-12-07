import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IQuestionnaireResponseItem } from './IQuestionnaireResponseItem.js';

/**
 * QuestionnaireResponseItemAnswer Interface
 * 
 * The response(s) to the question
 * 
 *
 * @see https://hl7.org/fhir/R4/questionnaireresponseitemanswer.html
 */
export interface IQuestionnaireResponseItemAnswer extends IBackboneElement {
  /**
   * Single-valued answer to the question
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Single-valued answer to the question
   */
  valueAttachment?: IAttachment;

  /**
   * Single-valued answer to the question
   */
  valueCoding?: ICoding;

  /**
   * Single-valued answer to the question
   */
  valueQuantity?: IQuantity;

  /**
   * Single-valued answer to the question
   */
  valueReference?: IReference;

  /**
   * Child items of question
   */
  item?: IQuestionnaireResponseItem[];

}
