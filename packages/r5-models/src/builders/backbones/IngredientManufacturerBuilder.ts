import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { IngredientManufacturer } from '../../models/backbones/IngredientManufacturer.js';
import type {
  IIngredientManufacturer,
  IReference,
  IngredientManufacturerRoleType,
} from '@fhir-toolkit/r5-types';

/**
 * IngredientManufacturerBuilder - Fluent builder for IngredientManufacturer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const ingredientManufacturer = new IngredientManufacturerBuilder()
 *   .setRole(value)
 *   .build();
 */
export class IngredientManufacturerBuilder extends BackboneElementBuilder<IngredientManufacturer, IIngredientManufacturer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * allowed | possible | actual
   */
  setRole(role: IngredientManufacturerRoleType): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set manufacturer
   * An organization that manufactures this ingredient
   */
  setManufacturer(manufacturer: IReference<'Organization'>): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the IngredientManufacturer instance
   */
  build(): IngredientManufacturer {
    return new IngredientManufacturer(this.data);
  }

  /**
   * Build and validate the IngredientManufacturer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<IngredientManufacturer> {
    const ingredientManufacturer = this.build();
    await ingredientManufacturer.validateOrThrow();
    return ingredientManufacturer;
  }
}
