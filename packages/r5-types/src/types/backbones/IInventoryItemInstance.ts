import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * InventoryItemInstance Interface
 * 
 * Instances or occurrences of the product
 * 
 *
 * @see https://hl7.org/fhir/R5/inventoryiteminstance.html
 */
export interface IInventoryItemInstance extends IBackboneElement {
  /**
   * The identifier for the physical instance, typically a serial number
   */
  identifier?: IIdentifier[];

  /**
   * The lot or batch number of the item
   */
  lotNumber?: string;
  /**
   * Extension for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * The expiry date or date and time for the product
   */
  expiry?: string;
  /**
   * Extension for expiry
   */
  _expiry?: IElement;

  /**
   * The subject that the item is associated with
   */
  subject?: IReference<'Patient' | 'Organization'>;

  /**
   * The location that the item is associated with
   */
  location?: IReference<'Location'>;

}
