import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioProcessStep } from './IExampleScenarioProcessStep.js';

/**
 * ExampleScenarioProcessStepAlternative Interface
 * 
 * Alternate non-typical step action
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioprocessstepalternative.html
 */
export interface IExampleScenarioProcessStepAlternative extends IBackboneElement {
  /**
   * Label for alternative
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Human-readable description of option
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Alternative action(s)
   */
  step?: IExampleScenarioProcessStep[];

}
