import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimSupportingInfo } from '../../models/backbones/ClaimSupportingInfo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  IClaimSupportingInfo,
  ICodeableConcept,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimSupportingInfoBuilder - Fluent builder for ClaimSupportingInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimSupportingInfo = new ClaimSupportingInfoBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class ClaimSupportingInfoBuilder extends BackboneElementBuilder<ClaimSupportingInfo, IClaimSupportingInfo> {
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
  setReason(reason: ICodeableConcept): this {
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
    const key = `timing${type}` as keyof IClaimSupportingInfo;
    const otherKeys: (keyof IClaimSupportingInfo)[] = [];
    if (type !== 'Date') {
      otherKeys.push('timingDate' as keyof IClaimSupportingInfo);
      otherKeys.push('_timingDate' as keyof IClaimSupportingInfo);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IClaimSupportingInfo);
      otherKeys.push('_timingPeriod' as keyof IClaimSupportingInfo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set value choice type (valueBoolean, valueString, valueQuantity, valueAttachment, valueReference)
   * @param type - 'Boolean' | 'String' | 'Quantity' | 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'String' | 'Quantity' | 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IClaimSupportingInfo;
    const otherKeys: (keyof IClaimSupportingInfo)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IClaimSupportingInfo);
      otherKeys.push('_valueBoolean' as keyof IClaimSupportingInfo);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IClaimSupportingInfo);
      otherKeys.push('_valueString' as keyof IClaimSupportingInfo);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IClaimSupportingInfo);
      otherKeys.push('_valueQuantity' as keyof IClaimSupportingInfo);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IClaimSupportingInfo);
      otherKeys.push('_valueAttachment' as keyof IClaimSupportingInfo);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IClaimSupportingInfo);
      otherKeys.push('_valueReference' as keyof IClaimSupportingInfo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimSupportingInfo instance
   */
  build(): ClaimSupportingInfo {
    return new ClaimSupportingInfo(this.data);
  }

  /**
   * Build and validate the ClaimSupportingInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimSupportingInfo> {
    const claimSupportingInfo = this.build();
    await claimSupportingInfo.validateOrThrow();
    return claimSupportingInfo;
  }
}
