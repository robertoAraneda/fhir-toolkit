import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { IQuestionnaireItemAnswerOption } from './IQuestionnaireItemAnswerOption.js';
import type { IQuestionnaireItemEnableWhen } from './IQuestionnaireItemEnableWhen.js';
import type { IQuestionnaireItemInitial } from './IQuestionnaireItemInitial.js';
import type { EnableWhenBehaviorType, QuestionnaireAnswerConstraintType, QuestionnaireItemDisabledDisplayType, QuestionnaireItemTypeType } from '../../valuesets/index.js';

/**
 * QuestionnaireItem Interface
 * 
 * Questions and sections within the Questionnaire
 * 
 *
 * @see https://hl7.org/fhir/R4/questionnaireitem.html
 */
export interface IQuestionnaireItem extends IBackboneElement {
  /**
   * Unique id for item in questionnaire
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
   * Corresponding concept for this item in a terminology
   */
  code?: ICoding[];

  /**
   * E.g. "1(a)", "2.5.3"
   */
  prefix?: string;
  /**
   * Extension for prefix
   */
  _prefix?: IElement;

  /**
   * Primary text for the item
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * group | display | boolean | decimal | integer | date | dateTime +
   */
  type: QuestionnaireItemTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Only allow data when
   */
  enableWhen?: IQuestionnaireItemEnableWhen[];

  /**
   * all | any
   */
  enableBehavior?: EnableWhenBehaviorType;
  /**
   * Extension for enableBehavior
   */
  _enableBehavior?: IElement;

  /**
   * hidden | protected
   */
  disabledDisplay?: QuestionnaireItemDisabledDisplayType;
  /**
   * Extension for disabledDisplay
   */
  _disabledDisplay?: IElement;

  /**
   * Whether the item must be included in data results
   */
  required?: boolean;
  /**
   * Extension for required
   */
  _required?: IElement;

  /**
   * Whether the item may repeat
   */
  repeats?: boolean;
  /**
   * Extension for repeats
   */
  _repeats?: IElement;

  /**
   * Don't allow human editing
   */
  readOnly?: boolean;
  /**
   * Extension for readOnly
   */
  _readOnly?: IElement;

  /**
   * No more than these many characters
   */
  maxLength?: number;
  /**
   * Extension for maxLength
   */
  _maxLength?: IElement;

  /**
   * optionsOnly | optionsOrType | optionsOrString
   */
  answerConstraint?: QuestionnaireAnswerConstraintType;
  /**
   * Extension for answerConstraint
   */
  _answerConstraint?: IElement;

  /**
   * ValueSet containing permitted answers
   */
  answerValueSet?: string;
  /**
   * Extension for answerValueSet
   */
  _answerValueSet?: IElement;

  /**
   * Permitted answer
   */
  answerOption?: IQuestionnaireItemAnswerOption[];

  /**
   * Initial value(s) when item is first rendered
   */
  initial?: IQuestionnaireItemInitial[];

  /**
   * Nested questionnaire items
   */
  item?: IQuestionnaireItem[];

}
