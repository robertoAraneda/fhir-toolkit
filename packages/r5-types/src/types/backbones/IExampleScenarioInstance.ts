import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
import type { IExampleScenarioInstanceContainedInstance } from './IExampleScenarioInstanceContainedInstance.js';
import type { IExampleScenarioInstanceVersion } from './IExampleScenarioInstanceVersion.js';

/**
 * ExampleScenarioInstance Interface
 * 
 * Data used in the scenario
 * 
 *
 * @see https://hl7.org/fhir/R4/examplescenarioinstance.html
 */
export interface IExampleScenarioInstance extends IBackboneElement {
  /**
   * ID or acronym of the instance
   */
  key: string;
  /**
   * Extension for key
   */
  _key?: IElement;

  /**
   * Data structure for example
   */
  structureType: ICoding;

  /**
   * E.g. 4.0.1
   */
  structureVersion?: string;
  /**
   * Extension for structureVersion
   */
  _structureVersion?: IElement;

  /**
   * Rules instance adheres to
   */
  structureProfileCanonical?: string;
  /**
   * Extension for structureProfileCanonical
   */
  _structureProfileCanonical?: IElement;

  /**
   * Rules instance adheres to
   */
  structureProfileUri?: string;
  /**
   * Extension for structureProfileUri
   */
  _structureProfileUri?: IElement;

  /**
   * Label for instance
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Human-friendly description of the instance
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Example instance data
   */
  content?: IReference;

  /**
   * Snapshot of instance that changes
   */
  version?: IExampleScenarioInstanceVersion[];

  /**
   * Resources contained in the instance
   */
  containedInstance?: IExampleScenarioInstanceContainedInstance[];

}
