import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MedicinalProductDefinitionNameNamePart Interface
 * 
 * Coding words or phrases of the name
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicinalproductdefinitionnamenamepart.html
 */
export interface IMedicinalProductDefinitionNameNamePart extends IBackboneElement {
  /**
   * A fragment of a product name
   */
  part: string;
  /**
   * Extension for part
   */
  _part?: IElement;

  /**
   * Identifying type for this part of the name (e.g. strength part)
   */
  type: ICodeableConcept;

}
