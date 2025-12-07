import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ExampleScenarioActorTypeType } from '../../valuesets/index.js';

/**
 * ExampleScenarioActor Interface
 * 
 * Actor participating in the resource
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioactor.html
 */
export interface IExampleScenarioActor extends IBackboneElement {
  /**
   * ID or acronym of the actor
   */
  actorId: string;
  /**
   * Extension for actorId
   */
  _actorId?: IElement;

  /**
   * person | entity
   */
  type: ExampleScenarioActorTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The name of the actor as shown in the page
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * The description of the actor
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
