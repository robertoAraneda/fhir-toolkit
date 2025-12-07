import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceNameTypeType,
  IDeviceDeviceName,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceDeviceName */
const DEVICE_DEVICE_NAME_PROPERTIES = [
  'name',
  '_name',
  'type',
  '_type',
] as const;

/**
 * DeviceDeviceName - The name of the device as given by the manufacturer
 *
 * @see https://hl7.org/fhir/R4/devicedevicename.html
 *
 * @example
 * const deviceDeviceName = new DeviceDeviceName({
 *   // ... properties
 * });
 */
export class DeviceDeviceName extends BackboneElement implements IDeviceDeviceName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The name that identifies the device */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
  type: DeviceNameTypeType;

  /** Extension for type */
  _type?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDeviceName>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEVICE_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDeviceName from a JSON object
   */
  static fromJSON(json: IDeviceDeviceName): DeviceDeviceName {
    return new DeviceDeviceName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDeviceName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDeviceName>): DeviceDeviceName {
    return new DeviceDeviceName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDeviceName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDeviceName) => Partial<IDeviceDeviceName>): DeviceDeviceName {
    const currentData = this.toJSON();
    return new DeviceDeviceName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDeviceName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDeviceName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEVICE_NAME_PROPERTIES);
    return result as IDeviceDeviceName;
  }

  /**
   * Create a deep clone of this DeviceDeviceName
   */
  clone(): DeviceDeviceName {
    return new DeviceDeviceName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDeviceName
   */
  toString(): string {
    const parts: string[] = ['DeviceDeviceName'];
    return parts.join(', ');
  }
}
