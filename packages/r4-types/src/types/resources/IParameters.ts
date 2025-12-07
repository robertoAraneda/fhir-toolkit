import type { IResource } from '../../base/index.js';
import type { IParametersParameter } from '../backbones/IParametersParameter.js';

/**
 * Parameters Interface
 * 
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 * 
 *
 * @see https://hl7.org/fhir/R4/parameters.html
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
