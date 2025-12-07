import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NutritionProduct } from '../../models/resources/NutritionProduct.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  INutritionProduct,
  INutritionProductIngredient,
  INutritionProductInstance,
  INutritionProductNutrient,
  INutritionProductProductCharacteristic,
  IReference,
  NutritionProductStatusType,
} from '@fhir-toolkit/r4b-types';

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
 *   .setStatus(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class NutritionProductBuilder extends DomainResourceBuilder<NutritionProduct, INutritionProduct> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: NutritionProductStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * A code designating a specific type of nutritional product
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set instance
   * One or several physical instances or occurrences of the nutrition product
   */
  setInstance(instance: INutritionProductInstance): this {
    this.data.instance = instance;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * A category or class of the nutrition product (halal, kosher, gluten free, vegan, etc)
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
   * Add productCharacteristic
   * Specifies descriptive properties of the nutrition product
   */
  addProductCharacteristic(productCharacteristic: INutritionProductProductCharacteristic): this {
    return this.addToArray('productCharacteristic', productCharacteristic);
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
