import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstanceDefinitionNameOfficial Interface
 * 
 * Details of the official nature of this name
 * 
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionnameofficial.html
 */
export interface ISubstanceDefinitionNameOfficial extends IBackboneElement {
  /**
   * Which authority uses this official name
   */
  authority?: ICodeableConcept;

  /**
   * The status of the official name, for example 'draft', 'active'
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
