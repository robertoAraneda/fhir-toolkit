import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';

/**
 * RequestOrchestrationActionOutput Interface
 * 
 * Output data definition
 * 
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationactionoutput.html
 */
export interface IRequestOrchestrationActionOutput extends IBackboneElement {
  /**
   * User-visible title
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * What data is provided
   */
  requirement?: IDataRequirement;

  /**
   * What data is provided
   */
  relatedData?: string;
  /**
   * Extension for relatedData
   */
  _relatedData?: IElement;

}
