import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesExpansionParameter Interface
 * 
 * Supported expansion parameter
 * 
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiesexpansionparameter.html
 */
export interface ITerminologyCapabilitiesExpansionParameter extends IBackboneElement {
  /**
   * Expansion Parameter name
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Description of support for parameter
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
