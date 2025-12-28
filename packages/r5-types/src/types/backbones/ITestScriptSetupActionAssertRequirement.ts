import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestScriptSetupActionAssertRequirement Interface
 * 
 * Links or references to the testing requirements
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptsetupactionassertrequirement.html
 */
export interface ITestScriptSetupActionAssertRequirement extends IBackboneElement {
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
