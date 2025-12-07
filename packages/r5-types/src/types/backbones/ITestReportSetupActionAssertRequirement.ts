import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestReportSetupActionAssertRequirement Interface
 * 
 * Links or references to the testing requirements
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportsetupactionassertrequirement.html
 */
export interface ITestReportSetupActionAssertRequirement extends IBackboneElement {
  /**
   * Link or reference to the testing requirement
   */
  linkUri?: string;
  /**
   * Extension for linkUri
   */
  _linkUri?: IElement;

  /**
   * Link or reference to the testing requirement
   */
  linkCanonical?: string;
  /**
   * Extension for linkCanonical
   */
  _linkCanonical?: IElement;

}
