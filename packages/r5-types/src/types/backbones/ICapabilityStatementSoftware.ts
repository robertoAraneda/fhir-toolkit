import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * CapabilityStatementSoftware Interface
 * 
 * Software that is covered by this capability statement
 * 
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementsoftware.html
 */
export interface ICapabilityStatementSoftware extends IBackboneElement {
  /**
   * A name the software is known by
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Version covered by this statement
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Date this version was released
   */
  releaseDate?: string;
  /**
   * Extension for releaseDate
   */
  _releaseDate?: IElement;

}
