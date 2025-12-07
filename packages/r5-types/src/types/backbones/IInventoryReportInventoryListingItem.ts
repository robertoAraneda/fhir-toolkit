import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * InventoryReportInventoryListingItem Interface
 * 
 * The item or items in this listing
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryreportinventorylistingitem.html
 */
export interface IInventoryReportInventoryListingItem extends IBackboneElement {
  /**
   * The inventory category or classification of the items being reported
   */
  category?: ICodeableConcept;

  /**
   * The quantity of the item or items being reported
   */
  quantity: IQuantity;

  /**
   * The code or reference to the item type
   */
  item: ICodeableReference;

}
