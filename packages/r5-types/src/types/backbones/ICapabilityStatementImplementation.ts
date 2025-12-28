import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CapabilityStatementImplementation Interface
 * 
 * If this describes a specific instance
 * 
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementimplementation.html
 */
export interface ICapabilityStatementImplementation extends IBackboneElement {
  /**
   * Describes this specific instance
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Base URL for the installation
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Organization that manages the data
   */
  custodian?: IReference<'Organization'>;

}
