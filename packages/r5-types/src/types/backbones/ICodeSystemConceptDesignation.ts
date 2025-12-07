import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * CodeSystemConceptDesignation Interface
 * 
 * Additional representations for the concept
 * 
 *
 * @see https://hl7.org/fhir/R4/codesystemconceptdesignation.html
 */
export interface ICodeSystemConceptDesignation extends IBackboneElement {
  /**
   * Human language of the designation
   */
  language?: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Details how this designation would be used
   */
  use?: ICoding;

  /**
   * Additional ways how this designation would be used
   */
  additionalUse?: ICoding[];

  /**
   * The text value for this designation
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
