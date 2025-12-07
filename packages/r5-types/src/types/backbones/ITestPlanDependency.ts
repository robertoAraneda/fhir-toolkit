import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * TestPlanDependency Interface
 * 
 * The required criteria to execute the test plan - e.g. preconditions, previous tests
 * 
 *
 * @see https://hl7.org/fhir/R4/testplandependency.html
 */
export interface ITestPlanDependency extends IBackboneElement {
  /**
   * Description of the dependency criterium
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
