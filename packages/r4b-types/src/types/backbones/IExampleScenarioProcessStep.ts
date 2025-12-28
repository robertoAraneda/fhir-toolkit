import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioProcess } from './IExampleScenarioProcess.js';
import type { IExampleScenarioProcessStepAlternative } from './IExampleScenarioProcessStepAlternative.js';
import type { IExampleScenarioProcessStepOperation } from './IExampleScenarioProcessStepOperation.js';

/**
 * ExampleScenarioProcessStep Interface
 * 
 * Each step of the process
 * 
 *
 * @see https://hl7.org/fhir/R4B/examplescenarioprocessstep.html
 */
export interface IExampleScenarioProcessStep extends IBackboneElement {
  /**
   * Nested process
   */
  process?: IExampleScenarioProcess[];

  /**
   * If there is a pause in the flow
   */
  pause?: boolean;
  /**
   * Extension for pause
   */
  _pause?: IElement;

  /**
   * Each interaction or action
   */
  operation?: IExampleScenarioProcessStepOperation;

  /**
   * Alternate non-typical step action
   */
  alternative?: IExampleScenarioProcessStepAlternative[];

}
