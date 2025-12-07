import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireResponseItem } from '../../models/backbones/QuestionnaireResponseItem.js';
import type {
  IQuestionnaireResponseItem,
  IQuestionnaireResponseItemAnswer,
} from '@fhir-toolkit/r5-types';

/**
 * QuestionnaireResponseItemBuilder - Fluent builder for QuestionnaireResponseItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireResponseItem = new QuestionnaireResponseItemBuilder()
 *   .setLinkId(value)
 *   .addAnswer({ ... })
 *   .build();
 */
export class QuestionnaireResponseItemBuilder extends BackboneElementBuilder<QuestionnaireResponseItem, IQuestionnaireResponseItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific item from Questionnaire
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
   * Set text
   * Name for group or question text
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add answer
   * The response(s) to the question
   */
  addAnswer(answer: IQuestionnaireResponseItemAnswer): this {
    return this.addToArray('answer', answer);
  }

  /**
   * Add item
   * Child items of group item
   */
  addItem(item: IQuestionnaireResponseItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireResponseItem instance
   */
  build(): QuestionnaireResponseItem {
    return new QuestionnaireResponseItem(this.data);
  }

  /**
   * Build and validate the QuestionnaireResponseItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireResponseItem> {
    const questionnaireResponseItem = this.build();
    await questionnaireResponseItem.validateOrThrow();
    return questionnaireResponseItem;
  }
}
