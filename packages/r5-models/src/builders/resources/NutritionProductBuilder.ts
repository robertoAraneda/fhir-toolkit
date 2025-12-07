import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NutritionProduct } from '../../models/resources/NutritionProduct.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  INutritionProduct,
  INutritionProductCharacteristic,
  INutritionProductIngredient,
  INutritionProductInstance,
  INutritionProductNutrient,
  IReference,
  NutritionProductStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionProductBuilder - Fluent builder for NutritionProduct resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProduct = new NutritionProductBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class NutritionProductBuilder extends DomainResourceBuilder<NutritionProduct, INutritionProduct> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * A code that can identify the detailed nutrients and ingredients in a specific food product
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: NutritionProductStatusType): this {
    this.data.status = status;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add manufacturer
   * Manufacturer, representative or officially responsible for the product
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add nutrient
   * The product's nutritional information expressed by the nutrients
   */
  addNutrient(nutrient: INutritionProductNutrient): this {
    return this.addToArray('nutrient', nutrient);
  }

  /**
   * Add ingredient
   * Ingredients contained in this product
   */
  addIngredient(ingredient: INutritionProductIngredient): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add knownAllergen
   * Known or suspected allergens that are a part of this product
   */
  addKnownAllergen(knownAllergen: ICodeableReference): this {
    return this.addToArray('knownAllergen', knownAllergen);
  }

  /**
   * Add characteristic
   * Specifies descriptive properties of the nutrition product
   */
  addCharacteristic(characteristic: INutritionProductCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  /**
   * Add instance
   * One or several physical instances or occurrences of the nutrition product
   */
  addInstance(instance: INutritionProductInstance): this {
    return this.addToArray('instance', instance);
  }

  /**
   * Add note
   * Comments made about the product
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProduct instance
   */
  build(): NutritionProduct {
    return new NutritionProduct(this.data);
  }

  /**
   * Build and validate the NutritionProduct instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProduct> {
    const nutritionProduct = this.build();
    await nutritionProduct.validateOrThrow();
    return nutritionProduct;
  }
}
