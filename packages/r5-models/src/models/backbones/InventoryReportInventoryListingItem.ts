import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IInventoryReportInventoryListingItem,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryReportInventoryListingItem */
const INVENTORY_REPORT_INVENTORY_LISTING_ITEM_PROPERTIES = [
  'category',
  'quantity',
  'item',
] as const;

/**
 * InventoryReportInventoryListingItem - The item or items in this listing
 *
 * @see https://hl7.org/fhir/R5/inventoryreportinventorylistingitem.html
 *
 * @example
 * const inventoryReportInventoryListingItem = new InventoryReportInventoryListingItem({
 *   // ... properties
 * });
 */
export class InventoryReportInventoryListingItem extends BackboneElement implements IInventoryReportInventoryListingItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The inventory category or classification of the items being reported */
  category?: ICodeableConcept;

  /** The quantity of the item or items being reported */
  quantity: IQuantity;

  /** The code or reference to the item type */
  item: ICodeableReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryReportInventoryListingItem>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_REPORT_INVENTORY_LISTING_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryReportInventoryListingItem from a JSON object
   */
  static fromJSON(json: IInventoryReportInventoryListingItem): InventoryReportInventoryListingItem {
    return new InventoryReportInventoryListingItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryReportInventoryListingItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryReportInventoryListingItem>): InventoryReportInventoryListingItem {
    return new InventoryReportInventoryListingItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryReportInventoryListingItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryReportInventoryListingItem) => Partial<IInventoryReportInventoryListingItem>): InventoryReportInventoryListingItem {
    const currentData = this.toJSON();
    return new InventoryReportInventoryListingItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryReportInventoryListingItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryReportInventoryListingItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_REPORT_INVENTORY_LISTING_ITEM_PROPERTIES);
    return result as IInventoryReportInventoryListingItem;
  }

  /**
   * Create a deep clone of this InventoryReportInventoryListingItem
   */
  clone(): InventoryReportInventoryListingItem {
    return new InventoryReportInventoryListingItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryReportInventoryListingItem
   */
  toString(): string {
    const parts: string[] = ['InventoryReportInventoryListingItem'];
    return parts.join(', ');
  }
}
