import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SearchParamTypeType } from '../../valuesets/index.js';

/**
 * CapabilityStatementRestResourceSearchParam Interface
 * 
 * Search parameters supported by implementation
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestresourcesearchparam.html
 */
export interface ICapabilityStatementRestResourceSearchParam extends IBackboneElement {
  /**
   * Name of search parameter
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Source of definition for parameter
   */
  definition?: string;
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  type: SearchParamTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Server-specific usage
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
