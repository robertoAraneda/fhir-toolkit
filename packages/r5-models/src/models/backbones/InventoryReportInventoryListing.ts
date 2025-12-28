import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IInventoryReportInventoryListing,
  IInventoryReportInventoryListingItem,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryReportInventoryListing */
const INVENTORY_REPORT_INVENTORY_LISTING_PROPERTIES = [
  'location',
  'itemStatus',
  'countingDateTime',
  '_countingDateTime',
  'item',
] as const;

/**
 * InventoryReportInventoryListing - An inventory listing section (grouped by any of the attributes)
 *
 * @see https://hl7.org/fhir/R5/inventoryreportinventorylisting.html
 *
 * @example
 * const inventoryReportInventoryListing = new InventoryReportInventoryListing({
 *   // ... properties
 * });
 */
export class InventoryReportInventoryListing extends BackboneElement implements IInventoryReportInventoryListing {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location of the inventory items */
  location?: IReference<'Location'>;

  /** The status of the items that are being reported */
  itemStatus?: ICodeableConcept;

  /** The date and time when the items were counted */
  countingDateTime?: string;

  /** Extension for countingDateTime */
  _countingDateTime?: IElement;

  /** The item or items in this listing */
  item?: IInventoryReportInventoryListingItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryReportInventoryListing>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_REPORT_INVENTORY_LISTING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryReportInventoryListing from a JSON object
   */
  static fromJSON(json: IInventoryReportInventoryListing): InventoryReportInventoryListing {
    return new InventoryReportInventoryListing(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryReportInventoryListing with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryReportInventoryListing>): InventoryReportInventoryListing {
    return new InventoryReportInventoryListing({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryReportInventoryListing by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryReportInventoryListing) => Partial<IInventoryReportInventoryListing>): InventoryReportInventoryListing {
    const currentData = this.toJSON();
    return new InventoryReportInventoryListing({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryReportInventoryListing)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryReportInventoryListing {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_REPORT_INVENTORY_LISTING_PROPERTIES);
    return result as IInventoryReportInventoryListing;
  }

  /**
   * Create a deep clone of this InventoryReportInventoryListing
   */
  clone(): InventoryReportInventoryListing {
    return new InventoryReportInventoryListing(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryReportInventoryListing
   */
  toString(): string {
    const parts: string[] = ['InventoryReportInventoryListing'];
    return parts.join(', ');
  }
}
