import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductIngredient } from '../../models/resources/MedicinalProductIngredient.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductIngredient,
  IMedicinalProductIngredientSpecifiedSubstance,
  IMedicinalProductIngredientSubstance,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductIngredientBuilder - Fluent builder for MedicinalProductIngredient resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductIngredient = new MedicinalProductIngredientBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addManufacturer({ ... })
 *   .build();
 */
export class MedicinalProductIngredientBuilder extends DomainResourceBuilder<MedicinalProductIngredient, IMedicinalProductIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifier for the ingredient
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set role
   * Ingredient role e.g. Active ingredient, excipient
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set allergenicIndicator
   * If the ingredient is a known or suspected allergen
   */
  setAllergenicIndicator(allergenicIndicator: boolean): this {
    this.data.allergenicIndicator = allergenicIndicator;
    return this;
  }

  /**
   * Set substance
   * The ingredient substance
   */
  setSubstance(substance: IMedicinalProductIngredientSubstance): this {
    this.data.substance = substance;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add manufacturer
   * Manufacturer of this Ingredient
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add specifiedSubstance
   * A specified substance that comprises this ingredient
   */
  addSpecifiedSubstance(specifiedSubstance: IMedicinalProductIngredientSpecifiedSubstance): this {
    return this.addToArray('specifiedSubstance', specifiedSubstance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductIngredient instance
   */
  build(): MedicinalProductIngredient {
    return new MedicinalProductIngredient(this.data);
  }

  /**
   * Build and validate the MedicinalProductIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductIngredient> {
    const medicinalProductIngredient = this.build();
    await medicinalProductIngredient.validateOrThrow();
    return medicinalProductIngredient;
  }
}
