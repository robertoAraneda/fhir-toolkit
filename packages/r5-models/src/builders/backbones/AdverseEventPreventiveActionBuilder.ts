import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventPreventiveAction } from '../../models/backbones/AdverseEventPreventiveAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdverseEventPreventiveAction,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventPreventiveActionBuilder - Fluent builder for AdverseEventPreventiveAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventPreventiveAction = new AdverseEventPreventiveActionBuilder()
 *   .build();
 */
export class AdverseEventPreventiveActionBuilder extends BackboneElementBuilder<AdverseEventPreventiveAction, IAdverseEventPreventiveAction> {
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
    const key = `item${type}` as keyof IAdverseEventPreventiveAction;
    const otherKeys: (keyof IAdverseEventPreventiveAction)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IAdverseEventPreventiveAction);
      otherKeys.push('_itemReference' as keyof IAdverseEventPreventiveAction);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IAdverseEventPreventiveAction);
      otherKeys.push('_itemCodeableConcept' as keyof IAdverseEventPreventiveAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventPreventiveAction instance
   */
  build(): AdverseEventPreventiveAction {
    return new AdverseEventPreventiveAction(this.data);
  }

  /**
   * Build and validate the AdverseEventPreventiveAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventPreventiveAction> {
    const adverseEventPreventiveAction = this.build();
    await adverseEventPreventiveAction.validateOrThrow();
    return adverseEventPreventiveAction;
  }
}
