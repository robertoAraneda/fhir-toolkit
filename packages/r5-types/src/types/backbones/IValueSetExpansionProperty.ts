import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ValueSetExpansionProperty Interface
 * 
 * Additional information supplied about each concept
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansionproperty.html
 */
export interface IValueSetExpansionProperty extends IBackboneElement {
  /**
   * Identifies the property on the concepts, and when referred to in operations
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Formal identifier for the property
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

}
