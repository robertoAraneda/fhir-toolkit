import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientSubstanceStrength } from '../../models/backbones/IngredientSubstanceStrength.js';
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
 *   .setPresentationRatio(value)
 *   .addCountry({ ... })
 *   .build();
 */
export class IngredientSubstanceStrengthBuilder extends BackboneElementBuilder<IngredientSubstanceStrength, IIngredientSubstanceStrength> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set presentationRatio
   * The quantity of substance in the unit of presentation
   */
  setPresentationRatio(presentationRatio: IRatio): this {
    this.data.presentationRatio = presentationRatio;
    return this;
  }

  /**
   * Set presentationRatioRange
   * The quantity of substance in the unit of presentation
   */
  setPresentationRatioRange(presentationRatioRange: IRatioRange): this {
    this.data.presentationRatioRange = presentationRatioRange;
    return this;
  }

  /**
   * Set textPresentation
   * Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio)
   */
  setTextPresentation(textPresentation: string): this {
    this.data.textPresentation = textPresentation;
    return this;
  }

  /**
   * Set concentrationRatio
   * The strength per unitary volume (or mass)
   */
  setConcentrationRatio(concentrationRatio: IRatio): this {
    this.data.concentrationRatio = concentrationRatio;
    return this;
  }

  /**
   * Set concentrationRatioRange
   * The strength per unitary volume (or mass)
   */
  setConcentrationRatioRange(concentrationRatioRange: IRatioRange): this {
    this.data.concentrationRatioRange = concentrationRatioRange;
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
