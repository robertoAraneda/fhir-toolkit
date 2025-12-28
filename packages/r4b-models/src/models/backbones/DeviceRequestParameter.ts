import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceRequestParameter,
  IElement,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceRequestParameter */
const DEVICE_REQUEST_PARAMETER_PROPERTIES = [
  'code',
  'valueCodeableConcept',
  'valueQuantity',
  'valueRange',
  'valueBoolean',
  '_valueBoolean',
] as const;

/**
 * DeviceRequestParameter - Device details
 *
 * @see https://hl7.org/fhir/R4B/devicerequestparameter.html
 *
 * @example
 * const deviceRequestParameter = new DeviceRequestParameter({
 *   // ... properties
 * });
 */
export class DeviceRequestParameter extends BackboneElement implements IDeviceRequestParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Device detail */
  code?: ICodeableConcept;

  /** Value of detail */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of detail */
  valueQuantity?: IQuantity;

  /** Value of detail */
  valueRange?: IRange;

  /** Value of detail */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceRequestParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_REQUEST_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceRequestParameter from a JSON object
   */
  static fromJSON(json: IDeviceRequestParameter): DeviceRequestParameter {
    return new DeviceRequestParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceRequestParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceRequestParameter>): DeviceRequestParameter {
    return new DeviceRequestParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceRequestParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceRequestParameter) => Partial<IDeviceRequestParameter>): DeviceRequestParameter {
    const currentData = this.toJSON();
    return new DeviceRequestParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceRequestParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceRequestParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_REQUEST_PARAMETER_PROPERTIES);
    return result as IDeviceRequestParameter;
  }

  /**
   * Create a deep clone of this DeviceRequestParameter
   */
  clone(): DeviceRequestParameter {
    return new DeviceRequestParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceRequestParameter
   */
  toString(): string {
    const parts: string[] = ['DeviceRequestParameter'];
    return parts.join(', ');
  }
}
