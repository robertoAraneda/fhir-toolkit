import type { IBackboneElement } from '../../base/index.js';
import type { ITestReportSetupAction } from './ITestReportSetupAction.js';

/**
 * TestReportSetup Interface
 * 
 * The results of the series of required setup operations before the tests were executed
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportsetup.html
 */
export interface ITestReportSetup extends IBackboneElement {
  /**
   * A setup operation or assert that was executed
   */
  action: ITestReportSetupAction[];

}
