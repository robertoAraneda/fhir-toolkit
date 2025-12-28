import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IServiceRequestOrderDetail,
  IServiceRequestOrderDetailParameter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ServiceRequestOrderDetail */
const SERVICE_REQUEST_ORDER_DETAIL_PROPERTIES = [
  'parameterFocus',
  'parameter',
] as const;

/**
 * ServiceRequestOrderDetail - Additional order information
 *
 * @see https://hl7.org/fhir/R5/servicerequestorderdetail.html
 *
 * @example
 * const serviceRequestOrderDetail = new ServiceRequestOrderDetail({
 *   // ... properties
 * });
 */
export class ServiceRequestOrderDetail extends BackboneElement implements IServiceRequestOrderDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The context of the order details by reference */
  parameterFocus?: ICodeableReference;

  /** The parameter details for the service being requested */
  parameter: IServiceRequestOrderDetailParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IServiceRequestOrderDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, SERVICE_REQUEST_ORDER_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ServiceRequestOrderDetail from a JSON object
   */
  static fromJSON(json: IServiceRequestOrderDetail): ServiceRequestOrderDetail {
    return new ServiceRequestOrderDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ServiceRequestOrderDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IServiceRequestOrderDetail>): ServiceRequestOrderDetail {
    return new ServiceRequestOrderDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ServiceRequestOrderDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IServiceRequestOrderDetail) => Partial<IServiceRequestOrderDetail>): ServiceRequestOrderDetail {
    const currentData = this.toJSON();
    return new ServiceRequestOrderDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IServiceRequestOrderDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IServiceRequestOrderDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SERVICE_REQUEST_ORDER_DETAIL_PROPERTIES);
    return result as IServiceRequestOrderDetail;
  }

  /**
   * Create a deep clone of this ServiceRequestOrderDetail
   */
  clone(): ServiceRequestOrderDetail {
    return new ServiceRequestOrderDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ServiceRequestOrderDetail
   */
  toString(): string {
    const parts: string[] = ['ServiceRequestOrderDetail'];
    return parts.join(', ');
  }
}
