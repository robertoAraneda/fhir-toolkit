import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IssueSeverityType, IssueTypeType } from '../../valuesets/index.js';

/**
 * OperationOutcomeIssue Interface
 * 
 * A single issue associated with the action
 * 
 *
 * @see https://hl7.org/fhir/R4/operationoutcomeissue.html
 */
export interface IOperationOutcomeIssue extends IBackboneElement {
  /**
   * fatal | error | warning | information | success
   */
  severity: IssueSeverityType;
  /**
   * Extension for severity
   */
  _severity?: IElement;

  /**
   * Error or warning code
   */
  code: IssueTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Additional details about the error
   */
  details?: ICodeableConcept;

  /**
   * Additional diagnostic information about the issue
   */
  diagnostics?: string;
  /**
   * Extension for diagnostics
   */
  _diagnostics?: IElement;

  /**
   * Deprecated: Path of element(s) related to issue
   */
  location?: string[];
  /**
   * Extension for location
   */
  _location?: IElement;

  /**
   * FHIRPath of element(s) related to issue
   */
  expression?: string[];
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
