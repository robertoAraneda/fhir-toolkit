import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptSetupActionOperation } from './ITestScriptSetupActionOperation.js';

/**
 * TestScriptTeardownAction Interface
 * 
 * One or more teardown operations to perform
 * 
 *
 * @see https://hl7.org/fhir/R4/testscriptteardownaction.html
 */
export interface ITestScriptTeardownAction extends IBackboneElement {
  /**
   * The teardown operation to perform
   */
  operation: ITestScriptSetupActionOperation;

}
