import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ManufacturedItemDefinition } from '../../models/resources/ManufacturedItemDefinition.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IManufacturedItemDefinition,
  IManufacturedItemDefinitionProperty,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ManufacturedItemDefinitionBuilder - Fluent builder for ManufacturedItemDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const manufacturedItemDefinition = new ManufacturedItemDefinitionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ManufacturedItemDefinitionBuilder extends DomainResourceBuilder<ManufacturedItemDefinition, IManufacturedItemDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set manufacturedDoseForm
   * Dose form as manufactured (before any necessary transformation)
   */
  setManufacturedDoseForm(manufacturedDoseForm: ICodeableConcept): this {
    this.data.manufacturedDoseForm = manufacturedDoseForm;
    return this;
  }

  /**
   * Set unitOfPresentation
   * The “real world” units in which the quantity of the item is described
   */
  setUnitOfPresentation(unitOfPresentation: ICodeableConcept): this {
    this.data.unitOfPresentation = unitOfPresentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add manufacturer
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add ingredient
   * The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource
   */
  addIngredient(ingredient: ICodeableConcept): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add property
   * General characteristics of this item
   */
  addProperty(property: IManufacturedItemDefinitionProperty): this {
    return this.addToArray('property', property);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ManufacturedItemDefinition instance
   */
  build(): ManufacturedItemDefinition {
    return new ManufacturedItemDefinition(this.data);
  }

  /**
   * Build and validate the ManufacturedItemDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ManufacturedItemDefinition> {
    const manufacturedItemDefinition = this.build();
    await manufacturedItemDefinition.validateOrThrow();
    return manufacturedItemDefinition;
  }
}
