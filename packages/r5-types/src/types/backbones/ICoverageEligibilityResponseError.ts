import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CoverageEligibilityResponseError Interface
 * 
 * Processing errors
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponseerror.html
 */
export interface ICoverageEligibilityResponseError extends IBackboneElement {
  /**
   * Error code detailing processing issues
   */
  code: ICodeableConcept;

  /**
   * FHIRPath of element(s) related to issue
   */
  expression?: string[];
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
