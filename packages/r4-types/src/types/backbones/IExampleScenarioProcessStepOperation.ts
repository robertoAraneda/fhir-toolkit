import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioInstanceContainedInstance } from './IExampleScenarioInstanceContainedInstance.js';

/**
 * ExampleScenarioProcessStepOperation Interface
 * 
 * Each interaction or action
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocessstepoperation.html
 */
export interface IExampleScenarioProcessStepOperation extends IBackboneElement {
  /**
   * The sequential number of the interaction
   */
  number: string;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * The type of operation - CRUD
   */
  type?: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The human-friendly name of the interaction
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Who starts the transaction
   */
  initiator?: string;
  /**
   * Extension for initiator
   */
  _initiator?: IElement;

  /**
   * Who receives the transaction
   */
  receiver?: string;
  /**
   * Extension for receiver
   */
  _receiver?: IElement;

  /**
   * A comment to be inserted in the diagram
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Whether the initiator is deactivated right after the transaction
   */
  initiatorActive?: boolean;
  /**
   * Extension for initiatorActive
   */
  _initiatorActive?: IElement;

  /**
   * Whether the receiver is deactivated right after the transaction
   */
  receiverActive?: boolean;
  /**
   * Extension for receiverActive
   */
  _receiverActive?: IElement;

  /**
   * Each resource instance used by the initiator
   */
  request?: IExampleScenarioInstanceContainedInstance;

  /**
   * Each resource instance used by the responder
   */
  response?: IExampleScenarioInstanceContainedInstance;

}
