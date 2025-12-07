import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ManufacturedItemDefinition } from '../../models/resources/ManufacturedItemDefinition.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IManufacturedItemDefinition,
  IManufacturedItemDefinitionComponent,
  IManufacturedItemDefinitionProperty,
  IMarketingStatus,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

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
   * Set name
   * A descriptive name applied to this item
   */
  setName(name: string): this {
    this.data.name = name;
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
   * The “real-world” units in which the quantity of the item is described
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
   * Manufacturer of the item, one of several possible
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add marketingStatus
   * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated
   */
  addMarketingStatus(marketingStatu: IMarketingStatus): this {
    return this.addToArray('marketingStatus', marketingStatu);
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

  /**
   * Add component
   * Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
   */
  addComponent(component: IManufacturedItemDefinitionComponent): this {
    return this.addToArray('component', component);
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
