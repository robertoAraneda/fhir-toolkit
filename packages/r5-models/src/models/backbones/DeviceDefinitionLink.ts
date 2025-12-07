import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  ICoding,
  IDeviceDefinitionLink,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionLink */
const DEVICE_DEFINITION_LINK_PROPERTIES = [
  'relation',
  'relatedDevice',
] as const;

/**
 * DeviceDefinitionLink - An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionlink.html
 *
 * @example
 * const deviceDefinitionLink = new DeviceDefinitionLink({
 *   // ... properties
 * });
 */
export class DeviceDefinitionLink extends BackboneElement implements IDeviceDefinitionLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type indicates the relationship of the related device to the device instance */
  relation: ICoding;

  /** A reference to the linked device */
  relatedDevice: ICodeableReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionLink>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionLink from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionLink): DeviceDefinitionLink {
    return new DeviceDefinitionLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionLink>): DeviceDefinitionLink {
    return new DeviceDefinitionLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionLink) => Partial<IDeviceDefinitionLink>): DeviceDefinitionLink {
    const currentData = this.toJSON();
    return new DeviceDefinitionLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_LINK_PROPERTIES);
    return result as IDeviceDefinitionLink;
  }

  /**
   * Create a deep clone of this DeviceDefinitionLink
   */
  clone(): DeviceDefinitionLink {
    return new DeviceDefinitionLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionLink
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionLink'];
    return parts.join(', ');
  }
}
