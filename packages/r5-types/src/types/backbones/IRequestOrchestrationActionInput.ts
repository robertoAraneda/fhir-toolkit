import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';

/**
 * RequestOrchestrationActionInput Interface
 * 
 * Input data requirements
 * 
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationactioninput.html
 */
export interface IRequestOrchestrationActionInput extends IBackboneElement {
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
