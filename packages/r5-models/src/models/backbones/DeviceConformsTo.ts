import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceConformsTo,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceConformsTo */
const DEVICE_CONFORMS_TO_PROPERTIES = [
  'category',
  'specification',
  'version',
  '_version',
] as const;

/**
 * DeviceConformsTo - Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 *
 * @see https://hl7.org/fhir/R5/deviceconformsto.html
 *
 * @example
 * const deviceConformsTo = new DeviceConformsTo({
 *   // ... properties
 * });
 */
export class DeviceConformsTo extends BackboneElement implements IDeviceConformsTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Describes the common type of the standard, specification, or formal guidance.  communication | performance | measurement */
  category?: ICodeableConcept;

  /** Identifies the standard, specification, or formal guidance that the device adheres to */
  specification: ICodeableConcept;

  /** Specific form or variant of the standard */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceConformsTo>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_CONFORMS_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceConformsTo from a JSON object
   */
  static fromJSON(json: IDeviceConformsTo): DeviceConformsTo {
    return new DeviceConformsTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceConformsTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceConformsTo>): DeviceConformsTo {
    return new DeviceConformsTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceConformsTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceConformsTo) => Partial<IDeviceConformsTo>): DeviceConformsTo {
    const currentData = this.toJSON();
    return new DeviceConformsTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceConformsTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceConformsTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_CONFORMS_TO_PROPERTIES);
    return result as IDeviceConformsTo;
  }

  /**
   * Create a deep clone of this DeviceConformsTo
   */
  clone(): DeviceConformsTo {
    return new DeviceConformsTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceConformsTo
   */
  toString(): string {
    const parts: string[] = ['DeviceConformsTo'];
    return parts.join(', ');
  }
}
