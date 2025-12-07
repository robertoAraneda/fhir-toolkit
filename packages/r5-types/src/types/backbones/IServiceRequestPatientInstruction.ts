import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ServiceRequestPatientInstruction Interface
 * 
 * Patient or consumer-oriented instructions
 * 
 *
 * @see https://hl7.org/fhir/R4/servicerequestpatientinstruction.html
 */
export interface IServiceRequestPatientInstruction extends IBackboneElement {
  /**
   * Patient or consumer-oriented instructions
   */
  instructionMarkdown?: string;
  /**
   * Extension for instructionMarkdown
   */
  _instructionMarkdown?: IElement;

  /**
   * Patient or consumer-oriented instructions
   */
  instructionReference?: IReference;

}
