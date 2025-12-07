import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionInteractionInteractant } from '../../models/backbones/ClinicalUseDefinitionInteractionInteractant.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClinicalUseDefinitionInteractionInteractant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClinicalUseDefinitionInteractionInteractantBuilder - Fluent builder for ClinicalUseDefinitionInteractionInteractant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionInteractionInteractant = new ClinicalUseDefinitionInteractionInteractantBuilder()
 *   .build();
 */
export class ClinicalUseDefinitionInteractionInteractantBuilder extends BackboneElementBuilder<ClinicalUseDefinitionInteractionInteractant, IClinicalUseDefinitionInteractionInteractant> {
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
    const key = `item${type}` as keyof IClinicalUseDefinitionInteractionInteractant;
    const otherKeys: (keyof IClinicalUseDefinitionInteractionInteractant)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IClinicalUseDefinitionInteractionInteractant);
      otherKeys.push('_itemReference' as keyof IClinicalUseDefinitionInteractionInteractant);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IClinicalUseDefinitionInteractionInteractant);
      otherKeys.push('_itemCodeableConcept' as keyof IClinicalUseDefinitionInteractionInteractant);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionInteractionInteractant instance
   */
  build(): ClinicalUseDefinitionInteractionInteractant {
    return new ClinicalUseDefinitionInteractionInteractant(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionInteractionInteractant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionInteractionInteractant> {
    const clinicalUseDefinitionInteractionInteractant = this.build();
    await clinicalUseDefinitionInteractionInteractant.validateOrThrow();
    return clinicalUseDefinitionInteractionInteractant;
  }
}
