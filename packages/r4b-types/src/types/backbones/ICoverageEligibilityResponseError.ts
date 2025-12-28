import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * CoverageEligibilityResponseError Interface
 * 
 * Processing errors
 * 
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityresponseerror.html
 */
export interface ICoverageEligibilityResponseError extends IBackboneElement {
  /**
   * Error code detailing processing issues
   */
  code: ICodeableConcept;

}
