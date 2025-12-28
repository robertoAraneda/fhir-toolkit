import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IPlanDefinitionGoalTarget } from './IPlanDefinitionGoalTarget.js';

/**
 * PlanDefinitionGoal Interface
 * 
 * What the plan is trying to accomplish
 * 
 *
 * @see https://hl7.org/fhir/R5/plandefinitiongoal.html
 */
export interface IPlanDefinitionGoal extends IBackboneElement {
  /**
   * E.g. Treatment, dietary, behavioral
   */
  category?: ICodeableConcept;

  /**
   * Code or text describing the goal
   */
  description: ICodeableConcept;

  /**
   * high-priority | medium-priority | low-priority
   */
  priority?: ICodeableConcept;

  /**
   * When goal pursuit begins
   */
  start?: ICodeableConcept;

  /**
   * What does the goal address
   */
  addresses?: ICodeableConcept[];

  /**
   * Supporting documentation for the goal
   */
  documentation?: IRelatedArtifact[];

  /**
   * Target outcome for the goal
   */
  target?: IPlanDefinitionGoalTarget[];

}
