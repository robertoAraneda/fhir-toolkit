import type { IBackboneElement } from '../../base/index.js';
import type { ITestReportSetupActionAssert } from './ITestReportSetupActionAssert.js';
import type { ITestReportSetupActionOperation } from './ITestReportSetupActionOperation.js';

/**
 * TestReportTestAction Interface
 * 
 * A test operation or assert that was performed
 * 
 *
 * @see https://hl7.org/fhir/R4B/testreporttestaction.html
 */
export interface ITestReportTestAction extends IBackboneElement {
  /**
   * The operation performed
   */
  operation?: ITestReportSetupActionOperation;

  /**
   * The assertion performed
   */
  assert?: ITestReportSetupActionAssert;

}
