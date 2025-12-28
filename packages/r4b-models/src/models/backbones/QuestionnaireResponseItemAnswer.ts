import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICoding,
  IElement,
  IQuantity,
  IQuestionnaireResponseItem,
  IQuestionnaireResponseItemAnswer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to QuestionnaireResponseItemAnswer */
const QUESTIONNAIRE_RESPONSE_ITEM_ANSWER_PROPERTIES = [
  'valueBoolean',
  '_valueBoolean',
  'valueDecimal',
  '_valueDecimal',
  'valueInteger',
  '_valueInteger',
  'valueDate',
  '_valueDate',
  'valueDateTime',
  '_valueDateTime',
  'valueTime',
  '_valueTime',
  'valueString',
  '_valueString',
  'valueUri',
  '_valueUri',
  'valueAttachment',
  'valueCoding',
  'valueQuantity',
  'valueReference',
  'item',
] as const;

/**
 * QuestionnaireResponseItemAnswer - The response(s) to the question
 *
 * @see https://hl7.org/fhir/R4B/questionnaireresponseitemanswer.html
 *
 * @example
 * const questionnaireResponseItemAnswer = new QuestionnaireResponseItemAnswer({
 *   // ... properties
 * });
 */
export class QuestionnaireResponseItemAnswer extends BackboneElement implements IQuestionnaireResponseItemAnswer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Single-valued answer to the question */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Single-valued answer to the question */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Single-valued answer to the question */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Single-valued answer to the question */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Single-valued answer to the question */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Single-valued answer to the question */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Single-valued answer to the question */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Single-valued answer to the question */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Single-valued answer to the question */
  valueAttachment?: IAttachment;

  /** Single-valued answer to the question */
  valueCoding?: ICoding;

  /** Single-valued answer to the question */
  valueQuantity?: IQuantity;

  /** Single-valued answer to the question */
  valueReference?: IReference;

  /** Nested groups and questions */
  item?: IQuestionnaireResponseItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireResponseItemAnswer>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_RESPONSE_ITEM_ANSWER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireResponseItemAnswer from a JSON object
   */
  static fromJSON(json: IQuestionnaireResponseItemAnswer): QuestionnaireResponseItemAnswer {
    return new QuestionnaireResponseItemAnswer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireResponseItemAnswer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireResponseItemAnswer>): QuestionnaireResponseItemAnswer {
    return new QuestionnaireResponseItemAnswer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireResponseItemAnswer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireResponseItemAnswer) => Partial<IQuestionnaireResponseItemAnswer>): QuestionnaireResponseItemAnswer {
    const currentData = this.toJSON();
    return new QuestionnaireResponseItemAnswer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireResponseItemAnswer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireResponseItemAnswer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_RESPONSE_ITEM_ANSWER_PROPERTIES);
    return result as IQuestionnaireResponseItemAnswer;
  }

  /**
   * Create a deep clone of this QuestionnaireResponseItemAnswer
   */
  clone(): QuestionnaireResponseItemAnswer {
    return new QuestionnaireResponseItemAnswer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireResponseItemAnswer
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireResponseItemAnswer'];
    return parts.join(', ');
  }
}
