import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IQuestionnaireResponseItemAnswer } from './IQuestionnaireResponseItemAnswer.js';

/**
 * QuestionnaireResponseItem Interface
 * 
 * Groups and questions
 * 
 *
 * @see https://hl7.org/fhir/R4B/questionnaireresponseitem.html
 */
export interface IQuestionnaireResponseItem extends IBackboneElement {
  /**
   * Pointer to specific item from Questionnaire
   */
  linkId: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * ElementDefinition - details for the item
   */
  definition?: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * Name for group or question text
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * The response(s) to the question
   */
  answer?: IQuestionnaireResponseItemAnswer[];

  /**
   * Nested questionnaire response items
   */
  item?: IQuestionnaireResponseItem[];

}
