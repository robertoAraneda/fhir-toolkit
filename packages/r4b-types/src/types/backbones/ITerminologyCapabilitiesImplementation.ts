import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesImplementation Interface
 * 
 * If this describes a specific instance
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesimplementation.html
 */
export interface ITerminologyCapabilitiesImplementation extends IBackboneElement {
  /**
   * Describes this specific instance
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Base URL for the implementation
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
