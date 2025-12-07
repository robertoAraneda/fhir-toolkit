import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryReportInventoryListing } from '../../models/backbones/InventoryReportInventoryListing.js';
import type {
  ICodeableConcept,
  IInventoryReportInventoryListing,
  IInventoryReportInventoryListingItem,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryReportInventoryListingBuilder - Fluent builder for InventoryReportInventoryListing backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryReportInventoryListing = new InventoryReportInventoryListingBuilder()
 *   .setLocation(value)
 *   .addItem({ ... })
 *   .build();
 */
export class InventoryReportInventoryListingBuilder extends BackboneElementBuilder<InventoryReportInventoryListing, IInventoryReportInventoryListing> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set location
   * Location of the inventory items
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set itemStatus
   * The status of the items that are being reported
   */
  setItemStatus(itemStatus: ICodeableConcept): this {
    this.data.itemStatus = itemStatus;
    return this;
  }

  /**
   * Set countingDateTime
   * The date and time when the items were counted
   */
  setCountingDateTime(countingDateTime: string): this {
    this.data.countingDateTime = countingDateTime;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add item
   * The item or items in this listing
   */
  addItem(item: IInventoryReportInventoryListingItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryReportInventoryListing instance
   */
  build(): InventoryReportInventoryListing {
    return new InventoryReportInventoryListing(this.data);
  }

  /**
   * Build and validate the InventoryReportInventoryListing instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryReportInventoryListing> {
    const inventoryReportInventoryListing = this.build();
    await inventoryReportInventoryListing.validateOrThrow();
    return inventoryReportInventoryListing;
  }
}
