import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ExampleScenarioInstanceVersion Interface
 * 
 * Snapshot of instance that changes
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstanceversion.html
 */
export interface IExampleScenarioInstanceVersion extends IBackboneElement {
  /**
   * ID or acronym of the version
   */
  key: string;
  /**
   * Extension for key
   */
  _key?: IElement;

  /**
   * Label for instance version
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Details about version
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Example instance version data
   */
  content?: IReference;

}
