import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IServiceRequestOrderDetailParameter } from './IServiceRequestOrderDetailParameter.js';

/**
 * ServiceRequestOrderDetail Interface
 * 
 * Additional order information
 * 
 *
 * @see https://hl7.org/fhir/R5/servicerequestorderdetail.html
 */
export interface IServiceRequestOrderDetail extends IBackboneElement {
  /**
   * The context of the order details by reference
   */
  parameterFocus?: ICodeableReference;

  /**
   * The parameter details for the service being requested
   */
  parameter: IServiceRequestOrderDetailParameter[];

}
