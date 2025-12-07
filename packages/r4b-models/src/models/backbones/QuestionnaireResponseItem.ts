import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IQuestionnaireResponseItem,
  IQuestionnaireResponseItemAnswer,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to QuestionnaireResponseItem */
const QUESTIONNAIRE_RESPONSE_ITEM_PROPERTIES = [
  'linkId',
  '_linkId',
  'definition',
  '_definition',
  'text',
  '_text',
  'answer',
  'item',
] as const;

/**
 * QuestionnaireResponseItem - Groups and questions
 *
 * @see https://hl7.org/fhir/R4/questionnaireresponseitem.html
 *
 * @example
 * const questionnaireResponseItem = new QuestionnaireResponseItem({
 *   // ... properties
 * });
 */
export class QuestionnaireResponseItem extends BackboneElement implements IQuestionnaireResponseItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Pointer to specific item from Questionnaire */
  linkId: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** ElementDefinition - details for the item */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Name for group or question text */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** The response(s) to the question */
  answer?: IQuestionnaireResponseItemAnswer[];

  /** Nested questionnaire response items */
  item?: IQuestionnaireResponseItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireResponseItem>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_RESPONSE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireResponseItem from a JSON object
   */
  static fromJSON(json: IQuestionnaireResponseItem): QuestionnaireResponseItem {
    return new QuestionnaireResponseItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireResponseItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem {
    return new QuestionnaireResponseItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireResponseItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireResponseItem) => Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem {
    const currentData = this.toJSON();
    return new QuestionnaireResponseItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireResponseItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireResponseItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_RESPONSE_ITEM_PROPERTIES);
    return result as IQuestionnaireResponseItem;
  }

  /**
   * Create a deep clone of this QuestionnaireResponseItem
   */
  clone(): QuestionnaireResponseItem {
    return new QuestionnaireResponseItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireResponseItem
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireResponseItem'];
    return parts.join(', ');
  }
}
