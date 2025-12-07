import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientSubstanceStrength } from '../../models/backbones/IngredientSubstanceStrength.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIngredientSubstanceStrength,
  IIngredientSubstanceStrengthReferenceStrength,
  IRatio,
  IRatioRange,
} from '@fhir-toolkit/r4b-types';

/**
 * IngredientSubstanceStrengthBuilder - Fluent builder for IngredientSubstanceStrength backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const ingredientSubstanceStrength = new IngredientSubstanceStrengthBuilder()
 *   .setTextPresentation(value)
 *   .addCountry({ ... })
 *   .build();
 */
export class IngredientSubstanceStrengthBuilder extends BackboneElementBuilder<IngredientSubstanceStrength, IIngredientSubstanceStrength> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set textPresentation
   * Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio)
   */
  setTextPresentation(textPresentation: string): this {
    this.data.textPresentation = textPresentation;
    return this;
  }

  /**
   * Set textConcentration
   * Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio)
   */
  setTextConcentration(textConcentration: string): this {
    this.data.textConcentration = textConcentration;
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
   * Set presentation choice type (presentationRatio, presentationRatioRange)
   * @param type - 'Ratio' | 'RatioRange'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPresentation('Ratio', value)
   */
  setPresentation<T extends 'Ratio' | 'RatioRange'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `presentation${type}` as keyof IIngredientSubstanceStrength;
    const otherKeys: (keyof IIngredientSubstanceStrength)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('presentationRatio' as keyof IIngredientSubstanceStrength);
      otherKeys.push('_presentationRatio' as keyof IIngredientSubstanceStrength);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('presentationRatioRange' as keyof IIngredientSubstanceStrength);
      otherKeys.push('_presentationRatioRange' as keyof IIngredientSubstanceStrength);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set concentration choice type (concentrationRatio, concentrationRatioRange)
   * @param type - 'Ratio' | 'RatioRange'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setConcentration('Ratio', value)
   */
  setConcentration<T extends 'Ratio' | 'RatioRange'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `concentration${type}` as keyof IIngredientSubstanceStrength;
    const otherKeys: (keyof IIngredientSubstanceStrength)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('concentrationRatio' as keyof IIngredientSubstanceStrength);
      otherKeys.push('_concentrationRatio' as keyof IIngredientSubstanceStrength);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('concentrationRatioRange' as keyof IIngredientSubstanceStrength);
      otherKeys.push('_concentrationRatioRange' as keyof IIngredientSubstanceStrength);
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

  /**
   * Add referenceStrength
   * Strength expressed in terms of a reference substance
   */
  addReferenceStrength(referenceStrength: IIngredientSubstanceStrengthReferenceStrength): this {
    return this.addToArray('referenceStrength', referenceStrength);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the IngredientSubstanceStrength instance
   */
  build(): IngredientSubstanceStrength {
    return new IngredientSubstanceStrength(this.data);
  }

  /**
   * Build and validate the IngredientSubstanceStrength instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<IngredientSubstanceStrength> {
    const ingredientSubstanceStrength = this.build();
    await ingredientSubstanceStrength.validateOrThrow();
    return ingredientSubstanceStrength;
  }
}
