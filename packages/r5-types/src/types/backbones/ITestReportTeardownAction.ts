import type { IBackboneElement } from '../../base/index.js';
import type { ITestReportSetupActionOperation } from './ITestReportSetupActionOperation.js';

/**
 * TestReportTeardownAction Interface
 * 
 * One or more teardown operations performed
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportteardownaction.html
 */
export interface ITestReportTeardownAction extends IBackboneElement {
  /**
   * The teardown operation performed
   */
  operation: ITestReportSetupActionOperation;

}
