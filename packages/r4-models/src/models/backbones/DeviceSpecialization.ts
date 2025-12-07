import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceSpecialization,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceSpecialization */
const DEVICE_SPECIALIZATION_PROPERTIES = [
  'systemType',
  'version',
  '_version',
] as const;

/**
 * DeviceSpecialization - The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 *
 * @see https://hl7.org/fhir/R4/devicespecialization.html
 *
 * @example
 * const deviceSpecialization = new DeviceSpecialization({
 *   // ... properties
 * });
 */
export class DeviceSpecialization extends BackboneElement implements IDeviceSpecialization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The standard that is used to operate and communicate */
  systemType: ICodeableConcept;

  /** The version of the standard that is used to operate and communicate */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceSpecialization>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_SPECIALIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceSpecialization from a JSON object
   */
  static fromJSON(json: IDeviceSpecialization): DeviceSpecialization {
    return new DeviceSpecialization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceSpecialization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceSpecialization>): DeviceSpecialization {
    return new DeviceSpecialization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceSpecialization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceSpecialization) => Partial<IDeviceSpecialization>): DeviceSpecialization {
    const currentData = this.toJSON();
    return new DeviceSpecialization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceSpecialization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceSpecialization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_SPECIALIZATION_PROPERTIES);
    return result as IDeviceSpecialization;
  }

  /**
   * Create a deep clone of this DeviceSpecialization
   */
  clone(): DeviceSpecialization {
    return new DeviceSpecialization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceSpecialization
   */
  toString(): string {
    const parts: string[] = ['DeviceSpecialization'];
    return parts.join(', ');
  }
}
