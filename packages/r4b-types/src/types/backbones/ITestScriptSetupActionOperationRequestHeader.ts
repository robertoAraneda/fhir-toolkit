import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestScriptSetupActionOperationRequestHeader Interface
 * 
 * Each operation can have one or more header elements
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptsetupactionoperationrequestheader.html
 */
export interface ITestScriptSetupActionOperationRequestHeader extends IBackboneElement {
  /**
   * HTTP header field name
   */
  field: string;
  /**
   * Extension for field
   */
  _field?: IElement;

  /**
   * HTTP headerfield value
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
