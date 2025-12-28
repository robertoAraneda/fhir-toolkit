import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * CapabilityStatementRestResourceOperation Interface
 * 
 * Definition of a resource operation
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestresourceoperation.html
 */
export interface ICapabilityStatementRestResourceOperation extends IBackboneElement {
  /**
   * Name by which the operation/query is invoked
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * The defined operation/query
   */
  definition: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * Specific details about operation behavior
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
