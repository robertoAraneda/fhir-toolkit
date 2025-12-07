import type { IBackboneElement } from '../../base/index.js';
import type { ITestReportSetupActionAssert } from './ITestReportSetupActionAssert.js';
import type { ITestReportSetupActionOperation } from './ITestReportSetupActionOperation.js';

/**
 * TestReportSetupAction Interface
 * 
 * A setup operation or assert that was executed
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportsetupaction.html
 */
export interface ITestReportSetupAction extends IBackboneElement {
  /**
   * The operation to perform
   */
  operation?: ITestReportSetupActionOperation;

  /**
   * The assertion to perform
   */
  assert?: ITestReportSetupActionAssert;

}
