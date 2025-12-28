import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ExampleScenarioInstanceContainedInstance Interface
 * 
 * Resources contained in the instance
 * 
 *
 * @see https://hl7.org/fhir/R5/examplescenarioinstancecontainedinstance.html
 */
export interface IExampleScenarioInstanceContainedInstance extends IBackboneElement {
  /**
   * Key of contained instance
   */
  instanceReference: string;
  /**
   * Extension for instanceReference
   */
  _instanceReference?: IElement;

  /**
   * Key of contained instance version
   */
  versionReference?: string;
  /**
   * Extension for versionReference
   */
  _versionReference?: IElement;

}
