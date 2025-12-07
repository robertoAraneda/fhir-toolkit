import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { IExampleScenarioInstanceContainedInstance } from './IExampleScenarioInstanceContainedInstance.js';

/**
 * ExampleScenarioProcessStepOperation Interface
 * 
 * Step is simple action
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocessstepoperation.html
 */
export interface IExampleScenarioProcessStepOperation extends IBackboneElement {
  /**
   * Kind of action
   */
  type?: ICoding;

  /**
   * Label for step
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Who starts the operation
   */
  initiator?: string;
  /**
   * Extension for initiator
   */
  _initiator?: IElement;

  /**
   * Who receives the operation
   */
  receiver?: string;
  /**
   * Extension for receiver
   */
  _receiver?: IElement;

  /**
   * Human-friendly description of the operation
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Initiator stays active?
   */
  initiatorActive?: boolean;
  /**
   * Extension for initiatorActive
   */
  _initiatorActive?: IElement;

  /**
   * Receiver stays active?
   */
  receiverActive?: boolean;
  /**
   * Extension for receiverActive
   */
  _receiverActive?: IElement;

  /**
   * Instance transmitted on invocation
   */
  request?: IExampleScenarioInstanceContainedInstance;

  /**
   * Instance transmitted on invocation response
   */
  response?: IExampleScenarioInstanceContainedInstance;

}
