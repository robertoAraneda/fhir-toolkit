import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDuration,
  IMedicationRequestDispenseRequestInitialFill,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationRequestDispenseRequestInitialFill */
const MEDICATION_REQUEST_DISPENSE_REQUEST_INITIAL_FILL_PROPERTIES = [
  'quantity',
  'duration',
] as const;

/**
 * MedicationRequestDispenseRequestInitialFill - First fill details
 *
 * @see https://hl7.org/fhir/R4/medicationrequestdispenserequestinitialfill.html
 *
 * @example
 * const medicationRequestDispenseRequestInitialFill = new MedicationRequestDispenseRequestInitialFill({
 *   // ... properties
 * });
 */
export class MedicationRequestDispenseRequestInitialFill extends BackboneElement implements IMedicationRequestDispenseRequestInitialFill {

  // ============================================================================
  // Properties
  // ============================================================================

  /** First fill quantity */
  quantity?: IQuantity;

  /** First fill duration */
  duration?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationRequestDispenseRequestInitialFill>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_REQUEST_DISPENSE_REQUEST_INITIAL_FILL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationRequestDispenseRequestInitialFill from a JSON object
   */
  static fromJSON(json: IMedicationRequestDispenseRequestInitialFill): MedicationRequestDispenseRequestInitialFill {
    return new MedicationRequestDispenseRequestInitialFill(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationRequestDispenseRequestInitialFill with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationRequestDispenseRequestInitialFill>): MedicationRequestDispenseRequestInitialFill {
    return new MedicationRequestDispenseRequestInitialFill({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationRequestDispenseRequestInitialFill by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationRequestDispenseRequestInitialFill) => Partial<IMedicationRequestDispenseRequestInitialFill>): MedicationRequestDispenseRequestInitialFill {
    const currentData = this.toJSON();
    return new MedicationRequestDispenseRequestInitialFill({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationRequestDispenseRequestInitialFill)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationRequestDispenseRequestInitialFill {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_REQUEST_DISPENSE_REQUEST_INITIAL_FILL_PROPERTIES);
    return result as IMedicationRequestDispenseRequestInitialFill;
  }

  /**
   * Create a deep clone of this MedicationRequestDispenseRequestInitialFill
   */
  clone(): MedicationRequestDispenseRequestInitialFill {
    return new MedicationRequestDispenseRequestInitialFill(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationRequestDispenseRequestInitialFill
   */
  toString(): string {
    const parts: string[] = ['MedicationRequestDispenseRequestInitialFill'];
    return parts.join(', ');
  }
}
