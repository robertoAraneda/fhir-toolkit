import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderEnteralFormula } from '../../models/backbones/NutritionOrderEnteralFormula.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  INutritionOrderEnteralFormula,
  INutritionOrderEnteralFormulaAdditive,
  INutritionOrderEnteralFormulaAdministration,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderEnteralFormulaBuilder - Fluent builder for NutritionOrderEnteralFormula backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderEnteralFormula = new NutritionOrderEnteralFormulaBuilder()
 *   .setBaseFormulaType(value)
 *   .addDeliveryDevice({ ... })
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
  setBaseFormulaType(baseFormulaType: ICodeableReference): this {
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
   * Set caloricDensity
   * Amount of energy per specified volume that is required
   */
  setCaloricDensity(caloricDensity: IQuantity): this {
    this.data.caloricDensity = caloricDensity;
    return this;
  }

  /**
   * Set routeOfAdministration
   * How the formula should enter the patient's gastrointestinal tract
   */
  setRouteOfAdministration(routeOfAdministration: ICodeableConcept): this {
    this.data.routeOfAdministration = routeOfAdministration;
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
   * Add deliveryDevice
   * Intended type of device for the administration
   */
  addDeliveryDevice(deliveryDevice: ICodeableReference): this {
    return this.addToArray('deliveryDevice', deliveryDevice);
  }

  /**
   * Add additive
   * Components to add to the feeding
   */
  addAdditive(additive: INutritionOrderEnteralFormulaAdditive): this {
    return this.addToArray('additive', additive);
  }

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
