import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitSupportingInfo } from '../../models/backbones/ExplanationOfBenefitSupportingInfo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  ICoding,
  IExplanationOfBenefitSupportingInfo,
  IIdentifier,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitSupportingInfoBuilder - Fluent builder for ExplanationOfBenefitSupportingInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitSupportingInfo = new ExplanationOfBenefitSupportingInfoBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class ExplanationOfBenefitSupportingInfoBuilder extends BackboneElementBuilder<ExplanationOfBenefitSupportingInfo, IExplanationOfBenefitSupportingInfo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Information instance identifier
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set category
   * Classification of the supplied information
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set code
   * Type of information
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set reason
   * Explanation for the information
   */
  setReason(reason: ICoding): this {
    this.data.reason = reason;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set timing choice type (timingDate, timingPeriod)
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTiming('Date', value)
   */
  setTiming<T extends 'Date' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `timing${type}` as keyof IExplanationOfBenefitSupportingInfo;
    const otherKeys: (keyof IExplanationOfBenefitSupportingInfo)[] = [];
    if (type !== 'Date') {
      otherKeys.push('timingDate' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_timingDate' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_timingPeriod' as keyof IExplanationOfBenefitSupportingInfo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set value choice type (valueBoolean, valueString, valueQuantity, valueAttachment, valueReference, valueIdentifier)
   * @param type - 'Boolean' | 'String' | 'Quantity' | 'Attachment' | 'Reference' | 'Identifier'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'String' | 'Quantity' | 'Attachment' | 'Reference' | 'Identifier'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IExplanationOfBenefitSupportingInfo;
    const otherKeys: (keyof IExplanationOfBenefitSupportingInfo)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueBoolean' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueString' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueQuantity' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueAttachment' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueReference' as keyof IExplanationOfBenefitSupportingInfo);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof IExplanationOfBenefitSupportingInfo);
      otherKeys.push('_valueIdentifier' as keyof IExplanationOfBenefitSupportingInfo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitSupportingInfo instance
   */
  build(): ExplanationOfBenefitSupportingInfo {
    return new ExplanationOfBenefitSupportingInfo(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitSupportingInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitSupportingInfo> {
    const explanationOfBenefitSupportingInfo = this.build();
    await explanationOfBenefitSupportingInfo.validateOrThrow();
    return explanationOfBenefitSupportingInfo;
  }
}
