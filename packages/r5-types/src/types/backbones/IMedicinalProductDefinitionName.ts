import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMedicinalProductDefinitionNamePart } from './IMedicinalProductDefinitionNamePart.js';
import type { IMedicinalProductDefinitionNameUsage } from './IMedicinalProductDefinitionNameUsage.js';

/**
 * MedicinalProductDefinitionName Interface
 * 
 * The product's name, including full name and possibly coded parts
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionname.html
 */
export interface IMedicinalProductDefinitionName extends IBackboneElement {
  /**
   * The full product name
   */
  productName: string;
  /**
   * Extension for productName
   */
  _productName?: IElement;

  /**
   * Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary
   */
  type?: ICodeableConcept;

  /**
   * Coding words or phrases of the name
   */
  part?: IMedicinalProductDefinitionNamePart[];

  /**
   * Country and jurisdiction where the name applies
   */
  usage?: IMedicinalProductDefinitionNameUsage[];

}
