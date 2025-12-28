import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IPackagedProductDefinitionPackagingContainedItem,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PackagedProductDefinitionPackagingContainedItem */
const PACKAGED_PRODUCT_DEFINITION_PACKAGING_CONTAINED_ITEM_PROPERTIES = [
  'item',
  'amount',
] as const;

/**
 * PackagedProductDefinitionPackagingContainedItem - The item(s) within the packaging
 *
 * @see https://hl7.org/fhir/R5/packagedproductdefinitionpackagingcontaineditem.html
 *
 * @example
 * const packagedProductDefinitionPackagingContainedItem = new PackagedProductDefinitionPackagingContainedItem({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackagingContainedItem extends BackboneElement implements IPackagedProductDefinitionPackagingContainedItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package */
  item: ICodeableReference;

  /** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition) */
  amount?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionPackagingContainedItem>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGING_CONTAINED_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackagingContainedItem from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackagingContainedItem): PackagedProductDefinitionPackagingContainedItem {
    return new PackagedProductDefinitionPackagingContainedItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackagingContainedItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackagingContainedItem>): PackagedProductDefinitionPackagingContainedItem {
    return new PackagedProductDefinitionPackagingContainedItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackagingContainedItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackagingContainedItem) => Partial<IPackagedProductDefinitionPackagingContainedItem>): PackagedProductDefinitionPackagingContainedItem {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackagingContainedItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackagingContainedItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackagingContainedItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGING_CONTAINED_ITEM_PROPERTIES);
    return result as IPackagedProductDefinitionPackagingContainedItem;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackagingContainedItem
   */
  clone(): PackagedProductDefinitionPackagingContainedItem {
    return new PackagedProductDefinitionPackagingContainedItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackagingContainedItem
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackagingContainedItem'];
    return parts.join(', ');
  }
}
