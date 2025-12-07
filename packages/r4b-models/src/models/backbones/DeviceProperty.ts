import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceProperty */
const DEVICE_PROPERTY_PROPERTIES = [
  'type',
  'valueQuantity',
  'valueCode',
] as const;

/**
 * DeviceProperty - The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 *
 * @see https://hl7.org/fhir/R4/deviceproperty.html
 *
 * @example
 * const deviceProperty = new DeviceProperty({
 *   // ... properties
 * });
 */
export class DeviceProperty extends BackboneElement implements IDeviceProperty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
  type: ICodeableConcept;

  /** Property value as a quantity */
  valueQuantity?: IQuantity[];

  /** Property value as a code, e.g., NTP4 (synced to NTP) */
  valueCode?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceProperty from a JSON object
   */
  static fromJSON(json: IDeviceProperty): DeviceProperty {
    return new DeviceProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceProperty>): DeviceProperty {
    return new DeviceProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceProperty) => Partial<IDeviceProperty>): DeviceProperty {
    const currentData = this.toJSON();
    return new DeviceProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_PROPERTY_PROPERTIES);
    return result as IDeviceProperty;
  }

  /**
   * Create a deep clone of this DeviceProperty
   */
  clone(): DeviceProperty {
    return new DeviceProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceProperty
   */
  toString(): string {
    const parts: string[] = ['DeviceProperty'];
    return parts.join(', ');
  }
}
