import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductManufactured } from '../../models/resources/MedicinalProductManufactured.js';
import type {
  ICodeableConcept,
  IMedicinalProductManufactured,
  IProdCharacteristic,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductManufacturedBuilder - Fluent builder for MedicinalProductManufactured resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductManufactured = new MedicinalProductManufacturedBuilder()
 *   .setId('123')
 *   .setManufacturedDoseForm(value)
 *   .addManufacturer({ ... })
 *   .build();
 */
export class MedicinalProductManufacturedBuilder extends DomainResourceBuilder<MedicinalProductManufactured, IMedicinalProductManufactured> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set manufacturedDoseForm
   * Dose form as manufactured and before any transformation into the pharmaceutical product
   */
  setManufacturedDoseForm(manufacturedDoseForm: ICodeableConcept): this {
    this.data.manufacturedDoseForm = manufacturedDoseForm;
    return this;
  }

  /**
   * Set unitOfPresentation
   * The “real world” units in which the quantity of the manufactured item is described
   */
  setUnitOfPresentation(unitOfPresentation: ICodeableConcept): this {
    this.data.unitOfPresentation = unitOfPresentation;
    return this;
  }

  /**
   * Set quantity
   * The quantity or "count number" of the manufactured item
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set physicalCharacteristics
   * Dimensions, color etc.
   */
  setPhysicalCharacteristics(physicalCharacteristics: IProdCharacteristic): this {
    this.data.physicalCharacteristics = physicalCharacteristics;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add manufacturer
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add ingredient
   * Ingredient
   */
  addIngredient(ingredient: IReference<'MedicinalProductIngredient'>): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add otherCharacteristics
   * Other codeable characteristics
   */
  addOtherCharacteristics(otherCharacteristic: ICodeableConcept): this {
    return this.addToArray('otherCharacteristics', otherCharacteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductManufactured instance
   */
  build(): MedicinalProductManufactured {
    return new MedicinalProductManufactured(this.data);
  }

  /**
   * Build and validate the MedicinalProductManufactured instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductManufactured> {
    const medicinalProductManufactured = this.build();
    await medicinalProductManufactured.validateOrThrow();
    return medicinalProductManufactured;
  }
}
