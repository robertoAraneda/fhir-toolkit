import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * ValueSetComposeIncludeConceptDesignation Interface
 * 
 * Additional representations for this concept
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludeconceptdesignation.html
 */
export interface IValueSetComposeIncludeConceptDesignation extends IBackboneElement {
  /**
   * Human language of the designation
   */
  language?: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Types of uses of designations
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
