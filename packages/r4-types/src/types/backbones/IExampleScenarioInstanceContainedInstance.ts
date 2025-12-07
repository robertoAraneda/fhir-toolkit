import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ExampleScenarioInstanceContainedInstance Interface
 * 
 * Resources contained in the instance
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstancecontainedinstance.html
 */
export interface IExampleScenarioInstanceContainedInstance extends IBackboneElement {
  /**
   * Each resource contained in the instance
   */
  resourceId: string;
  /**
   * Extension for resourceId
   */
  _resourceId?: IElement;

  /**
   * A specific version of a resource contained in the instance
   */
  versionId?: string;
  /**
   * Extension for versionId
   */
  _versionId?: IElement;

}
