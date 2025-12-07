import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { QuestionnaireItemInitial } from '../../models/backbones/QuestionnaireItemInitial.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICoding,
  IQuantity,
  IQuestionnaireItemInitial,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * QuestionnaireItemInitialBuilder - Fluent builder for QuestionnaireItemInitial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireItemInitial = new QuestionnaireItemInitialBuilder()
 *   .build();
 */
export class QuestionnaireItemInitialBuilder extends BackboneElementBuilder<QuestionnaireItemInitial, IQuestionnaireItemInitial> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueBoolean, valueDecimal, valueInteger, valueDate, valueDateTime, valueTime, valueString, valueUri, valueAttachment, valueCoding, valueQuantity, valueReference)
   * @param type - 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'Decimal' | 'Integer' | 'Date' | 'DateTime' | 'Time' | 'String' | 'Uri' | 'Attachment' | 'Coding' | 'Quantity' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IQuestionnaireItemInitial;
    const otherKeys: (keyof IQuestionnaireItemInitial)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueBoolean' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueDecimal' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueInteger' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueDate' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueDateTime' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueTime' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueString' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueUri' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueAttachment' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueCoding' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueQuantity' as keyof IQuestionnaireItemInitial);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IQuestionnaireItemInitial);
      otherKeys.push('_valueReference' as keyof IQuestionnaireItemInitial);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireItemInitial instance
   */
  build(): QuestionnaireItemInitial {
    return new QuestionnaireItemInitial(this.data);
  }

  /**
   * Build and validate the QuestionnaireItemInitial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireItemInitial> {
    const questionnaireItemInitial = this.build();
    await questionnaireItemInitial.validateOrThrow();
    return questionnaireItemInitial;
  }
}
