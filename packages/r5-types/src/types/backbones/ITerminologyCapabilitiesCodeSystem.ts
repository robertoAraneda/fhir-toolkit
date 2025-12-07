import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITerminologyCapabilitiesCodeSystemVersion } from './ITerminologyCapabilitiesCodeSystemVersion.js';
import type { CodeSystemContentModeType } from '../../valuesets/index.js';

/**
 * TerminologyCapabilitiesCodeSystem Interface
 * 
 * A code system supported by the server
 * 
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiescodesystem.html
 */
export interface ITerminologyCapabilitiesCodeSystem extends IBackboneElement {
  /**
   * Canonical identifier for the code system, represented as a URI
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * Version of Code System supported
   */
  version?: ITerminologyCapabilitiesCodeSystemVersion[];

  /**
   * not-present | example | fragment | complete | supplement
   */
  content: CodeSystemContentModeType;
  /**
   * Extension for content
   */
  _content?: IElement;

  /**
   * Whether subsumption is supported
   */
  subsumption?: boolean;
  /**
   * Extension for subsumption
   */
  _subsumption?: IElement;

}
