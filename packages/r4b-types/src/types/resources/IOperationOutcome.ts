import type { IDomainResource } from '../../base/index.js';
import type { IOperationOutcomeIssue } from '../backbones/IOperationOutcomeIssue.js';

/**
 * OperationOutcome Interface
 * 
 * A collection of error, warning, or information messages that result from a system action.
 * 
 *
 * @see https://hl7.org/fhir/R4/operationoutcome.html
 */
export interface IOperationOutcome extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'OperationOutcome';

  /**
   * A single issue associated with the action
   */
  issue: IOperationOutcomeIssue[];

}
