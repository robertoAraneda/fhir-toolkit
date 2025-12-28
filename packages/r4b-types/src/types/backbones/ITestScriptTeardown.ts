import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptTeardownAction } from './ITestScriptTeardownAction.js';

/**
 * TestScriptTeardown Interface
 * 
 * A series of required clean up steps
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptteardown.html
 */
export interface ITestScriptTeardown extends IBackboneElement {
  /**
   * One or more teardown operations to perform
   */
  action: ITestScriptTeardownAction[];

}
