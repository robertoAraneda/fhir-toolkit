import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventSupportingInfo } from '../../models/backbones/AdverseEventSupportingInfo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdverseEventSupportingInfo,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventSupportingInfoBuilder - Fluent builder for AdverseEventSupportingInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventSupportingInfo = new AdverseEventSupportingInfoBuilder()
 *   .build();
 */
export class AdverseEventSupportingInfoBuilder extends BackboneElementBuilder<AdverseEventSupportingInfo, IAdverseEventSupportingInfo> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type (itemReference, itemCodeableConcept)
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('Reference', value)
   */
  setItem<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `item${type}` as keyof IAdverseEventSupportingInfo;
    const otherKeys: (keyof IAdverseEventSupportingInfo)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IAdverseEventSupportingInfo);
      otherKeys.push('_itemReference' as keyof IAdverseEventSupportingInfo);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IAdverseEventSupportingInfo);
      otherKeys.push('_itemCodeableConcept' as keyof IAdverseEventSupportingInfo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventSupportingInfo instance
   */
  build(): AdverseEventSupportingInfo {
    return new AdverseEventSupportingInfo(this.data);
  }

  /**
   * Build and validate the AdverseEventSupportingInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventSupportingInfo> {
    const adverseEventSupportingInfo = this.build();
    await adverseEventSupportingInfo.validateOrThrow();
    return adverseEventSupportingInfo;
  }
}
