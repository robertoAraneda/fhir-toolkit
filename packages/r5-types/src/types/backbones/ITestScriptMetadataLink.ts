import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestScriptMetadataLink Interface
 * 
 * Links to the FHIR specification
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptmetadatalink.html
 */
export interface ITestScriptMetadataLink extends IBackboneElement {
  /**
   * URL to the specification
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Short description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
