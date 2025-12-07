import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionCapability,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceDefinitionCapability */
const DEVICE_DEFINITION_CAPABILITY_PROPERTIES = [
  'type',
  'description',
] as const;

/**
 * DeviceDefinitionCapability - Device capabilities
 *
 * @see https://hl7.org/fhir/R4/devicedefinitioncapability.html
 *
 * @example
 * const deviceDefinitionCapability = new DeviceDefinitionCapability({
 *   // ... properties
 * });
 */
export class DeviceDefinitionCapability extends BackboneElement implements IDeviceDefinitionCapability {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of capability */
  type: ICodeableConcept;

  /** Description of capability */
  description?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionCapability>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_CAPABILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionCapability from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionCapability): DeviceDefinitionCapability {
    return new DeviceDefinitionCapability(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionCapability with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionCapability>): DeviceDefinitionCapability {
    return new DeviceDefinitionCapability({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionCapability by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionCapability) => Partial<IDeviceDefinitionCapability>): DeviceDefinitionCapability {
    const currentData = this.toJSON();
    return new DeviceDefinitionCapability({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionCapability)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionCapability {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_CAPABILITY_PROPERTIES);
    return result as IDeviceDefinitionCapability;
  }

  /**
   * Create a deep clone of this DeviceDefinitionCapability
   */
  clone(): DeviceDefinitionCapability {
    return new DeviceDefinitionCapability(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionCapability
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionCapability'];
    return parts.join(', ');
  }
}
