import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionProductInstance } from '../../models/backbones/NutritionProductInstance.js';
import type {
  IIdentifier,
  INutritionProductInstance,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionProductInstanceBuilder - Fluent builder for NutritionProductInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProductInstance = new NutritionProductInstanceBuilder()
 *   .setQuantity(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class NutritionProductInstanceBuilder extends BackboneElementBuilder<NutritionProductInstance, INutritionProductInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set quantity
   * The amount of items or instances
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set name
   * The name for the specific product
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set lotNumber
   * The identification of the batch or lot of the product
   */
  setLotNumber(lotNumber: string): this {
    this.data.lotNumber = lotNumber;
    return this;
  }

  /**
   * Set expiry
   * The expiry date or date and time for the product
   */
  setExpiry(expiry: string): this {
    this.data.expiry = expiry;
    return this;
  }

  /**
   * Set useBy
   * The date until which the product is expected to be good for consumption
   */
  setUseBy(useBy: string): this {
    this.data.useBy = useBy;
    return this;
  }

  /**
   * Set biologicalSourceEvent
   * An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   */
  setBiologicalSourceEvent(biologicalSourceEvent: IIdentifier): this {
    this.data.biologicalSourceEvent = biologicalSourceEvent;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * The identifier for the physical instance, typically a serial number or manufacturer number
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProductInstance instance
   */
  build(): NutritionProductInstance {
    return new NutritionProductInstance(this.data);
  }

  /**
   * Build and validate the NutritionProductInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProductInstance> {
    const nutritionProductInstance = this.build();
    await nutritionProductInstance.validateOrThrow();
    return nutritionProductInstance;
  }
}
