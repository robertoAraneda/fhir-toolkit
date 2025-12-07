import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationStatementAdherence,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationStatementAdherence */
const MEDICATION_STATEMENT_ADHERENCE_PROPERTIES = [
  'code',
  'reason',
] as const;

/**
 * MedicationStatementAdherence - Indicates whether the medication is or is not being consumed or administered
 *
 * @see https://hl7.org/fhir/R4/medicationstatementadherence.html
 *
 * @example
 * const medicationStatementAdherence = new MedicationStatementAdherence({
 *   // ... properties
 * });
 */
export class MedicationStatementAdherence extends BackboneElement implements IMedicationStatementAdherence {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of adherence */
  code: ICodeableConcept;

  /** Details of the reason for the current use of the medication */
  reason?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationStatementAdherence>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_STATEMENT_ADHERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationStatementAdherence from a JSON object
   */
  static fromJSON(json: IMedicationStatementAdherence): MedicationStatementAdherence {
    return new MedicationStatementAdherence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationStatementAdherence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationStatementAdherence>): MedicationStatementAdherence {
    return new MedicationStatementAdherence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationStatementAdherence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationStatementAdherence) => Partial<IMedicationStatementAdherence>): MedicationStatementAdherence {
    const currentData = this.toJSON();
    return new MedicationStatementAdherence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationStatementAdherence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationStatementAdherence {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_STATEMENT_ADHERENCE_PROPERTIES);
    return result as IMedicationStatementAdherence;
  }

  /**
   * Create a deep clone of this MedicationStatementAdherence
   */
  clone(): MedicationStatementAdherence {
    return new MedicationStatementAdherence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationStatementAdherence
   */
  toString(): string {
    const parts: string[] = ['MedicationStatementAdherence'];
    return parts.join(', ');
  }
}
