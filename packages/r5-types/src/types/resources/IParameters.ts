import type { IResource } from '../../base/index.js';
import type { IParametersParameter } from '../backbones/IParametersParameter.js';

/**
 * Parameters Interface
 * 
 * This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources.
 * 
 *
 * @see https://hl7.org/fhir/R5/parameters.html
 */
export interface IParameters extends IResource {
  /**
   * The type of resource
   */
  resourceType: 'Parameters';

  /**
   * Operation Parameter
   */
  parameter?: IParametersParameter[];

}
