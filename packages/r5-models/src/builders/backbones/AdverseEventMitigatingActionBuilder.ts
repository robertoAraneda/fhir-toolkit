import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventMitigatingAction } from '../../models/backbones/AdverseEventMitigatingAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdverseEventMitigatingAction,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventMitigatingActionBuilder - Fluent builder for AdverseEventMitigatingAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventMitigatingAction = new AdverseEventMitigatingActionBuilder()
 *   .build();
 */
export class AdverseEventMitigatingActionBuilder extends BackboneElementBuilder<AdverseEventMitigatingAction, IAdverseEventMitigatingAction> {
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
    const key = `item${type}` as keyof IAdverseEventMitigatingAction;
    const otherKeys: (keyof IAdverseEventMitigatingAction)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IAdverseEventMitigatingAction);
      otherKeys.push('_itemReference' as keyof IAdverseEventMitigatingAction);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IAdverseEventMitigatingAction);
      otherKeys.push('_itemCodeableConcept' as keyof IAdverseEventMitigatingAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventMitigatingAction instance
   */
  build(): AdverseEventMitigatingAction {
    return new AdverseEventMitigatingAction(this.data);
  }

  /**
   * Build and validate the AdverseEventMitigatingAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventMitigatingAction> {
    const adverseEventMitigatingAction = this.build();
    await adverseEventMitigatingAction.validateOrThrow();
    return adverseEventMitigatingAction;
  }
}
