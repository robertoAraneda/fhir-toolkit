import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICapabilityStatementRestInteraction } from './ICapabilityStatementRestInteraction.js';
import type { ICapabilityStatementRestResource } from './ICapabilityStatementRestResource.js';
import type { ICapabilityStatementRestResourceOperation } from './ICapabilityStatementRestResourceOperation.js';
import type { ICapabilityStatementRestResourceSearchParam } from './ICapabilityStatementRestResourceSearchParam.js';
import type { ICapabilityStatementRestSecurity } from './ICapabilityStatementRestSecurity.js';
import type { RestfulCapabilityModeType } from '../../valuesets/index.js';

/**
 * CapabilityStatementRest Interface
 * 
 * If the endpoint is a RESTful one
 * 
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrest.html
 */
export interface ICapabilityStatementRest extends IBackboneElement {
  /**
   * client | server
   */
  mode: RestfulCapabilityModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * General description of implementation
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Information about security of implementation
   */
  security?: ICapabilityStatementRestSecurity;

  /**
   * Resource served on the REST interface
   */
  resource?: ICapabilityStatementRestResource[];

  /**
   * What operations are supported?
   */
  interaction?: ICapabilityStatementRestInteraction[];

  /**
   * Search parameters for searching all resources
   */
  searchParam?: ICapabilityStatementRestResourceSearchParam[];

  /**
   * Definition of a system level operation
   */
  operation?: ICapabilityStatementRestResourceOperation[];

  /**
   * Compartments served/used by system
   */
  compartment?: string[];
  /**
   * Extension for compartment
   */
  _compartment?: IElement;

}
