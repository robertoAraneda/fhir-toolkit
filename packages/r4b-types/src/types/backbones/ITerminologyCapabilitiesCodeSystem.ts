import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITerminologyCapabilitiesCodeSystemVersion } from './ITerminologyCapabilitiesCodeSystemVersion.js';

/**
 * TerminologyCapabilitiesCodeSystem Interface
 * 
 * A code system supported by the server
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiescodesystem.html
 */
export interface ITerminologyCapabilitiesCodeSystem extends IBackboneElement {
  /**
   * URI for the Code System
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
   * Whether subsumption is supported
   */
  subsumption?: boolean;
  /**
   * Extension for subsumption
   */
  _subsumption?: IElement;

}
