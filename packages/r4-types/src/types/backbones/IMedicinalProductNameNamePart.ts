import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * MedicinalProductNameNamePart Interface
 * 
 * Coding words or phrases of the name
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductnamenamepart.html
 */
export interface IMedicinalProductNameNamePart extends IBackboneElement {
  /**
   * A fragment of a product name
   */
  part: string;
  /**
   * Extension for part
   */
  _part?: IElement;

  /**
   * Idenifying type for this part of the name (e.g. strength part)
   */
  type: ICoding;

}
