import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPlanDefinitionActorOption } from './IPlanDefinitionActorOption.js';

/**
 * PlanDefinitionActor Interface
 * 
 * Actors within the plan
 * 
 *
 * @see https://hl7.org/fhir/R5/plandefinitionactor.html
 */
export interface IPlanDefinitionActor extends IBackboneElement {
  /**
   * User-visible title
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Describes the actor
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Who or what can be this actor
   */
  option: IPlanDefinitionActorOption[];

}
