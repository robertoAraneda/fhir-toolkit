import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ITestPlanTestCaseAssertion } from './ITestPlanTestCaseAssertion.js';
import type { ITestPlanTestCaseDependency } from './ITestPlanTestCaseDependency.js';
import type { ITestPlanTestCaseTestData } from './ITestPlanTestCaseTestData.js';
import type { ITestPlanTestCaseTestRun } from './ITestPlanTestCaseTestRun.js';

/**
 * TestPlanTestCase Interface
 * 
 * The test cases that constitute this plan
 * 
 *
 * @see https://hl7.org/fhir/R4/testplantestcase.html
 */
export interface ITestPlanTestCase extends IBackboneElement {
  /**
   * Sequence of test case in the test plan
   */
  sequence?: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * The scope or artifact covered by the case
   */
  scope?: IReference[];

  /**
   * Required criteria to execute the test case
   */
  dependency?: ITestPlanTestCaseDependency[];

  /**
   * The actual test to be executed
   */
  testRun?: ITestPlanTestCaseTestRun[];

  /**
   * The test data used in the test case
   */
  testData?: ITestPlanTestCaseTestData[];

  /**
   * Test assertions or expectations
   */
  assertion?: ITestPlanTestCaseAssertion[];

}
