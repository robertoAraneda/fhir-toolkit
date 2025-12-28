import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptSetupAction } from './ITestScriptSetupAction.js';

/**
 * TestScriptSetup Interface
 * 
 * A series of required setup operations before tests are executed
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptsetup.html
 */
export interface ITestScriptSetup extends IBackboneElement {
  /**
   * A setup operation or assert to perform
   */
  action: ITestScriptSetupAction[];

}
