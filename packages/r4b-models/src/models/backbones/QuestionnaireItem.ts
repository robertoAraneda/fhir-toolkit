import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EnableWhenBehaviorType,
  ICoding,
  IElement,
  IQuestionnaireItem,
  IQuestionnaireItemAnswerOption,
  IQuestionnaireItemEnableWhen,
  IQuestionnaireItemInitial,
  QuestionnaireItemTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to QuestionnaireItem */
const QUESTIONNAIRE_ITEM_PROPERTIES = [
  'linkId',
  '_linkId',
  'definition',
  '_definition',
  'code',
  'prefix',
  '_prefix',
  'text',
  '_text',
  'type',
  '_type',
  'enableWhen',
  'enableBehavior',
  '_enableBehavior',
  'required',
  '_required',
  'repeats',
  '_repeats',
  'readOnly',
  '_readOnly',
  'maxLength',
  '_maxLength',
  'answerValueSet',
  '_answerValueSet',
  'answerOption',
  'initial',
  'item',
] as const;

/**
 * QuestionnaireItem - Questions and sections within the Questionnaire
 *
 * @see https://hl7.org/fhir/R4/questionnaireitem.html
 *
 * @example
 * const questionnaireItem = new QuestionnaireItem({
 *   // ... properties
 * });
 */
export class QuestionnaireItem extends BackboneElement implements IQuestionnaireItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique id for item in questionnaire */
  linkId: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** ElementDefinition - details for the item */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Corresponding concept for this item in a terminology */
  code?: ICoding[];

  /** E.g. "1(a)", "2.5.3" */
  prefix?: string;

  /** Extension for prefix */
  _prefix?: IElement;

  /** Primary text for the item */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** group | display | boolean | decimal | integer | date | dateTime + */
  type: QuestionnaireItemTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Only allow data when */
  enableWhen?: IQuestionnaireItemEnableWhen[];

  /** all | any */
  enableBehavior?: EnableWhenBehaviorType;

  /** Extension for enableBehavior */
  _enableBehavior?: IElement;

  /** Whether the item must be included in data results */
  required?: boolean;

  /** Extension for required */
  _required?: IElement;

  /** Whether the item may repeat */
  repeats?: boolean;

  /** Extension for repeats */
  _repeats?: IElement;

  /** Don't allow human editing */
  readOnly?: boolean;

  /** Extension for readOnly */
  _readOnly?: IElement;

  /** No more than this many characters */
  maxLength?: number;

  /** Extension for maxLength */
  _maxLength?: IElement;

  /** Valueset containing permitted answers */
  answerValueSet?: string;

  /** Extension for answerValueSet */
  _answerValueSet?: IElement;

  /** Permitted answer */
  answerOption?: IQuestionnaireItemAnswerOption[];

  /** Initial value(s) when item is first rendered */
  initial?: IQuestionnaireItemInitial[];

  /** Nested questionnaire items */
  item?: IQuestionnaireItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireItem>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireItem from a JSON object
   */
  static fromJSON(json: IQuestionnaireItem): QuestionnaireItem {
    return new QuestionnaireItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireItem>): QuestionnaireItem {
    return new QuestionnaireItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireItem) => Partial<IQuestionnaireItem>): QuestionnaireItem {
    const currentData = this.toJSON();
    return new QuestionnaireItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_ITEM_PROPERTIES);
    return result as IQuestionnaireItem;
  }

  /**
   * Create a deep clone of this QuestionnaireItem
   */
  clone(): QuestionnaireItem {
    return new QuestionnaireItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireItem
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireItem'];
    return parts.join(', ');
  }
}
