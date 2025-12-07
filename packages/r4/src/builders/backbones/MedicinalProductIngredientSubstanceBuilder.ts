import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductIngredientSubstance } from '../../models/backbones/MedicinalProductIngredientSubstance.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  IMedicinalProductIngredientSubstance,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIngredientSubstanceBuilder - Fluent builder for MedicinalProductIngredientSubstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIngredientSubstance = new MedicinalProductIngredientSubstanceBuilder()
 *   .setCode(value)
 *   .addStrength({ ... })
 *   .build();
 */
export class MedicinalProductIngredientSubstanceBuilder extends BackboneElementBuilder<MedicinalProductIngredientSubstance, IMedicinalProductIngredientSubstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The ingredient substance
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add strength
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
   */
  addStrength(strength: IMedicinalProductIngredientSpecifiedSubstanceStrength): this {
    return this.addToArray('strength', strength);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductIngredientSubstance instance
   */
  build(): MedicinalProductIngredientSubstance {
    return new MedicinalProductIngredientSubstance(this.data);
  }

  /**
   * Build and validate the MedicinalProductIngredientSubstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIngredientSubstance> {
    const medicinalProductIngredientSubstance = this.build();
    await medicinalProductIngredientSubstance.validateOrThrow();
    return medicinalProductIngredientSubstance;
  }
}
