import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioProcessStep } from './IExampleScenarioProcessStep.js';

/**
 * ExampleScenarioProcess Interface
 * 
 * Major process within scenario
 * 
 *
 * @see https://hl7.org/fhir/R5/examplescenarioprocess.html
 */
export interface IExampleScenarioProcess extends IBackboneElement {
  /**
   * Label for procss
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Human-friendly description of the process
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Status before process starts
   */
  preConditions?: string;
  /**
   * Extension for preConditions
   */
  _preConditions?: IElement;

  /**
   * Status after successful completion
   */
  postConditions?: string;
  /**
   * Extension for postConditions
   */
  _postConditions?: IElement;

  /**
   * Event within of the process
   */
  step?: IExampleScenarioProcessStep[];

}
