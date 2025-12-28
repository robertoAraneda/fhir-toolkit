import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IServiceRequestOrderDetailParameter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ServiceRequestOrderDetailParameter */
const SERVICE_REQUEST_ORDER_DETAIL_PARAMETER_PROPERTIES = [
  'code',
  'valueQuantity',
  'valueRatio',
  'valueRange',
  'valueBoolean',
  '_valueBoolean',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valuePeriod',
] as const;

/**
 * ServiceRequestOrderDetailParameter - The parameter details for the service being requested
 *
 * @see https://hl7.org/fhir/R5/servicerequestorderdetailparameter.html
 *
 * @example
 * const serviceRequestOrderDetailParameter = new ServiceRequestOrderDetailParameter({
 *   // ... properties
 * });
 */
export class ServiceRequestOrderDetailParameter extends BackboneElement implements IServiceRequestOrderDetailParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The detail of the order being requested */
  code: ICodeableConcept;

  /** The value for the order detail */
  valueQuantity?: IQuantity;

  /** The value for the order detail */
  valueRatio?: IRatio;

  /** The value for the order detail */
  valueRange?: IRange;

  /** The value for the order detail */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** The value for the order detail */
  valueCodeableConcept?: ICodeableConcept;

  /** The value for the order detail */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** The value for the order detail */
  valuePeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IServiceRequestOrderDetailParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, SERVICE_REQUEST_ORDER_DETAIL_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ServiceRequestOrderDetailParameter from a JSON object
   */
  static fromJSON(json: IServiceRequestOrderDetailParameter): ServiceRequestOrderDetailParameter {
    return new ServiceRequestOrderDetailParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ServiceRequestOrderDetailParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IServiceRequestOrderDetailParameter>): ServiceRequestOrderDetailParameter {
    return new ServiceRequestOrderDetailParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ServiceRequestOrderDetailParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IServiceRequestOrderDetailParameter) => Partial<IServiceRequestOrderDetailParameter>): ServiceRequestOrderDetailParameter {
    const currentData = this.toJSON();
    return new ServiceRequestOrderDetailParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IServiceRequestOrderDetailParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IServiceRequestOrderDetailParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SERVICE_REQUEST_ORDER_DETAIL_PARAMETER_PROPERTIES);
    return result as IServiceRequestOrderDetailParameter;
  }

  /**
   * Create a deep clone of this ServiceRequestOrderDetailParameter
   */
  clone(): ServiceRequestOrderDetailParameter {
    return new ServiceRequestOrderDetailParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ServiceRequestOrderDetailParameter
   */
  toString(): string {
    const parts: string[] = ['ServiceRequestOrderDetailParameter'];
    return parts.join(', ');
  }
}
