import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackaging } from '../../models/backbones/PackagedProductDefinitionPackaging.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPackagedProductDefinitionPackaging,
  IPackagedProductDefinitionPackagingContainedItem,
  IPackagedProductDefinitionPackagingProperty,
  IProductShelfLife,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PackagedProductDefinitionPackagingBuilder - Fluent builder for PackagedProductDefinitionPackaging backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackaging = new PackagedProductDefinitionPackagingBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PackagedProductDefinitionPackagingBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackaging, IPackagedProductDefinitionPackaging> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The physical type of the container of the items
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set componentPart
   * Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial)
   */
  setComponentPart(componentPart: boolean): this {
    this.data.componentPart = componentPart;
    return this;
  }

  /**
   * Set quantity
   * The quantity of this level of packaging in the package that contains it (with the outermost level being 1)
   */
  setQuantity(quantity: number): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add material
   * Material type of the package item
   */
  addMaterial(material: ICodeableConcept): this {
    return this.addToArray('material', material);
  }

  /**
   * Add alternateMaterial
   * A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material
   */
  addAlternateMaterial(alternateMaterial: ICodeableConcept): this {
    return this.addToArray('alternateMaterial', alternateMaterial);
  }

  /**
   * Add shelfLifeStorage
   * Shelf Life and storage information
   */
  addShelfLifeStorage(shelfLifeStorage: IProductShelfLife): this {
    return this.addToArray('shelfLifeStorage', shelfLifeStorage);
  }

  /**
   * Add manufacturer
   * Manufacturer of this packaging item (multiple means these are all potential manufacturers)
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add property
   * General characteristics of this item
   */
  addProperty(property: IPackagedProductDefinitionPackagingProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add containedItem
   * The item(s) within the packaging
   */
  addContainedItem(containedItem: IPackagedProductDefinitionPackagingContainedItem): this {
    return this.addToArray('containedItem', containedItem);
  }

  /**
   * Add packaging
   * Allows containers (and parts of containers) within containers, still as a part of single packaged product
   */
  addPackaging(packaging: IPackagedProductDefinitionPackaging): this {
    return this.addToArray('packaging', packaging);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackaging instance
   */
  build(): PackagedProductDefinitionPackaging {
    return new PackagedProductDefinitionPackaging(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackaging instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackaging> {
    const packagedProductDefinitionPackaging = this.build();
    await packagedProductDefinitionPackaging.validateOrThrow();
    return packagedProductDefinitionPackaging;
  }
}
