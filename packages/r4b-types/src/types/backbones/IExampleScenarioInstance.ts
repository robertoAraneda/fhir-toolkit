import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExampleScenarioInstanceContainedInstance } from './IExampleScenarioInstanceContainedInstance.js';
import type { IExampleScenarioInstanceVersion } from './IExampleScenarioInstanceVersion.js';

/**
 * ExampleScenarioInstance Interface
 * 
 * Each resource and each version that is present in the workflow
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstance.html
 */
export interface IExampleScenarioInstance extends IBackboneElement {
  /**
   * The id of the resource for referencing
   */
  resourceId: string;
  /**
   * Extension for resourceId
   */
  _resourceId?: IElement;

  /**
   * The type of the resource
   */
  resourceType: string;
  /**
   * Extension for resourceType
   */
  _resourceType?: IElement;

  /**
   * A short name for the resource instance
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Human-friendly description of the resource instance
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * A specific version of the resource
   */
  version?: IExampleScenarioInstanceVersion[];

  /**
   * Resources contained in the instance
   */
  containedInstance?: IExampleScenarioInstanceContainedInstance[];

}
