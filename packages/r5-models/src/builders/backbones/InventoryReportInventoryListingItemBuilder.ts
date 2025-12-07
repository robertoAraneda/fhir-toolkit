import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryReportInventoryListingItem } from '../../models/backbones/InventoryReportInventoryListingItem.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IInventoryReportInventoryListingItem,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryReportInventoryListingItemBuilder - Fluent builder for InventoryReportInventoryListingItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryReportInventoryListingItem = new InventoryReportInventoryListingItemBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class InventoryReportInventoryListingItemBuilder extends BackboneElementBuilder<InventoryReportInventoryListingItem, IInventoryReportInventoryListingItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * The inventory category or classification of the items being reported
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set quantity
   * The quantity of the item or items being reported
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set item
   * The code or reference to the item type
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryReportInventoryListingItem instance
   */
  build(): InventoryReportInventoryListingItem {
    return new InventoryReportInventoryListingItem(this.data);
  }

  /**
   * Build and validate the InventoryReportInventoryListingItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryReportInventoryListingItem> {
    const inventoryReportInventoryListingItem = this.build();
    await inventoryReportInventoryListingItem.validateOrThrow();
    return inventoryReportInventoryListingItem;
  }
}
