import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMedicationBatch,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationBatch */
const MEDICATION_BATCH_PROPERTIES = [
  'lotNumber',
  '_lotNumber',
  'expirationDate',
  '_expirationDate',
] as const;

/**
 * MedicationBatch - Details about packaged medications
 *
 * @see https://hl7.org/fhir/R4/medicationbatch.html
 *
 * @example
 * const medicationBatch = new MedicationBatch({
 *   // ... properties
 * });
 */
export class MedicationBatch extends BackboneElement implements IMedicationBatch {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier assigned to batch */
  lotNumber?: string;

  /** Extension for lotNumber */
  _lotNumber?: IElement;

  /** When batch will expire */
  expirationDate?: string;

  /** Extension for expirationDate */
  _expirationDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationBatch>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_BATCH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationBatch from a JSON object
   */
  static fromJSON(json: IMedicationBatch): MedicationBatch {
    return new MedicationBatch(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationBatch with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationBatch>): MedicationBatch {
    return new MedicationBatch({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationBatch by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationBatch) => Partial<IMedicationBatch>): MedicationBatch {
    const currentData = this.toJSON();
    return new MedicationBatch({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationBatch)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationBatch {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_BATCH_PROPERTIES);
    return result as IMedicationBatch;
  }

  /**
   * Create a deep clone of this MedicationBatch
   */
  clone(): MedicationBatch {
    return new MedicationBatch(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationBatch
   */
  toString(): string {
    const parts: string[] = ['MedicationBatch'];
    return parts.join(', ');
  }
}
