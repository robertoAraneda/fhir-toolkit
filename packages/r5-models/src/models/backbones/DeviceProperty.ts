import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IDeviceProperty,
  IElement,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceProperty */
const DEVICE_PROPERTY_PROPERTIES = [
  'type',
  'valueQuantity',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueRange',
  'valueAttachment',
] as const;

/**
 * DeviceProperty - Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc.
 *
 * @see https://hl7.org/fhir/R5/deviceproperty.html
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

  /** Code that specifies the property being represented */
  type: ICodeableConcept;

  /** Value of the property */
  valueQuantity?: IQuantity;

  /** Value of the property */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of the property */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the property */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the property */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of the property */
  valueRange?: IRange;

  /** Value of the property */
  valueAttachment?: IAttachment;

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
