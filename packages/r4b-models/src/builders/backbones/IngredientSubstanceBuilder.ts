import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientSubstance } from '../../models/backbones/IngredientSubstance.js';
import type {
  ICodeableReference,
  IIngredientSubstance,
  IIngredientSubstanceStrength,
} from '@fhir-toolkit/r4b-types';

/**
 * IngredientSubstanceBuilder - Fluent builder for IngredientSubstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const ingredientSubstance = new IngredientSubstanceBuilder()
 *   .setCode(value)
 *   .addStrength({ ... })
 *   .build();
 */
export class IngredientSubstanceBuilder extends BackboneElementBuilder<IngredientSubstance, IIngredientSubstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * A code or full resource that represents the ingredient substance
   */
  setCode(code: ICodeableReference): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add strength
   * The quantity of substance, per presentation, or per volume or mass, and type of quantity
   */
  addStrength(strength: IIngredientSubstanceStrength): this {
    return this.addToArray('strength', strength);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the IngredientSubstance instance
   */
  build(): IngredientSubstance {
    return new IngredientSubstance(this.data);
  }

  /**
   * Build and validate the IngredientSubstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<IngredientSubstance> {
    const ingredientSubstance = this.build();
    await ingredientSubstance.validateOrThrow();
    return ingredientSubstance;
  }
}
