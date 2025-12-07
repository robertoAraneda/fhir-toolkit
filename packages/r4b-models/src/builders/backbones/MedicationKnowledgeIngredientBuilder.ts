import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeIngredient } from '../../models/backbones/MedicationKnowledgeIngredient.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeIngredient,
  IRatio,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeIngredientBuilder - Fluent builder for MedicationKnowledgeIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeIngredient = new MedicationKnowledgeIngredientBuilder()
 *   .setIsActive(value)
 *   .build();
 */
export class MedicationKnowledgeIngredientBuilder extends BackboneElementBuilder<MedicationKnowledgeIngredient, IMedicationKnowledgeIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set isActive
   * Active ingredient indicator
   */
  setIsActive(isActive: boolean): this {
    this.data.isActive = isActive;
    return this;
  }

  /**
   * Set strength
   * Quantity of ingredient present
   */
  setStrength(strength: IRatio): this {
    this.data.strength = strength;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('CodeableConcept', value)
   */
  setItem<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `item${type}` as keyof IMedicationKnowledgeIngredient;
    const otherKeys: (keyof IMedicationKnowledgeIngredient)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IMedicationKnowledgeIngredient);
      otherKeys.push('_itemCodeableConcept' as keyof IMedicationKnowledgeIngredient);
    }
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IMedicationKnowledgeIngredient);
      otherKeys.push('_itemReference' as keyof IMedicationKnowledgeIngredient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeIngredient instance
   */
  build(): MedicationKnowledgeIngredient {
    return new MedicationKnowledgeIngredient(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeIngredient> {
    const medicationKnowledgeIngredient = this.build();
    await medicationKnowledgeIngredient.validateOrThrow();
    return medicationKnowledgeIngredient;
  }
}
