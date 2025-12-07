import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceDefinitionProperty */
const DEVICE_DEFINITION_PROPERTY_PROPERTIES = [
  'type',
  'valueQuantity',
  'valueCode',
] as const;

/**
 * DeviceDefinitionProperty - The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionproperty.html
 *
 * @example
 * const deviceDefinitionProperty = new DeviceDefinitionProperty({
 *   // ... properties
 * });
 */
export class DeviceDefinitionProperty extends BackboneElement implements IDeviceDefinitionProperty {

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

  constructor(data?: Partial<IDeviceDefinitionProperty>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_PROPERTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionProperty from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionProperty): DeviceDefinitionProperty {
    return new DeviceDefinitionProperty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionProperty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionProperty>): DeviceDefinitionProperty {
    return new DeviceDefinitionProperty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionProperty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionProperty) => Partial<IDeviceDefinitionProperty>): DeviceDefinitionProperty {
    const currentData = this.toJSON();
    return new DeviceDefinitionProperty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionProperty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionProperty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_PROPERTY_PROPERTIES);
    return result as IDeviceDefinitionProperty;
  }

  /**
   * Create a deep clone of this DeviceDefinitionProperty
   */
  clone(): DeviceDefinitionProperty {
    return new DeviceDefinitionProperty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionProperty
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionProperty'];
    return parts.join(', ');
  }
}
