import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioProcessStep } from './IExampleScenarioProcessStep.js';

/**
 * ExampleScenarioProcess Interface
 * 
 * Each major process - a group of operations
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocess.html
 */
export interface IExampleScenarioProcess extends IBackboneElement {
  /**
   * The diagram title of the group of operations
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * A longer description of the group of operations
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Description of initial status before the process starts
   */
  preConditions?: string;
  /**
   * Extension for preConditions
   */
  _preConditions?: IElement;

  /**
   * Description of final status after the process ends
   */
  postConditions?: string;
  /**
   * Extension for postConditions
   */
  _postConditions?: IElement;

  /**
   * Each step of the process
   */
  step?: IExampleScenarioProcessStep[];

}
