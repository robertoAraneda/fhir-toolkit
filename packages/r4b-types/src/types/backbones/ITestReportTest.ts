import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITestReportTestAction } from './ITestReportTestAction.js';

/**
 * TestReportTest Interface
 * 
 * A test executed from the test script
 * 
 *
 * @see https://hl7.org/fhir/R4B/testreporttest.html
 */
export interface ITestReportTest extends IBackboneElement {
  /**
   * Tracking/logging name of this test
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Tracking/reporting short description of the test
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * A test operation or assert that was performed
   */
  action: ITestReportTestAction[];

}
