import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * TestPlanTestCaseTestRunScript Interface
 * 
 * The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
 * 
 *
 * @see https://hl7.org/fhir/R5/testplantestcasetestrunscript.html
 */
export interface ITestPlanTestCaseTestRunScript extends IBackboneElement {
  /**
   * The language for the test cases e.g. 'gherkin', 'testscript'
   */
  language?: ICodeableConcept;

  /**
   * The actual content of the cases - references to TestScripts or externally defined content
   */
  sourceString?: string;
  /**
   * Extension for sourceString
   */
  _sourceString?: IElement;

  /**
   * The actual content of the cases - references to TestScripts or externally defined content
   */
  sourceReference?: IReference;

}
