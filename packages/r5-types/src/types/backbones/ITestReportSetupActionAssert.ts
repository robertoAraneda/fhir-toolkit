import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITestReportSetupActionAssertRequirement } from './ITestReportSetupActionAssertRequirement.js';
import type { TestReportActionResultType } from '../../valuesets/index.js';

/**
 * TestReportSetupActionAssert Interface
 * 
 * The assertion to perform
 * 
 *
 * @see https://hl7.org/fhir/R5/testreportsetupactionassert.html
 */
export interface ITestReportSetupActionAssert extends IBackboneElement {
  /**
   * pass | skip | fail | warning | error
   */
  result: TestReportActionResultType;
  /**
   * Extension for result
   */
  _result?: IElement;

  /**
   * A message associated with the result
   */
  message?: string;
  /**
   * Extension for message
   */
  _message?: IElement;

  /**
   * A link to further details on the result
   */
  detail?: string;
  /**
   * Extension for detail
   */
  _detail?: IElement;

  /**
   * Links or references to the testing requirements
   */
  requirement?: ITestReportSetupActionAssertRequirement[];

}
