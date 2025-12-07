import type { IBackboneElement, IElement } from '../../base/index.js';
import type { TestReportActionResultType } from '../../valuesets/index.js';

/**
 * TestReportSetupActionOperation Interface
 * 
 * The operation to perform
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportsetupactionoperation.html
 */
export interface ITestReportSetupActionOperation extends IBackboneElement {
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

}
