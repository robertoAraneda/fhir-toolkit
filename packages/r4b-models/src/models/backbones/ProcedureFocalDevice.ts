import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IProcedureFocalDevice,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProcedureFocalDevice */
const PROCEDURE_FOCAL_DEVICE_PROPERTIES = [
  'action',
  'manipulated',
] as const;

/**
 * ProcedureFocalDevice - Manipulated, implanted, or removed device
 *
 * @see https://hl7.org/fhir/R4B/procedurefocaldevice.html
 *
 * @example
 * const procedureFocalDevice = new ProcedureFocalDevice({
 *   // ... properties
 * });
 */
export class ProcedureFocalDevice extends BackboneElement implements IProcedureFocalDevice {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Kind of change to device */
  action?: ICodeableConcept;

  /** Device that was changed */
  manipulated: IReference<'Device'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProcedureFocalDevice>) {
    super(data);
    if (data) {
      this.assignProps(data, PROCEDURE_FOCAL_DEVICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProcedureFocalDevice from a JSON object
   */
  static fromJSON(json: IProcedureFocalDevice): ProcedureFocalDevice {
    return new ProcedureFocalDevice(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProcedureFocalDevice with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProcedureFocalDevice>): ProcedureFocalDevice {
    return new ProcedureFocalDevice({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProcedureFocalDevice by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProcedureFocalDevice) => Partial<IProcedureFocalDevice>): ProcedureFocalDevice {
    const currentData = this.toJSON();
    return new ProcedureFocalDevice({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProcedureFocalDevice)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProcedureFocalDevice {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PROCEDURE_FOCAL_DEVICE_PROPERTIES);
    return result as IProcedureFocalDevice;
  }

  /**
   * Create a deep clone of this ProcedureFocalDevice
   */
  clone(): ProcedureFocalDevice {
    return new ProcedureFocalDevice(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProcedureFocalDevice
   */
  toString(): string {
    const parts: string[] = ['ProcedureFocalDevice'];
    return parts.join(', ');
  }
}
