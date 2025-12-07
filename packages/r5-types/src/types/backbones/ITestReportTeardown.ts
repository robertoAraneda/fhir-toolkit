import type { IBackboneElement } from '../../base/index.js';
import type { ITestReportTeardownAction } from './ITestReportTeardownAction.js';

/**
 * TestReportTeardown Interface
 * 
 * The results of running the series of required clean up steps
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportteardown.html
 */
export interface ITestReportTeardown extends IBackboneElement {
  /**
   * One or more teardown operations performed
   */
  action: ITestReportTeardownAction[];

}
