import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDispensePerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDispensePerformer */
const DEVICE_DISPENSE_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * DeviceDispensePerformer - Who performed event
 *
 * @see https://hl7.org/fhir/R4/devicedispenseperformer.html
 *
 * @example
 * const deviceDispensePerformer = new DeviceDispensePerformer({
 *   // ... properties
 * });
 */
export class DeviceDispensePerformer extends BackboneElement implements IDeviceDispensePerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Who performed the dispense and what they did */
  function?: ICodeableConcept;

  /** Individual who was performing */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDispensePerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DISPENSE_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDispensePerformer from a JSON object
   */
  static fromJSON(json: IDeviceDispensePerformer): DeviceDispensePerformer {
    return new DeviceDispensePerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDispensePerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDispensePerformer>): DeviceDispensePerformer {
    return new DeviceDispensePerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDispensePerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDispensePerformer) => Partial<IDeviceDispensePerformer>): DeviceDispensePerformer {
    const currentData = this.toJSON();
    return new DeviceDispensePerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDispensePerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDispensePerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DISPENSE_PERFORMER_PROPERTIES);
    return result as IDeviceDispensePerformer;
  }

  /**
   * Create a deep clone of this DeviceDispensePerformer
   */
  clone(): DeviceDispensePerformer {
    return new DeviceDispensePerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDispensePerformer
   */
  toString(): string {
    const parts: string[] = ['DeviceDispensePerformer'];
    return parts.join(', ');
  }
}
