import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireItem } from '../../models/backbones/QuestionnaireItem.js';
import type {
  EnableWhenBehaviorType,
  ICoding,
  IQuestionnaireItem,
  IQuestionnaireItemAnswerOption,
  IQuestionnaireItemEnableWhen,
  IQuestionnaireItemInitial,
  QuestionnaireItemTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireItemBuilder - Fluent builder for QuestionnaireItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireItem = new QuestionnaireItemBuilder()
 *   .setLinkId(value)
 *   .addCode({ ... })
 *   .build();
 */
export class QuestionnaireItemBuilder extends BackboneElementBuilder<QuestionnaireItem, IQuestionnaireItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Unique id for item in questionnaire
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set definition
   * ElementDefinition - details for the item
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set prefix
   * E.g. "1(a)", "2.5.3"
   */
  setPrefix(prefix: string): this {
    this.data.prefix = prefix;
    return this;
  }

  /**
   * Set text
   * Primary text for the item
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set type
   * group | display | boolean | decimal | integer | date | dateTime +
   */
  setType(type: QuestionnaireItemTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set enableBehavior
   * all | any
   */
  setEnableBehavior(enableBehavior: EnableWhenBehaviorType): this {
    this.data.enableBehavior = enableBehavior;
    return this;
  }

  /**
   * Set required
   * Whether the item must be included in data results
   */
  setRequired(required: boolean): this {
    this.data.required = required;
    return this;
  }

  /**
   * Set repeats
   * Whether the item may repeat
   */
  setRepeats(repeats: boolean): this {
    this.data.repeats = repeats;
    return this;
  }

  /**
   * Set readOnly
   * Don't allow human editing
   */
  setReadOnly(readOnly: boolean): this {
    this.data.readOnly = readOnly;
    return this;
  }

  /**
   * Set maxLength
   * No more than this many characters
   */
  setMaxLength(maxLength: number): this {
    this.data.maxLength = maxLength;
    return this;
  }

  /**
   * Set answerValueSet
   * Valueset containing permitted answers
   */
  setAnswerValueSet(answerValueSet: string): this {
    this.data.answerValueSet = answerValueSet;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * Corresponding concept for this item in a terminology
   */
  addCode(code: ICoding): this {
    return this.addToArray('code', code);
  }

  /**
   * Add enableWhen
   * Only allow data when
   */
  addEnableWhen(enableWhen: IQuestionnaireItemEnableWhen): this {
    return this.addToArray('enableWhen', enableWhen);
  }

  /**
   * Add answerOption
   * Permitted answer
   */
  addAnswerOption(answerOption: IQuestionnaireItemAnswerOption): this {
    return this.addToArray('answerOption', answerOption);
  }

  /**
   * Add initial
   * Initial value(s) when item is first rendered
   */
  addInitial(initial: IQuestionnaireItemInitial): this {
    return this.addToArray('initial', initial);
  }

  /**
   * Add item
   * Nested questionnaire items
   */
  addItem(item: IQuestionnaireItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireItem instance
   */
  build(): QuestionnaireItem {
    return new QuestionnaireItem(this.data);
  }

  /**
   * Build and validate the QuestionnaireItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireItem> {
    const questionnaireItem = this.build();
    await questionnaireItem.validateOrThrow();
    return questionnaireItem;
  }
}
