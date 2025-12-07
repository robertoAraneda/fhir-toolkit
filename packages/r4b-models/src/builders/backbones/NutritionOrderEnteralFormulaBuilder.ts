import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderEnteralFormula } from '../../models/backbones/NutritionOrderEnteralFormula.js';
import type {
  ICodeableConcept,
  INutritionOrderEnteralFormula,
  INutritionOrderEnteralFormulaAdministration,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * NutritionOrderEnteralFormulaBuilder - Fluent builder for NutritionOrderEnteralFormula backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderEnteralFormula = new NutritionOrderEnteralFormulaBuilder()
 *   .setBaseFormulaType(value)
 *   .addAdministration({ ... })
 *   .build();
 */
export class NutritionOrderEnteralFormulaBuilder extends BackboneElementBuilder<NutritionOrderEnteralFormula, INutritionOrderEnteralFormula> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set baseFormulaType
   * Type of enteral or infant formula
   */
  setBaseFormulaType(baseFormulaType: ICodeableConcept): this {
    this.data.baseFormulaType = baseFormulaType;
    return this;
  }

  /**
   * Set baseFormulaProductName
   * Product or brand name of the enteral or infant formula
   */
  setBaseFormulaProductName(baseFormulaProductName: string): this {
    this.data.baseFormulaProductName = baseFormulaProductName;
    return this;
  }

  /**
   * Set additiveType
   * Type of modular component to add to the feeding
   */
  setAdditiveType(additiveType: ICodeableConcept): this {
    this.data.additiveType = additiveType;
    return this;
  }

  /**
   * Set additiveProductName
   * Product or brand name of the modular additive
   */
  setAdditiveProductName(additiveProductName: string): this {
    this.data.additiveProductName = additiveProductName;
    return this;
  }

  /**
   * Set caloricDensity
   * Amount of energy per specified volume that is required
   */
  setCaloricDensity(caloricDensity: IQuantity): this {
    this.data.caloricDensity = caloricDensity;
    return this;
  }

  /**
   * Set routeofAdministration
   * How the formula should enter the patient's gastrointestinal tract
   */
  setRouteofAdministration(routeofAdministration: ICodeableConcept): this {
    this.data.routeofAdministration = routeofAdministration;
    return this;
  }

  /**
   * Set maxVolumeToDeliver
   * Upper limit on formula volume per unit of time
   */
  setMaxVolumeToDeliver(maxVolumeToDeliver: IQuantity): this {
    this.data.maxVolumeToDeliver = maxVolumeToDeliver;
    return this;
  }

  /**
   * Set administrationInstruction
   * Formula feeding instructions expressed as text
   */
  setAdministrationInstruction(administrationInstruction: string): this {
    this.data.administrationInstruction = administrationInstruction;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add administration
   * Formula feeding instruction as structured data
   */
  addAdministration(administration: INutritionOrderEnteralFormulaAdministration): this {
    return this.addToArray('administration', administration);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderEnteralFormula instance
   */
  build(): NutritionOrderEnteralFormula {
    return new NutritionOrderEnteralFormula(this.data);
  }

  /**
   * Build and validate the NutritionOrderEnteralFormula instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderEnteralFormula> {
    const nutritionOrderEnteralFormula = this.build();
    await nutritionOrderEnteralFormula.validateOrThrow();
    return nutritionOrderEnteralFormula;
  }
}
