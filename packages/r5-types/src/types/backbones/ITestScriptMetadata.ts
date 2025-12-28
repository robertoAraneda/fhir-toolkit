import type { IBackboneElement } from '../../base/index.js';
import type { ITestScriptMetadataCapability } from './ITestScriptMetadataCapability.js';
import type { ITestScriptMetadataLink } from './ITestScriptMetadataLink.js';

/**
 * TestScriptMetadata Interface
 * 
 * Required capability that is assumed to function correctly on the FHIR server being tested
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptmetadata.html
 */
export interface ITestScriptMetadata extends IBackboneElement {
  /**
   * Links to the FHIR specification
   */
  link?: ITestScriptMetadataLink[];

  /**
   * Capabilities  that are assumed to function correctly on the FHIR server being tested
   */
  capability: ITestScriptMetadataCapability[];

}
