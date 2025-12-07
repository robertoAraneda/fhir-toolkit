import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireItemEnableWhen } from '../../models/backbones/QuestionnaireItemEnableWhen.js';
import type {
  ICoding,
  IQuantity,
  IQuestionnaireItemEnableWhen,
  IReference,
  QuestionnaireItemOperatorType,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireItemEnableWhenBuilder - Fluent builder for QuestionnaireItemEnableWhen backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireItemEnableWhen = new QuestionnaireItemEnableWhenBuilder()
 *   .setQuestion(value)
 *   .build();
 */
export class QuestionnaireItemEnableWhenBuilder extends BackboneElementBuilder<QuestionnaireItemEnableWhen, IQuestionnaireItemEnableWhen> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set question
   * Question that determines whether item is enabled
   */
  setQuestion(question: string): this {
    this.data.question = question;
    return this;
  }

  /**
   * Set operator
   * exists | = | != | > | < | >= | <=
   */
  setOperator(operator: QuestionnaireItemOperatorType): this {
    this.data.operator = operator;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set answer choice type
   * @param type - 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Coding' | 'Quantity' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAnswer('Boolean', value)
   */
  setAnswer<T extends 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Coding' | 'Quantity' | 'Reference'>(
    type: T,
    value: T extends 'Boolean' ? boolean : T extends 'Integer' ? number : string
  ): this {
    const key = `answer${type}` as keyof IQuestionnaireItemEnableWhen;
    const otherKeys: (keyof IQuestionnaireItemEnableWhen)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('answerBoolean' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerBoolean' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Decimal') {
      otherKeys.push('answerDecimal' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerDecimal' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Integer') {
      otherKeys.push('answerInteger' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerInteger' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Date') {
      otherKeys.push('answerDate' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerDate' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'DateTime') {
      otherKeys.push('answerDateTime' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerDateTime' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Time') {
      otherKeys.push('answerTime' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerTime' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'String') {
      otherKeys.push('answerString' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerString' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Coding') {
      otherKeys.push('answerCoding' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerCoding' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Quantity') {
      otherKeys.push('answerQuantity' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerQuantity' as keyof IQuestionnaireItemEnableWhen);
    }
    if (type !== 'Reference') {
      otherKeys.push('answerReference' as keyof IQuestionnaireItemEnableWhen);
      otherKeys.push('_answerReference' as keyof IQuestionnaireItemEnableWhen);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireItemEnableWhen instance
   */
  build(): QuestionnaireItemEnableWhen {
    return new QuestionnaireItemEnableWhen(this.data);
  }

  /**
   * Build and validate the QuestionnaireItemEnableWhen instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireItemEnableWhen> {
    const questionnaireItemEnableWhen = this.build();
    await questionnaireItemEnableWhen.validateOrThrow();
    return questionnaireItemEnableWhen;
  }
}
