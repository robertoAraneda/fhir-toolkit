import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITestPlanTestCaseTestRunScript } from './ITestPlanTestCaseTestRunScript.js';

/**
 * TestPlanTestCaseTestRun Interface
 * 
 * The actual test to be executed
 * 
 *
 * @see https://hl7.org/fhir/R4/testplantestcasetestrun.html
 */
export interface ITestPlanTestCaseTestRun extends IBackboneElement {
  /**
   * The narrative description of the tests
   */
  narrative?: string;
  /**
   * Extension for narrative
   */
  _narrative?: IElement;

  /**
   * The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
   */
  script?: ITestPlanTestCaseTestRunScript;

}
