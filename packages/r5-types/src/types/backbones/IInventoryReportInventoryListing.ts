import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IInventoryReportInventoryListingItem } from './IInventoryReportInventoryListingItem.js';

/**
 * InventoryReportInventoryListing Interface
 * 
 * An inventory listing section (grouped by any of the attributes)
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryreportinventorylisting.html
 */
export interface IInventoryReportInventoryListing extends IBackboneElement {
  /**
   * Location of the inventory items
   */
  location?: IReference<'Location'>;

  /**
   * The status of the items that are being reported
   */
  itemStatus?: ICodeableConcept;

  /**
   * The date and time when the items were counted
   */
  countingDateTime?: string;
  /**
   * Extension for countingDateTime
   */
  _countingDateTime?: IElement;

  /**
   * The item or items in this listing
   */
  item?: IInventoryReportInventoryListingItem[];

}
