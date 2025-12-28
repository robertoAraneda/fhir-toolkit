import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestScriptMetadataCapability Interface
 * 
 * Capabilities  that are assumed to function correctly on the FHIR server being tested
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptmetadatacapability.html
 */
export interface ITestScriptMetadataCapability extends IBackboneElement {
  /**
   * Are the capabilities required?
   */
  required: boolean;
  /**
   * Extension for required
   */
  _required?: IElement;

  /**
   * Are the capabilities validated?
   */
  validated: boolean;
  /**
   * Extension for validated
   */
  _validated?: IElement;

  /**
   * The expected capabilities of the server
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Which origin server these requirements apply to
   */
  origin?: number[];
  /**
   * Extension for origin
   */
  _origin?: IElement;

  /**
   * Which server these requirements apply to
   */
  destination?: number;
  /**
   * Extension for destination
   */
  _destination?: IElement;

  /**
   * Links to the FHIR specification
   */
  link?: string[];
  /**
   * Extension for link
   */
  _link?: IElement;

  /**
   * Required Capability Statement
   */
  capabilities: string;
  /**
   * Extension for capabilities
   */
  _capabilities?: IElement;

}
