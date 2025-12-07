import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesSoftware Interface
 * 
 * Software that is covered by this terminology capability statement
 * 
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiessoftware.html
 */
export interface ITerminologyCapabilitiesSoftware extends IBackboneElement {
  /**
   * A name the software is known by
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Version covered by this statement
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

}
