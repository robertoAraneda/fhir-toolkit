import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Ingredient } from '../../models/resources/Ingredient.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IIngredient,
  IIngredientManufacturer,
  IIngredientSubstance,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * IngredientBuilder - Fluent builder for Ingredient resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const ingredient = new IngredientBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addFor({ ... })
 *   .build();
 */
export class IngredientBuilder extends DomainResourceBuilder<Ingredient, IIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * An identifier or code by which the ingredient can be referenced
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set role
   * Purpose of the ingredient within the product, e.g. active, inactive
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set group
   * A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink
   */
  setGroup(group: ICodeableConcept): this {
    this.data.group = group;
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
   * Set comment
   * A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set substance
   * The substance that comprises this ingredient
   */
  setSubstance(substance: IIngredientSubstance): this {
    this.data.substance = substance;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add for
   * The product which this ingredient is a constituent part of
   */
  addFor(_for: IReference<'MedicinalProductDefinition' | 'AdministrableProductDefinition' | 'ManufacturedItemDefinition'>): this {
    return this.addToArray('for', _for);
  }

  /**
   * Add function
   * Precise action within the drug product, e.g. antioxidant, alkalizing agent
   */
  addFunction(_function: ICodeableConcept): this {
    return this.addToArray('function', _function);
  }

  /**
   * Add manufacturer
   * An organization that manufactures this ingredient
   */
  addManufacturer(manufacturer: IIngredientManufacturer): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Ingredient instance
   */
  build(): Ingredient {
    return new Ingredient(this.data);
  }

  /**
   * Build and validate the Ingredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Ingredient> {
    const ingredient = this.build();
    await ingredient.validateOrThrow();
    return ingredient;
  }
}
