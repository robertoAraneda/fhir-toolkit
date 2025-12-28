import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionVersion,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionVersion */
const DEVICE_DEFINITION_VERSION_PROPERTIES = [
  'type',
  'component',
  'value',
  '_value',
] as const;

/**
 * DeviceDefinitionVersion - The version of the device or software
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionversion.html
 *
 * @example
 * const deviceDefinitionVersion = new DeviceDefinitionVersion({
 *   // ... properties
 * });
 */
export class DeviceDefinitionVersion extends BackboneElement implements IDeviceDefinitionVersion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of the device version, e.g. manufacturer, approved, internal */
  type?: ICodeableConcept;

  /** The hardware or software module of the device to which the version applies */
  component?: IIdentifier;

  /** The version text */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionVersion>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_VERSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionVersion from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionVersion): DeviceDefinitionVersion {
    return new DeviceDefinitionVersion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionVersion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionVersion>): DeviceDefinitionVersion {
    return new DeviceDefinitionVersion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionVersion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionVersion) => Partial<IDeviceDefinitionVersion>): DeviceDefinitionVersion {
    const currentData = this.toJSON();
    return new DeviceDefinitionVersion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionVersion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionVersion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_VERSION_PROPERTIES);
    return result as IDeviceDefinitionVersion;
  }

  /**
   * Create a deep clone of this DeviceDefinitionVersion
   */
  clone(): DeviceDefinitionVersion {
    return new DeviceDefinitionVersion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionVersion
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionVersion'];
    return parts.join(', ');
  }
}
