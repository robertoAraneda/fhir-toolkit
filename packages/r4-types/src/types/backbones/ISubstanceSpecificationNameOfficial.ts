import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstanceSpecificationNameOfficial Interface
 * 
 * Details of the official nature of this name
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationnameofficial.html
 */
export interface ISubstanceSpecificationNameOfficial extends IBackboneElement {
  /**
   * Which authority uses this official name
   */
  authority?: ICodeableConcept;

  /**
   * The status of the official name
   */
  status?: ICodeableConcept;

  /**
   * Date of official name change
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

}
