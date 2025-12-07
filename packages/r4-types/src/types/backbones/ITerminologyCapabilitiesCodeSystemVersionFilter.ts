import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesCodeSystemVersionFilter Interface
 * 
 * Filter Properties supported
 * 
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiescodesystemversionfilter.html
 */
export interface ITerminologyCapabilitiesCodeSystemVersionFilter extends IBackboneElement {
  /**
   * Code of the property supported
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Operations supported for the property
   */
  op: string[];
  /**
   * Extension for op
   */
  _op?: IElement;

}
