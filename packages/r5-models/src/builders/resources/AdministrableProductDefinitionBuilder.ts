import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AdministrableProductDefinition } from '../../models/resources/AdministrableProductDefinition.js';
import type {
  IAdministrableProductDefinition,
  IAdministrableProductDefinitionProperty,
  IAdministrableProductDefinitionRouteOfAdministration,
  ICodeableConcept,
  IIdentifier,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * AdministrableProductDefinitionBuilder - Fluent builder for AdministrableProductDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const administrableProductDefinition = new AdministrableProductDefinitionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AdministrableProductDefinitionBuilder extends DomainResourceBuilder<AdministrableProductDefinition, IAdministrableProductDefinition> {
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
   * Set administrableDoseForm
   * The dose form of the final product after necessary reconstitution or processing
   */
  setAdministrableDoseForm(administrableDoseForm: ICodeableConcept): this {
    this.data.administrableDoseForm = administrableDoseForm;
    return this;
  }

  /**
   * Set unitOfPresentation
   * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff'
   */
  setUnitOfPresentation(unitOfPresentation: ICodeableConcept): this {
    this.data.unitOfPresentation = unitOfPresentation;
    return this;
  }

  /**
   * Set device
   * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product
   */
  setDevice(device: IReference<'DeviceDefinition'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set description
   * A general description of the product, when in its final form, suitable for administration e.g. effervescent blue liquid, to be swallowed
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier for the administrable product
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add formOf
   * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product
   */
  addFormOf(formOf: IReference<'MedicinalProductDefinition'>): this {
    return this.addToArray('formOf', formOf);
  }

  /**
   * Add producedFrom
   * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form
   */
  addProducedFrom(producedFrom: IReference<'ManufacturedItemDefinition'>): this {
    return this.addToArray('producedFrom', producedFrom);
  }

  /**
   * Add ingredient
   * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource
   */
  addIngredient(ingredient: ICodeableConcept): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add property
   * Characteristics e.g. a product's onset of action
   */
  addProperty(property: IAdministrableProductDefinitionProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add routeOfAdministration
   * The path by which the product is taken into or makes contact with the body
   */
  addRouteOfAdministration(routeOfAdministration: IAdministrableProductDefinitionRouteOfAdministration): this {
    return this.addToArray('routeOfAdministration', routeOfAdministration);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdministrableProductDefinition instance
   */
  build(): AdministrableProductDefinition {
    return new AdministrableProductDefinition(this.data);
  }

  /**
   * Build and validate the AdministrableProductDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdministrableProductDefinition> {
    const administrableProductDefinition = this.build();
    await administrableProductDefinition.validateOrThrow();
    return administrableProductDefinition;
  }
}
