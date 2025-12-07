import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceVersion,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceVersion */
const DEVICE_VERSION_PROPERTIES = [
  'type',
  'component',
  'value',
  '_value',
] as const;

/**
 * DeviceVersion - The actual design of the device or software version running on the device
 *
 * @see https://hl7.org/fhir/R4/deviceversion.html
 *
 * @example
 * const deviceVersion = new DeviceVersion({
 *   // ... properties
 * });
 */
export class DeviceVersion extends BackboneElement implements IDeviceVersion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of the device version, e.g. manufacturer, approved, internal */
  type?: ICodeableConcept;

  /** A single component of the device version */
  component?: IIdentifier;

  /** The version text */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceVersion>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_VERSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceVersion from a JSON object
   */
  static fromJSON(json: IDeviceVersion): DeviceVersion {
    return new DeviceVersion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceVersion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceVersion>): DeviceVersion {
    return new DeviceVersion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceVersion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceVersion) => Partial<IDeviceVersion>): DeviceVersion {
    const currentData = this.toJSON();
    return new DeviceVersion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceVersion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceVersion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_VERSION_PROPERTIES);
    return result as IDeviceVersion;
  }

  /**
   * Create a deep clone of this DeviceVersion
   */
  clone(): DeviceVersion {
    return new DeviceVersion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceVersion
   */
  toString(): string {
    const parts: string[] = ['DeviceVersion'];
    return parts.join(', ');
  }
}
