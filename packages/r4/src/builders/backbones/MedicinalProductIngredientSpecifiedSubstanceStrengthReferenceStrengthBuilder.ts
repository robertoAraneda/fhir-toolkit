import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength } from '../../models/backbones/MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthBuilder - Fluent builder for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthBuilder()
 *   .setSubstance(value)
 *   .addCountry({ ... })
 *   .build();
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthBuilder extends BackboneElementBuilder<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength, IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set substance
   * Relevant reference substance
   */
  setSubstance(substance: ICodeableConcept): this {
    this.data.substance = substance;
    return this;
  }

  /**
   * Set strength
   * Strength expressed in terms of a reference substance
   */
  setStrength(strength: IRatio): this {
    this.data.strength = strength;
    return this;
  }

  /**
   * Set strengthLowLimit
   * Strength expressed in terms of a reference substance
   */
  setStrengthLowLimit(strengthLowLimit: IRatio): this {
    this.data.strengthLowLimit = strengthLowLimit;
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength instance
   */
  build(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(this.data);
  }

  /**
   * Build and validate the MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength> {
    const medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = this.build();
    await medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.validateOrThrow();
    return medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
  }
}
