import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';

/**
 * TestPlanTestCaseTestData Interface
 * 
 * The test data used in the test case
 * 
 *
 * @see https://hl7.org/fhir/R4/testplantestcasetestdata.html
 */
export interface ITestPlanTestCaseTestData extends IBackboneElement {
  /**
   * The type of test data description, e.g. 'synthea'
   */
  type: ICoding;

  /**
   * The actual test resources when they exist
   */
  content?: IReference;

  /**
   * Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc
   */
  sourceString?: string;
  /**
   * Extension for sourceString
   */
  _sourceString?: IElement;

  /**
   * Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc
   */
  sourceReference?: IReference;

}
