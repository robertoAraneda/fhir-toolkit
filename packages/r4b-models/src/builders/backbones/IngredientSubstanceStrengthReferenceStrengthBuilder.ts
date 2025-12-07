import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientSubstanceStrengthReferenceStrength } from '../../models/backbones/IngredientSubstanceStrengthReferenceStrength.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
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
   * Set measurementPoint
   * When strength is measured at a particular point or distance
   */
  setMeasurementPoint(measurementPoint: string): this {
    this.data.measurementPoint = measurementPoint;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set strength choice type (strengthRatio, strengthRatioRange)
   * @param type - 'Ratio' | 'RatioRange'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStrength('Ratio', value)
   */
  setStrength<T extends 'Ratio' | 'RatioRange'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `strength${type}` as keyof IIngredientSubstanceStrengthReferenceStrength;
    const otherKeys: (keyof IIngredientSubstanceStrengthReferenceStrength)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('strengthRatio' as keyof IIngredientSubstanceStrengthReferenceStrength);
      otherKeys.push('_strengthRatio' as keyof IIngredientSubstanceStrengthReferenceStrength);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('strengthRatioRange' as keyof IIngredientSubstanceStrengthReferenceStrength);
      otherKeys.push('_strengthRatioRange' as keyof IIngredientSubstanceStrengthReferenceStrength);
    }
    return this.setChoiceType(key, value, otherKeys);
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
