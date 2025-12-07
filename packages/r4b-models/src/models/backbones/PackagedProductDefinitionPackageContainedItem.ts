import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IPackagedProductDefinitionPackageContainedItem,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinitionPackageContainedItem */
const PACKAGED_PRODUCT_DEFINITION_PACKAGE_CONTAINED_ITEM_PROPERTIES = [
  'item',
  'amount',
] as const;

/**
 * PackagedProductDefinitionPackageContainedItem - The item(s) within the packaging
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackagecontaineditem.html
 *
 * @example
 * const packagedProductDefinitionPackageContainedItem = new PackagedProductDefinitionPackageContainedItem({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackageContainedItem extends BackboneElement implements IPackagedProductDefinitionPackageContainedItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package */
  item: ICodeableReference;

  /** The number of this type of item within this packaging */
  amount?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionPackageContainedItem>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGE_CONTAINED_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackageContainedItem from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackageContainedItem): PackagedProductDefinitionPackageContainedItem {
    return new PackagedProductDefinitionPackageContainedItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackageContainedItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackageContainedItem>): PackagedProductDefinitionPackageContainedItem {
    return new PackagedProductDefinitionPackageContainedItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackageContainedItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackageContainedItem) => Partial<IPackagedProductDefinitionPackageContainedItem>): PackagedProductDefinitionPackageContainedItem {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackageContainedItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackageContainedItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackageContainedItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGE_CONTAINED_ITEM_PROPERTIES);
    return result as IPackagedProductDefinitionPackageContainedItem;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackageContainedItem
   */
  clone(): PackagedProductDefinitionPackageContainedItem {
    return new PackagedProductDefinitionPackageContainedItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackageContainedItem
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackageContainedItem'];
    return parts.join(', ');
  }
}
