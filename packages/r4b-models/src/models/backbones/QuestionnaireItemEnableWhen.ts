import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IQuantity,
  IQuestionnaireItemEnableWhen,
  IReference,
  QuestionnaireItemOperatorType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to QuestionnaireItemEnableWhen */
const QUESTIONNAIRE_ITEM_ENABLE_WHEN_PROPERTIES = [
  'question',
  '_question',
  'operator',
  '_operator',
  'answerBoolean',
  '_answerBoolean',
  'answerDecimal',
  '_answerDecimal',
  'answerInteger',
  '_answerInteger',
  'answerDate',
  '_answerDate',
  'answerDateTime',
  '_answerDateTime',
  'answerTime',
  '_answerTime',
  'answerString',
  '_answerString',
  'answerCoding',
  'answerQuantity',
  'answerReference',
] as const;

/**
 * QuestionnaireItemEnableWhen - Only allow data when
 *
 * @see https://hl7.org/fhir/R4/questionnaireitemenablewhen.html
 *
 * @example
 * const questionnaireItemEnableWhen = new QuestionnaireItemEnableWhen({
 *   // ... properties
 * });
 */
export class QuestionnaireItemEnableWhen extends BackboneElement implements IQuestionnaireItemEnableWhen {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Question that determines whether item is enabled */
  question: string;

  /** Extension for question */
  _question?: IElement;

  /** exists | = | != | > | < | >= | <= */
  operator: QuestionnaireItemOperatorType;

  /** Extension for operator */
  _operator?: IElement;

  /** Value for question comparison based on operator */
  answerBoolean?: boolean;

  /** Extension for answerBoolean */
  _answerBoolean?: IElement;

  /** Value for question comparison based on operator */
  answerDecimal?: number;

  /** Extension for answerDecimal */
  _answerDecimal?: IElement;

  /** Value for question comparison based on operator */
  answerInteger?: number;

  /** Extension for answerInteger */
  _answerInteger?: IElement;

  /** Value for question comparison based on operator */
  answerDate?: string;

  /** Extension for answerDate */
  _answerDate?: IElement;

  /** Value for question comparison based on operator */
  answerDateTime?: string;

  /** Extension for answerDateTime */
  _answerDateTime?: IElement;

  /** Value for question comparison based on operator */
  answerTime?: string;

  /** Extension for answerTime */
  _answerTime?: IElement;

  /** Value for question comparison based on operator */
  answerString?: string;

  /** Extension for answerString */
  _answerString?: IElement;

  /** Value for question comparison based on operator */
  answerCoding?: ICoding;

  /** Value for question comparison based on operator */
  answerQuantity?: IQuantity;

  /** Value for question comparison based on operator */
  answerReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireItemEnableWhen>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_ITEM_ENABLE_WHEN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireItemEnableWhen from a JSON object
   */
  static fromJSON(json: IQuestionnaireItemEnableWhen): QuestionnaireItemEnableWhen {
    return new QuestionnaireItemEnableWhen(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireItemEnableWhen with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireItemEnableWhen>): QuestionnaireItemEnableWhen {
    return new QuestionnaireItemEnableWhen({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireItemEnableWhen by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireItemEnableWhen) => Partial<IQuestionnaireItemEnableWhen>): QuestionnaireItemEnableWhen {
    const currentData = this.toJSON();
    return new QuestionnaireItemEnableWhen({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireItemEnableWhen)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireItemEnableWhen {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_ITEM_ENABLE_WHEN_PROPERTIES);
    return result as IQuestionnaireItemEnableWhen;
  }

  /**
   * Create a deep clone of this QuestionnaireItemEnableWhen
   */
  clone(): QuestionnaireItemEnableWhen {
    return new QuestionnaireItemEnableWhen(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireItemEnableWhen
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireItemEnableWhen'];
    return parts.join(', ');
  }
}
