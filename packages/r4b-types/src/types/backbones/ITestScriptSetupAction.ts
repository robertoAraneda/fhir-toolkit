import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptSetupActionAssert } from './ITestScriptSetupActionAssert.js';
import type { ITestScriptSetupActionOperation } from './ITestScriptSetupActionOperation.js';

/**
 * TestScriptSetupAction Interface
 * 
 * A setup operation or assert to perform
 * 
 *
 * @see https://hl7.org/fhir/R4/testscriptsetupaction.html
 */
export interface ITestScriptSetupAction extends IBackboneElement {
  /**
   * The setup operation to perform
   */
  operation?: ITestScriptSetupActionOperation;

  /**
   * The assertion to perform
   */
  assert?: ITestScriptSetupActionAssert;

}
