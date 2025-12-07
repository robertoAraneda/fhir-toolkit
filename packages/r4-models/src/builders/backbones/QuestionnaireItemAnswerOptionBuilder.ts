import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireItemAnswerOption } from '../../models/backbones/QuestionnaireItemAnswerOption.js';
import type {
  ICoding,
  IQuestionnaireItemAnswerOption,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireItemAnswerOptionBuilder - Fluent builder for QuestionnaireItemAnswerOption backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireItemAnswerOption = new QuestionnaireItemAnswerOptionBuilder()
 *   .setInitialSelected(value)
 *   .build();
 */
export class QuestionnaireItemAnswerOptionBuilder extends BackboneElementBuilder<QuestionnaireItemAnswerOption, IQuestionnaireItemAnswerOption> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set initialSelected
   * Whether option is selected by default
   */
  setInitialSelected(initialSelected: boolean): this {
    this.data.initialSelected = initialSelected;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Integer' | 'Date' | 'Time' | 'String' | 'Coding' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Integer', value)
   */
  setValue<T extends 'Integer' | 'Date' | 'Time' | 'String' | 'Coding' | 'Reference'>(
    type: T,
    value: T extends 'Integer' ? number : string
  ): this {
    const key = `value${type}` as keyof IQuestionnaireItemAnswerOption;
    const otherKeys: (keyof IQuestionnaireItemAnswerOption)[] = [];
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueInteger' as keyof IQuestionnaireItemAnswerOption);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueDate' as keyof IQuestionnaireItemAnswerOption);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueTime' as keyof IQuestionnaireItemAnswerOption);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueString' as keyof IQuestionnaireItemAnswerOption);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueCoding' as keyof IQuestionnaireItemAnswerOption);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IQuestionnaireItemAnswerOption);
      otherKeys.push('_valueReference' as keyof IQuestionnaireItemAnswerOption);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireItemAnswerOption instance
   */
  build(): QuestionnaireItemAnswerOption {
    return new QuestionnaireItemAnswerOption(this.data);
  }

  /**
   * Build and validate the QuestionnaireItemAnswerOption instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireItemAnswerOption> {
    const questionnaireItemAnswerOption = this.build();
    await questionnaireItemAnswerOption.validateOrThrow();
    return questionnaireItemAnswerOption;
  }
}
