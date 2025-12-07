import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventContributingFactor } from '../../models/backbones/AdverseEventContributingFactor.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdverseEventContributingFactor,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventContributingFactorBuilder - Fluent builder for AdverseEventContributingFactor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventContributingFactor = new AdverseEventContributingFactorBuilder()
 *   .build();
 */
export class AdverseEventContributingFactorBuilder extends BackboneElementBuilder<AdverseEventContributingFactor, IAdverseEventContributingFactor> {
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
    const key = `item${type}` as keyof IAdverseEventContributingFactor;
    const otherKeys: (keyof IAdverseEventContributingFactor)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IAdverseEventContributingFactor);
      otherKeys.push('_itemReference' as keyof IAdverseEventContributingFactor);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IAdverseEventContributingFactor);
      otherKeys.push('_itemCodeableConcept' as keyof IAdverseEventContributingFactor);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventContributingFactor instance
   */
  build(): AdverseEventContributingFactor {
    return new AdverseEventContributingFactor(this.data);
  }

  /**
   * Build and validate the AdverseEventContributingFactor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventContributingFactor> {
    const adverseEventContributingFactor = this.build();
    await adverseEventContributingFactor.validateOrThrow();
    return adverseEventContributingFactor;
  }
}
