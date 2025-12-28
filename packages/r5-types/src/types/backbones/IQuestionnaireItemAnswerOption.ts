import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';

/**
 * QuestionnaireItemAnswerOption Interface
 * 
 * Permitted answer
 * 
 *
 * @see https://hl7.org/fhir/R5/questionnaireitemansweroption.html
 */
export interface IQuestionnaireItemAnswerOption extends IBackboneElement {
  /**
   * Answer value
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Answer value
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Answer value
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Answer value
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Answer value
   */
  valueCoding?: ICoding;

  /**
   * Answer value
   */
  valueReference?: IReference;

  /**
   * Whether option is selected by default
   */
  initialSelected?: boolean;
  /**
   * Extension for initialSelected
   */
  _initialSelected?: IElement;

}
