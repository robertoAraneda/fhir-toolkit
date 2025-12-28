import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DocumentModeType } from '../../valuesets/index.js';

/**
 * CapabilityStatementDocument Interface
 * 
 * Document definition
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementdocument.html
 */
export interface ICapabilityStatementDocument extends IBackboneElement {
  /**
   * producer | consumer
   */
  mode: DocumentModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Description of document support
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Constraint on the resources used in the document
   */
  profile: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

}
