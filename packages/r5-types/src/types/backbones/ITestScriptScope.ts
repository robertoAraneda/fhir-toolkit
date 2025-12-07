import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * TestScriptScope Interface
 * 
 * Indication of the artifact(s) that are tested by this test case
 * 
 *
 * @see https://hl7.org/fhir/R4/testscriptscope.html
 */
export interface ITestScriptScope extends IBackboneElement {
  /**
   * The specific conformance artifact being tested
   */
  artifact: string;
  /**
   * Extension for artifact
   */
  _artifact?: IElement;

  /**
   * required | optional | strict
   */
  conformance?: ICodeableConcept;

  /**
   * unit | integration | production
   */
  phase?: ICodeableConcept;

}
