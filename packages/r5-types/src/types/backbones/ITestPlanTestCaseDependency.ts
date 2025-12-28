import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * TestPlanTestCaseDependency Interface
 * 
 * Required criteria to execute the test case
 * 
 *
 * @see https://hl7.org/fhir/R5/testplantestcasedependency.html
 */
export interface ITestPlanTestCaseDependency extends IBackboneElement {
  /**
   * Description of the criteria
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Link to predecessor test plans
   */
  predecessor?: IReference;

}
