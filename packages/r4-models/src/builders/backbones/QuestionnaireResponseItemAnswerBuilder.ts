import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireResponseItemAnswer } from '../../models/backbones/QuestionnaireResponseItemAnswer.js';
import type {
  IAttachment,
  ICoding,
  IQuantity,
  IQuestionnaireResponseItem,
  IQuestionnaireResponseItemAnswer,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireResponseItemAnswerBuilder - Fluent builder for QuestionnaireResponseItemAnswer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireResponseItemAnswer = new QuestionnaireResponseItemAnswerBuilder()
 *   .addItem({ ... })
 *   .build();
 */
export class QuestionnaireResponseItemAnswerBuilder extends BackboneElementBuilder<QuestionnaireResponseItemAnswer, IQuestionnaireResponseItemAnswer> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'>(
    type: T,
    value: T extends 'Boolean' ? boolean : T extends 'Integer' ? number : string
  ): this {
    const key = `value${type}` as keyof IQuestionnaireResponseItemAnswer;
    const otherKeys: (keyof IQuestionnaireResponseItemAnswer)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueBoolean' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueDecimal' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueInteger' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueDate' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueDateTime' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueTime' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueString' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueUri' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueAttachment' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueCoding' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueQuantity' as keyof IQuestionnaireResponseItemAnswer);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IQuestionnaireResponseItemAnswer);
      otherKeys.push('_valueReference' as keyof IQuestionnaireResponseItemAnswer);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add item
   * Nested groups and questions
   */
  addItem(item: IQuestionnaireResponseItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireResponseItemAnswer instance
   */
  build(): QuestionnaireResponseItemAnswer {
    return new QuestionnaireResponseItemAnswer(this.data);
  }

  /**
   * Build and validate the QuestionnaireResponseItemAnswer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireResponseItemAnswer> {
    const questionnaireResponseItemAnswer = this.build();
    await questionnaireResponseItemAnswer.validateOrThrow();
    return questionnaireResponseItemAnswer;
  }
}
