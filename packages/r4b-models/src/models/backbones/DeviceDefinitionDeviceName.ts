import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceNameTypeType,
  IDeviceDefinitionDeviceName,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceDefinitionDeviceName */
const DEVICE_DEFINITION_DEVICE_NAME_PROPERTIES = [
  'name',
  '_name',
  'type',
  '_type',
] as const;

/**
 * DeviceDefinitionDeviceName - A name given to the device to identify it
 *
 * @see https://hl7.org/fhir/R4/devicedefinitiondevicename.html
 *
 * @example
 * const deviceDefinitionDeviceName = new DeviceDefinitionDeviceName({
 *   // ... properties
 * });
 */
export class DeviceDefinitionDeviceName extends BackboneElement implements IDeviceDefinitionDeviceName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The name of the device */
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

  constructor(data?: Partial<IDeviceDefinitionDeviceName>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_DEVICE_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionDeviceName from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionDeviceName): DeviceDefinitionDeviceName {
    return new DeviceDefinitionDeviceName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionDeviceName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionDeviceName>): DeviceDefinitionDeviceName {
    return new DeviceDefinitionDeviceName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionDeviceName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionDeviceName) => Partial<IDeviceDefinitionDeviceName>): DeviceDefinitionDeviceName {
    const currentData = this.toJSON();
    return new DeviceDefinitionDeviceName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionDeviceName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionDeviceName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_DEVICE_NAME_PROPERTIES);
    return result as IDeviceDefinitionDeviceName;
  }

  /**
   * Create a deep clone of this DeviceDefinitionDeviceName
   */
  clone(): DeviceDefinitionDeviceName {
    return new DeviceDefinitionDeviceName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionDeviceName
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionDeviceName'];
    return parts.join(', ');
  }
}
