import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IQuestionnaireItemAnswerOption,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to QuestionnaireItemAnswerOption */
const QUESTIONNAIRE_ITEM_ANSWER_OPTION_PROPERTIES = [
  'valueInteger',
  '_valueInteger',
  'valueDate',
  '_valueDate',
  'valueTime',
  '_valueTime',
  'valueString',
  '_valueString',
  'valueCoding',
  'valueReference',
  'initialSelected',
  '_initialSelected',
] as const;

/**
 * QuestionnaireItemAnswerOption - Permitted answer
 *
 * @see https://hl7.org/fhir/R4/questionnaireitemansweroption.html
 *
 * @example
 * const questionnaireItemAnswerOption = new QuestionnaireItemAnswerOption({
 *   // ... properties
 * });
 */
export class QuestionnaireItemAnswerOption extends BackboneElement implements IQuestionnaireItemAnswerOption {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Answer value */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Answer value */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Answer value */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Answer value */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Answer value */
  valueCoding?: ICoding;

  /** Answer value */
  valueReference?: IReference;

  /** Whether option is selected by default */
  initialSelected?: boolean;

  /** Extension for initialSelected */
  _initialSelected?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireItemAnswerOption>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_ITEM_ANSWER_OPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireItemAnswerOption from a JSON object
   */
  static fromJSON(json: IQuestionnaireItemAnswerOption): QuestionnaireItemAnswerOption {
    return new QuestionnaireItemAnswerOption(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireItemAnswerOption with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireItemAnswerOption>): QuestionnaireItemAnswerOption {
    return new QuestionnaireItemAnswerOption({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireItemAnswerOption by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireItemAnswerOption) => Partial<IQuestionnaireItemAnswerOption>): QuestionnaireItemAnswerOption {
    const currentData = this.toJSON();
    return new QuestionnaireItemAnswerOption({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireItemAnswerOption)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireItemAnswerOption {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_ITEM_ANSWER_OPTION_PROPERTIES);
    return result as IQuestionnaireItemAnswerOption;
  }

  /**
   * Create a deep clone of this QuestionnaireItemAnswerOption
   */
  clone(): QuestionnaireItemAnswerOption {
    return new QuestionnaireItemAnswerOption(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireItemAnswerOption
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireItemAnswerOption'];
    return parts.join(', ');
  }
}
