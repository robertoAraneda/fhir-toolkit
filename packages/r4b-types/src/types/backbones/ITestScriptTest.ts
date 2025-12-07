import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITestScriptTestAction } from './ITestScriptTestAction.js';

/**
 * TestScriptTest Interface
 * 
 * A test in this script
 * 
 *
 * @see https://hl7.org/fhir/R4/testscripttest.html
 */
export interface ITestScriptTest extends IBackboneElement {
  /**
   * Tracking/logging name of this test
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Tracking/reporting short description of the test
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * A test operation or assert to perform
   */
  action: ITestScriptTestAction[];

}
