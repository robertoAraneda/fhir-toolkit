import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ExampleScenarioActorTypeType } from '../../valuesets/index.js';

/**
 * ExampleScenarioActor Interface
 * 
 * Individual involved in exchange
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioactor.html
 */
export interface IExampleScenarioActor extends IBackboneElement {
  /**
   * ID or acronym of the actor
   */
  key: string;
  /**
   * Extension for key
   */
  _key?: IElement;

  /**
   * person | system
   */
  type: ExampleScenarioActorTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Label for actor when rendering
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Details about actor
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
