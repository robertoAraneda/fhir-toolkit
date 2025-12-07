import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductPackagedPackageItem } from '../../models/backbones/MedicinalProductPackagedPackageItem.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductPackagedPackageItem,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPackagedPackageItemBuilder - Fluent builder for MedicinalProductPackagedPackageItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPackagedPackageItem = new MedicinalProductPackagedPackageItemBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductPackagedPackageItemBuilder extends BackboneElementBuilder<MedicinalProductPackagedPackageItem, IMedicinalProductPackagedPackageItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The physical type of the container of the medicine
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set physicalCharacteristics
   * Dimensions, color etc.
   */
  setPhysicalCharacteristics(physicalCharacteristics: IProdCharacteristic): this {
    this.data.physicalCharacteristics = physicalCharacteristics;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Including possibly Data Carrier Identifier
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
   * A possible alternate material for the packaging
   */
  addAlternateMaterial(alternateMaterial: ICodeableConcept): this {
    return this.addToArray('alternateMaterial', alternateMaterial);
  }

  /**
   * Add device
   * A device accompanying a medicinal product
   */
  addDevice(device: IReference<'DeviceDefinition'>): this {
    return this.addToArray('device', device);
  }

  /**
   * Add manufacturedItem
   * The manufactured item as contained in the packaged medicinal product
   */
  addManufacturedItem(manufacturedItem: IReference<'MedicinalProductManufactured'>): this {
    return this.addToArray('manufacturedItem', manufacturedItem);
  }

  /**
   * Add packageItem
   * Allows containers within containers
   */
  addPackageItem(packageItem: IMedicinalProductPackagedPackageItem): this {
    return this.addToArray('packageItem', packageItem);
  }

  /**
   * Add otherCharacteristics
   * Other codeable characteristics
   */
  addOtherCharacteristics(otherCharacteristic: ICodeableConcept): this {
    return this.addToArray('otherCharacteristics', otherCharacteristic);
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
   * Manufacturer of this Package Item
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPackagedPackageItem instance
   */
  build(): MedicinalProductPackagedPackageItem {
    return new MedicinalProductPackagedPackageItem(this.data);
  }

  /**
   * Build and validate the MedicinalProductPackagedPackageItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPackagedPackageItem> {
    const medicinalProductPackagedPackageItem = this.build();
    await medicinalProductPackagedPackageItem.validateOrThrow();
    return medicinalProductPackagedPackageItem;
  }
}
