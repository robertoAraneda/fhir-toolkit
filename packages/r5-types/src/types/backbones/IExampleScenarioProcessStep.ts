import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioProcess } from './IExampleScenarioProcess.js';
import type { IExampleScenarioProcessStepAlternative } from './IExampleScenarioProcessStepAlternative.js';
import type { IExampleScenarioProcessStepOperation } from './IExampleScenarioProcessStepOperation.js';

/**
 * ExampleScenarioProcessStep Interface
 * 
 * Event within of the process
 * 
 *
 * @see https://hl7.org/fhir/R5/examplescenarioprocessstep.html
 */
export interface IExampleScenarioProcessStep extends IBackboneElement {
  /**
   * Sequential number of the step
   */
  number?: string;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * Step is nested process
   */
  process?: IExampleScenarioProcess;

  /**
   * Step is nested workflow
   */
  workflow?: string;
  /**
   * Extension for workflow
   */
  _workflow?: IElement;

  /**
   * Step is simple action
   */
  operation?: IExampleScenarioProcessStepOperation;

  /**
   * Alternate non-typical step action
   */
  alternative?: IExampleScenarioProcessStepAlternative[];

  /**
   * Pause in the flow?
   */
  pause?: boolean;
  /**
   * Extension for pause
   */
  _pause?: IElement;

}
