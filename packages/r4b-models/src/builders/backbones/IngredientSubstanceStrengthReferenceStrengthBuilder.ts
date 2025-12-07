import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientSubstanceStrengthReferenceStrength } from '../../models/backbones/IngredientSubstanceStrengthReferenceStrength.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IIngredientSubstanceStrengthReferenceStrength,
  IRatio,
  IRatioRange,
} from '@fhir-toolkit/r4b-types';

/**
 * IngredientSubstanceStrengthReferenceStrengthBuilder - Fluent builder for IngredientSubstanceStrengthReferenceStrength backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const ingredientSubstanceStrengthReferenceStrength = new IngredientSubstanceStrengthReferenceStrengthBuilder()
 *   .setSubstance(value)
 *   .addCountry({ ... })
 *   .build();
 */
export class IngredientSubstanceStrengthReferenceStrengthBuilder extends BackboneElementBuilder<IngredientSubstanceStrengthReferenceStrength, IIngredientSubstanceStrengthReferenceStrength> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set substance
   * Relevant reference substance
   */
  setSubstance(substance: ICodeableReference): this {
    this.data.substance = substance;
    return this;
  }

  /**
   * Set strengthRatio
   * Strength expressed in terms of a reference substance
   */
  setStrengthRatio(strengthRatio: IRatio): this {
    this.data.strengthRatio = strengthRatio;
    return this;
  }

  /**
   * Set strengthRatioRange
   * Strength expressed in terms of a reference substance
   */
  setStrengthRatioRange(strengthRatioRange: IRatioRange): this {
    this.data.strengthRatioRange = strengthRatioRange;
    return this;
  }

  /**
   * Set measurementPoint
   * When strength is measured at a particular point or distance
   */
  setMeasurementPoint(measurementPoint: string): this {
    this.data.measurementPoint = measurementPoint;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add country
   * Where the strength range applies
   */
  addCountry(country: ICodeableConcept): this {
    return this.addToArray('country', country);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the IngredientSubstanceStrengthReferenceStrength instance
   */
  build(): IngredientSubstanceStrengthReferenceStrength {
    return new IngredientSubstanceStrengthReferenceStrength(this.data);
  }

  /**
   * Build and validate the IngredientSubstanceStrengthReferenceStrength instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<IngredientSubstanceStrengthReferenceStrength> {
    const ingredientSubstanceStrengthReferenceStrength = this.build();
    await ingredientSubstanceStrengthReferenceStrength.validateOrThrow();
    return ingredientSubstanceStrengthReferenceStrength;
  }
}
