import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { QuestionnaireItemOperatorType } from '../../valuesets/index.js';

/**
 * QuestionnaireItemEnableWhen Interface
 * 
 * Only allow data when
 * 
 *
 * @see https://hl7.org/fhir/R4/questionnaireitemenablewhen.html
 */
export interface IQuestionnaireItemEnableWhen extends IBackboneElement {
  /**
   * The linkId of question that determines whether item is enabled/disabled
   */
  question: string;
  /**
   * Extension for question
   */
  _question?: IElement;

  /**
   * exists | = | != | > | < | >= | <=
   */
  operator: QuestionnaireItemOperatorType;
  /**
   * Extension for operator
   */
  _operator?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerBoolean?: boolean;
  /**
   * Extension for answerBoolean
   */
  _answerBoolean?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerDecimal?: number;
  /**
   * Extension for answerDecimal
   */
  _answerDecimal?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerInteger?: number;
  /**
   * Extension for answerInteger
   */
  _answerInteger?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerDate?: string;
  /**
   * Extension for answerDate
   */
  _answerDate?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerDateTime?: string;
  /**
   * Extension for answerDateTime
   */
  _answerDateTime?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerTime?: string;
  /**
   * Extension for answerTime
   */
  _answerTime?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerString?: string;
  /**
   * Extension for answerString
   */
  _answerString?: IElement;

  /**
   * Value for question comparison based on operator
   */
  answerCoding?: ICoding;

  /**
   * Value for question comparison based on operator
   */
  answerQuantity?: IQuantity;

  /**
   * Value for question comparison based on operator
   */
  answerReference?: IReference;

}
