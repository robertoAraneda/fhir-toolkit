import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceDefinitionSpecialization,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceDefinitionSpecialization */
const DEVICE_DEFINITION_SPECIALIZATION_PROPERTIES = [
  'systemType',
  '_systemType',
  'version',
  '_version',
] as const;

/**
 * DeviceDefinitionSpecialization - The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionspecialization.html
 *
 * @example
 * const deviceDefinitionSpecialization = new DeviceDefinitionSpecialization({
 *   // ... properties
 * });
 */
export class DeviceDefinitionSpecialization extends BackboneElement implements IDeviceDefinitionSpecialization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The standard that is used to operate and communicate */
  systemType: string;

  /** Extension for systemType */
  _systemType?: IElement;

  /** The version of the standard that is used to operate and communicate */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionSpecialization>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_SPECIALIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionSpecialization from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionSpecialization): DeviceDefinitionSpecialization {
    return new DeviceDefinitionSpecialization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionSpecialization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionSpecialization>): DeviceDefinitionSpecialization {
    return new DeviceDefinitionSpecialization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionSpecialization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionSpecialization) => Partial<IDeviceDefinitionSpecialization>): DeviceDefinitionSpecialization {
    const currentData = this.toJSON();
    return new DeviceDefinitionSpecialization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionSpecialization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionSpecialization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_SPECIALIZATION_PROPERTIES);
    return result as IDeviceDefinitionSpecialization;
  }

  /**
   * Create a deep clone of this DeviceDefinitionSpecialization
   */
  clone(): DeviceDefinitionSpecialization {
    return new DeviceDefinitionSpecialization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionSpecialization
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionSpecialization'];
    return parts.join(', ');
  }
}
