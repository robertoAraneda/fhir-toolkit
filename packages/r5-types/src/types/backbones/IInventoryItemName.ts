import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { CommonLanguagesType } from '../../valuesets/index.js';

/**
 * InventoryItemName Interface
 * 
 * The item name(s) - the brand name, or common name, functional name, generic name or others
 * 
 *
 * @see https://hl7.org/fhir/R5/inventoryitemname.html
 */
export interface IInventoryItemName extends IBackboneElement {
  /**
   * The type of name e.g. 'brand-name', 'functional-name', 'common-name'
   */
  nameType: ICoding;

  /**
   * The language used to express the item name
   */
  language: CommonLanguagesType;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * The name or designation of the item
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

}
