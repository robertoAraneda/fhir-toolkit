import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackage } from '../../models/backbones/PackagedProductDefinitionPackage.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPackagedProductDefinitionPackage,
  IPackagedProductDefinitionPackageContainedItem,
  IPackagedProductDefinitionPackageProperty,
  IPackagedProductDefinitionPackageShelfLifeStorage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * PackagedProductDefinitionPackageBuilder - Fluent builder for PackagedProductDefinitionPackage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackage = new PackagedProductDefinitionPackageBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PackagedProductDefinitionPackageBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackage, IPackagedProductDefinitionPackage> {
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
  addShelfLifeStorage(shelfLifeStorage: IPackagedProductDefinitionPackageShelfLifeStorage): this {
    return this.addToArray('shelfLifeStorage', shelfLifeStorage);
  }

  /**
   * Add manufacturer
   * Manufacturer of this package Item (multiple means these are all possible manufacturers)
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add property
   * General characteristics of this item
   */
  addProperty(property: IPackagedProductDefinitionPackageProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add containedItem
   * The item(s) within the packaging
   */
  addContainedItem(containedItem: IPackagedProductDefinitionPackageContainedItem): this {
    return this.addToArray('containedItem', containedItem);
  }

  /**
   * Add package
   * Allows containers (and parts of containers) within containers, still a single packaged product
   */
  addPackage(_package: IPackagedProductDefinitionPackage): this {
    return this.addToArray('package', _package);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackage instance
   */
  build(): PackagedProductDefinitionPackage {
    return new PackagedProductDefinitionPackage(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackage> {
    const packagedProductDefinitionPackage = this.build();
    await packagedProductDefinitionPackage.validateOrThrow();
    return packagedProductDefinitionPackage;
  }
}
