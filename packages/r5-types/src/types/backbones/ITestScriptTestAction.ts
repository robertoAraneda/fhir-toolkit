import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptSetupActionAssert } from './ITestScriptSetupActionAssert.js';
import type { ITestScriptSetupActionOperation } from './ITestScriptSetupActionOperation.js';

/**
 * TestScriptTestAction Interface
 * 
 * A test operation or assert to perform
 * 
 *
 * @see https://hl7.org/fhir/R5/testscripttestaction.html
 */
export interface ITestScriptTestAction extends IBackboneElement {
  /**
   * The setup operation to perform
   */
  operation?: ITestScriptSetupActionOperation;

  /**
   * The setup assertion to perform
   */
  assert?: ITestScriptSetupActionAssert;

}
