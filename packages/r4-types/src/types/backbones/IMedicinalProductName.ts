import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IMedicinalProductNameCountryLanguage } from './IMedicinalProductNameCountryLanguage.js';
import type { IMedicinalProductNameNamePart } from './IMedicinalProductNameNamePart.js';

/**
 * MedicinalProductName Interface
 * 
 * The product's name, including full name and possibly coded parts
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductname.html
 */
export interface IMedicinalProductName extends IBackboneElement {
  /**
   * The full product name
   */
  productName: string;
  /**
   * Extension for productName
   */
  _productName?: IElement;

  /**
   * Coding words or phrases of the name
   */
  namePart?: IMedicinalProductNameNamePart[];

  /**
   * Country where the name applies
   */
  countryLanguage?: IMedicinalProductNameCountryLanguage[];

}
