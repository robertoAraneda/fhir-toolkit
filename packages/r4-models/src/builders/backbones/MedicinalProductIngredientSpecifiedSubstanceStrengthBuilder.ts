import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductIngredientSpecifiedSubstanceStrength } from '../../models/backbones/MedicinalProductIngredientSpecifiedSubstanceStrength.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthBuilder - Fluent builder for MedicinalProductIngredientSpecifiedSubstanceStrength backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstanceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrengthBuilder()
 *   .setPresentation(value)
 *   .addCountry({ ... })
 *   .build();
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthBuilder extends BackboneElementBuilder<MedicinalProductIngredientSpecifiedSubstanceStrength, IMedicinalProductIngredientSpecifiedSubstanceStrength> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set presentation
   * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item
   */
  setPresentation(presentation: IRatio): this {
    this.data.presentation = presentation;
    return this;
  }

  /**
   * Set presentationLowLimit
   * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit
   */
  setPresentationLowLimit(presentationLowLimit: IRatio): this {
    this.data.presentationLowLimit = presentationLowLimit;
    return this;
  }

  /**
   * Set concentration
   * The strength per unitary volume (or mass)
   */
  setConcentration(concentration: IRatio): this {
    this.data.concentration = concentration;
    return this;
  }

  /**
   * Set concentrationLowLimit
   * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit
   */
  setConcentrationLowLimit(concentrationLowLimit: IRatio): this {
    this.data.concentrationLowLimit = concentrationLowLimit;
    return this;
  }

  /**
   * Set measurementPoint
   * For when strength is measured at a particular point or distance
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
   * The country or countries for which the strength range applies
   */
  addCountry(country: ICodeableConcept): this {
    return this.addToArray('country', country);
  }

  /**
   * Add referenceStrength
   * Strength expressed in terms of a reference substance
   */
  addReferenceStrength(referenceStrength: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength): this {
    return this.addToArray('referenceStrength', referenceStrength);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductIngredientSpecifiedSubstanceStrength instance
   */
  build(): MedicinalProductIngredientSpecifiedSubstanceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrength(this.data);
  }

  /**
   * Build and validate the MedicinalProductIngredientSpecifiedSubstanceStrength instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIngredientSpecifiedSubstanceStrength> {
    const medicinalProductIngredientSpecifiedSubstanceStrength = this.build();
    await medicinalProductIngredientSpecifiedSubstanceStrength.validateOrThrow();
    return medicinalProductIngredientSpecifiedSubstanceStrength;
  }
}
