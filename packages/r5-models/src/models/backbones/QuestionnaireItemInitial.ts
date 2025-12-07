import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICoding,
  IElement,
  IQuantity,
  IQuestionnaireItemInitial,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to QuestionnaireItemInitial */
const QUESTIONNAIRE_ITEM_INITIAL_PROPERTIES = [
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
] as const;

/**
 * QuestionnaireItemInitial - Initial value(s) when item is first rendered
 *
 * @see https://hl7.org/fhir/R4/questionnaireiteminitial.html
 *
 * @example
 * const questionnaireItemInitial = new QuestionnaireItemInitial({
 *   // ... properties
 * });
 */
export class QuestionnaireItemInitial extends BackboneElement implements IQuestionnaireItemInitial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Actual value for initializing the question */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Actual value for initializing the question */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Actual value for initializing the question */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Actual value for initializing the question */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Actual value for initializing the question */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Actual value for initializing the question */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Actual value for initializing the question */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Actual value for initializing the question */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Actual value for initializing the question */
  valueAttachment?: IAttachment;

  /** Actual value for initializing the question */
  valueCoding?: ICoding;

  /** Actual value for initializing the question */
  valueQuantity?: IQuantity;

  /** Actual value for initializing the question */
  valueReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireItemInitial>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_ITEM_INITIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireItemInitial from a JSON object
   */
  static fromJSON(json: IQuestionnaireItemInitial): QuestionnaireItemInitial {
    return new QuestionnaireItemInitial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireItemInitial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireItemInitial>): QuestionnaireItemInitial {
    return new QuestionnaireItemInitial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireItemInitial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireItemInitial) => Partial<IQuestionnaireItemInitial>): QuestionnaireItemInitial {
    const currentData = this.toJSON();
    return new QuestionnaireItemInitial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireItemInitial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireItemInitial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_ITEM_INITIAL_PROPERTIES);
    return result as IQuestionnaireItemInitial;
  }

  /**
   * Create a deep clone of this QuestionnaireItemInitial
   */
  clone(): QuestionnaireItemInitial {
    return new QuestionnaireItemInitial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireItemInitial
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireItemInitial'];
    return parts.join(', ');
  }
}
