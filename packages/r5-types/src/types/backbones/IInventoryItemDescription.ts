import type { IBackboneElement, IElement } from '../../base/index.js';
import type { CommonLanguagesType } from '../../valuesets/index.js';

/**
 * InventoryItemDescription Interface
 * 
 * Descriptive characteristics of the item
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryitemdescription.html
 */
export interface IInventoryItemDescription extends IBackboneElement {
  /**
   * The language that is used in the item description
   */
  language?: CommonLanguagesType;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Textual description of the item
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
