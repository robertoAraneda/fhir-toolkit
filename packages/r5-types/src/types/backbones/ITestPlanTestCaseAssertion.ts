import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * TestPlanTestCaseAssertion Interface
 * 
 * Test assertions or expectations
 * 
 *
 * @see https://hl7.org/fhir/R4/testplantestcaseassertion.html
 */
export interface ITestPlanTestCaseAssertion extends IBackboneElement {
  /**
   * Assertion type - for example 'informative' or 'required' 
   */
  type?: ICodeableConcept[];

  /**
   * The focus or object of the assertion
   */
  object?: ICodeableReference[];

  /**
   * The actual result assertion
   */
  result?: ICodeableReference[];

}
