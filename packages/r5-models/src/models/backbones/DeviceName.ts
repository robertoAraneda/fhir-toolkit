import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceNameTypeType,
  IDeviceName,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceName */
const DEVICE_NAME_PROPERTIES = [
  'value',
  '_value',
  'type',
  '_type',
  'display',
  '_display',
] as const;

/**
 * DeviceName - The name or names of the device as known to the manufacturer and/or patient
 *
 * @see https://hl7.org/fhir/R5/devicename.html
 *
 * @example
 * const deviceName = new DeviceName({
 *   // ... properties
 * });
 */
export class DeviceName extends BackboneElement implements IDeviceName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The term that names the device */
  value: string;

  /** Extension for value */
  _value?: IElement;

  /** registered-name | user-friendly-name | patient-reported-name */
  type: DeviceNameTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The preferred device name */
  display?: boolean;

  /** Extension for display */
  _display?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceName>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceName from a JSON object
   */
  static fromJSON(json: IDeviceName): DeviceName {
    return new DeviceName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceName>): DeviceName {
    return new DeviceName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceName) => Partial<IDeviceName>): DeviceName {
    const currentData = this.toJSON();
    return new DeviceName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_NAME_PROPERTIES);
    return result as IDeviceName;
  }

  /**
   * Create a deep clone of this DeviceName
   */
  clone(): DeviceName {
    return new DeviceName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceName
   */
  toString(): string {
    const parts: string[] = ['DeviceName'];
    return parts.join(', ');
  }
}
