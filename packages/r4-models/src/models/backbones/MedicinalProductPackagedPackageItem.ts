import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductPackagedPackageItem,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPackagedPackageItem */
const MEDICINAL_PRODUCT_PACKAGED_PACKAGE_ITEM_PROPERTIES = [
  'identifier',
  'type',
  'quantity',
  'material',
  'alternateMaterial',
  'device',
  'manufacturedItem',
  'packageItem',
  'physicalCharacteristics',
  'otherCharacteristics',
  'shelfLifeStorage',
  'manufacturer',
] as const;

/**
 * MedicinalProductPackagedPackageItem - A packaging item, as a contained for medicine, possibly with other packaging items within
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackagedpackageitem.html
 *
 * @example
 * const medicinalProductPackagedPackageItem = new MedicinalProductPackagedPackageItem({
 *   // ... properties
 * });
 */
export class MedicinalProductPackagedPackageItem extends BackboneElement implements IMedicinalProductPackagedPackageItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Including possibly Data Carrier Identifier */
  identifier?: IIdentifier[];

  /** The physical type of the container of the medicine */
  type: ICodeableConcept;

  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 */
  quantity: IQuantity;

  /** Material type of the package item */
  material?: ICodeableConcept[];

  /** A possible alternate material for the packaging */
  alternateMaterial?: ICodeableConcept[];

  /** A device accompanying a medicinal product */
  device?: IReference<'DeviceDefinition'>[];

  /** The manufactured item as contained in the packaged medicinal product */
  manufacturedItem?: IReference<'MedicinalProductManufactured'>[];

  /** Allows containers within containers */
  packageItem?: IMedicinalProductPackagedPackageItem[];

  /** Dimensions, color etc. */
  physicalCharacteristics?: IProdCharacteristic;

  /** Other codeable characteristics */
  otherCharacteristics?: ICodeableConcept[];

  /** Shelf Life and storage information */
  shelfLifeStorage?: IProductShelfLife[];

  /** Manufacturer of this Package Item */
  manufacturer?: IReference<'Organization'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPackagedPackageItem>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PACKAGED_PACKAGE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPackagedPackageItem from a JSON object
   */
  static fromJSON(json: IMedicinalProductPackagedPackageItem): MedicinalProductPackagedPackageItem {
    return new MedicinalProductPackagedPackageItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPackagedPackageItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPackagedPackageItem>): MedicinalProductPackagedPackageItem {
    return new MedicinalProductPackagedPackageItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPackagedPackageItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPackagedPackageItem) => Partial<IMedicinalProductPackagedPackageItem>): MedicinalProductPackagedPackageItem {
    const currentData = this.toJSON();
    return new MedicinalProductPackagedPackageItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPackagedPackageItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPackagedPackageItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PACKAGED_PACKAGE_ITEM_PROPERTIES);
    return result as IMedicinalProductPackagedPackageItem;
  }

  /**
   * Create a deep clone of this MedicinalProductPackagedPackageItem
   */
  clone(): MedicinalProductPackagedPackageItem {
    return new MedicinalProductPackagedPackageItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPackagedPackageItem
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPackagedPackageItem'];
    return parts.join(', ');
  }
}
