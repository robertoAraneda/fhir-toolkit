import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeDefinitionalIngredient } from '../../models/backbones/MedicationKnowledgeDefinitionalIngredient.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicationKnowledgeDefinitionalIngredient,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeDefinitionalIngredientBuilder - Fluent builder for MedicationKnowledgeDefinitionalIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeDefinitionalIngredient = new MedicationKnowledgeDefinitionalIngredientBuilder()
 *   .setItem(value)
 *   .build();
 */
export class MedicationKnowledgeDefinitionalIngredientBuilder extends BackboneElementBuilder<MedicationKnowledgeDefinitionalIngredient, IMedicationKnowledgeDefinitionalIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * Substances contained in the medication
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  /**
   * Set type
   * A code that defines the type of ingredient, active, base, etc
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set strength choice type (strengthRatio, strengthCodeableConcept, strengthQuantity)
   * @param type - 'Ratio' | 'CodeableConcept' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStrength('Ratio', value)
   */
  setStrength<T extends 'Ratio' | 'CodeableConcept' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `strength${type}` as keyof IMedicationKnowledgeDefinitionalIngredient;
    const otherKeys: (keyof IMedicationKnowledgeDefinitionalIngredient)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('strengthRatio' as keyof IMedicationKnowledgeDefinitionalIngredient);
      otherKeys.push('_strengthRatio' as keyof IMedicationKnowledgeDefinitionalIngredient);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('strengthCodeableConcept' as keyof IMedicationKnowledgeDefinitionalIngredient);
      otherKeys.push('_strengthCodeableConcept' as keyof IMedicationKnowledgeDefinitionalIngredient);
    }
    if (type !== 'Quantity') {
      otherKeys.push('strengthQuantity' as keyof IMedicationKnowledgeDefinitionalIngredient);
      otherKeys.push('_strengthQuantity' as keyof IMedicationKnowledgeDefinitionalIngredient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeDefinitionalIngredient instance
   */
  build(): MedicationKnowledgeDefinitionalIngredient {
    return new MedicationKnowledgeDefinitionalIngredient(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeDefinitionalIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeDefinitionalIngredient> {
    const medicationKnowledgeDefinitionalIngredient = this.build();
    await medicationKnowledgeDefinitionalIngredient.validateOrThrow();
    return medicationKnowledgeDefinitionalIngredient;
  }
}
