import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductIngredientSpecifiedSubstance } from '../../models/backbones/MedicinalProductIngredientSpecifiedSubstance.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstance,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIngredientSpecifiedSubstanceBuilder - Fluent builder for MedicinalProductIngredientSpecifiedSubstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstance = new MedicinalProductIngredientSpecifiedSubstanceBuilder()
 *   .setCode(value)
 *   .addStrength({ ... })
 *   .build();
 */
export class MedicinalProductIngredientSpecifiedSubstanceBuilder extends BackboneElementBuilder<MedicinalProductIngredientSpecifiedSubstance, IMedicinalProductIngredientSpecifiedSubstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The specified substance
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set group
   * The group of specified substance, e.g. group 1 to 4
   */
  setGroup(group: ICodeableConcept): this {
    this.data.group = group;
    return this;
  }

  /**
   * Set confidentiality
   * Confidentiality level of the specified substance as the ingredient
   */
  setConfidentiality(confidentiality: ICodeableConcept): this {
    this.data.confidentiality = confidentiality;
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
   * Build the MedicinalProductIngredientSpecifiedSubstance instance
   */
  build(): MedicinalProductIngredientSpecifiedSubstance {
    return new MedicinalProductIngredientSpecifiedSubstance(this.data);
  }

  /**
   * Build and validate the MedicinalProductIngredientSpecifiedSubstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIngredientSpecifiedSubstance> {
    const medicinalProductIngredientSpecifiedSubstance = this.build();
    await medicinalProductIngredientSpecifiedSubstance.validateOrThrow();
    return medicinalProductIngredientSpecifiedSubstance;
  }
}
