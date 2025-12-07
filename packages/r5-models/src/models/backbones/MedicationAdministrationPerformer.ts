import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicationAdministrationPerformer,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationAdministrationPerformer */
const MEDICATION_ADMINISTRATION_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * MedicationAdministrationPerformer - Who or what performed the medication administration and what type of performance they did
 *
 * @see https://hl7.org/fhir/R4/medicationadministrationperformer.html
 *
 * @example
 * const medicationAdministrationPerformer = new MedicationAdministrationPerformer({
 *   // ... properties
 * });
 */
export class MedicationAdministrationPerformer extends BackboneElement implements IMedicationAdministrationPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performance */
  function?: ICodeableConcept;

  /** Who or what performed the medication administration */
  actor: ICodeableReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationAdministrationPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_ADMINISTRATION_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationAdministrationPerformer from a JSON object
   */
  static fromJSON(json: IMedicationAdministrationPerformer): MedicationAdministrationPerformer {
    return new MedicationAdministrationPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationAdministrationPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationAdministrationPerformer>): MedicationAdministrationPerformer {
    return new MedicationAdministrationPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationAdministrationPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationAdministrationPerformer) => Partial<IMedicationAdministrationPerformer>): MedicationAdministrationPerformer {
    const currentData = this.toJSON();
    return new MedicationAdministrationPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationAdministrationPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationAdministrationPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_ADMINISTRATION_PERFORMER_PROPERTIES);
    return result as IMedicationAdministrationPerformer;
  }

  /**
   * Create a deep clone of this MedicationAdministrationPerformer
   */
  clone(): MedicationAdministrationPerformer {
    return new MedicationAdministrationPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationAdministrationPerformer
   */
  toString(): string {
    const parts: string[] = ['MedicationAdministrationPerformer'];
    return parts.join(', ');
  }
}
