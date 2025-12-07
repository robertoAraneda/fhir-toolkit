import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IDeviceDefinitionProperty,
  IElement,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionProperty */
const DEVICE_DEFINITION_PROPERTY_PROPERTIES = [
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
 * DeviceDefinitionProperty - Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
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
