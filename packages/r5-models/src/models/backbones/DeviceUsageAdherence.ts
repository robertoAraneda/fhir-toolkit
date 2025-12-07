import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceUsageAdherence,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceUsageAdherence */
const DEVICE_USAGE_ADHERENCE_PROPERTIES = [
  'code',
  'reason',
] as const;

/**
 * DeviceUsageAdherence - How device is being used
 *
 * @see https://hl7.org/fhir/R4/deviceusageadherence.html
 *
 * @example
 * const deviceUsageAdherence = new DeviceUsageAdherence({
 *   // ... properties
 * });
 */
export class DeviceUsageAdherence extends BackboneElement implements IDeviceUsageAdherence {

  // ============================================================================
  // Properties
  // ============================================================================

  /** always | never | sometimes */
  code: ICodeableConcept;

  /** lost | stolen | prescribed | broken | burned | forgot */
  reason: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceUsageAdherence>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_USAGE_ADHERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceUsageAdherence from a JSON object
   */
  static fromJSON(json: IDeviceUsageAdherence): DeviceUsageAdherence {
    return new DeviceUsageAdherence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceUsageAdherence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceUsageAdherence>): DeviceUsageAdherence {
    return new DeviceUsageAdherence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceUsageAdherence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceUsageAdherence) => Partial<IDeviceUsageAdherence>): DeviceUsageAdherence {
    const currentData = this.toJSON();
    return new DeviceUsageAdherence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceUsageAdherence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceUsageAdherence {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_USAGE_ADHERENCE_PROPERTIES);
    return result as IDeviceUsageAdherence;
  }

  /**
   * Create a deep clone of this DeviceUsageAdherence
   */
  clone(): DeviceUsageAdherence {
    return new DeviceUsageAdherence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceUsageAdherence
   */
  toString(): string {
    const parts: string[] = ['DeviceUsageAdherence'];
    return parts.join(', ');
  }
}
