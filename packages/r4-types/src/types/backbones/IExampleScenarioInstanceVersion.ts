import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ExampleScenarioInstanceVersion Interface
 * 
 * A specific version of the resource
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstanceversion.html
 */
export interface IExampleScenarioInstanceVersion extends IBackboneElement {
  /**
   * The identifier of a specific version of a resource
   */
  versionId: string;
  /**
   * Extension for versionId
   */
  _versionId?: IElement;

  /**
   * The description of the resource version
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
