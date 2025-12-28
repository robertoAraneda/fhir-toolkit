import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationDispensePerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationDispensePerformer */
const MEDICATION_DISPENSE_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * MedicationDispensePerformer - Who performed event
 *
 * @see https://hl7.org/fhir/R5/medicationdispenseperformer.html
 *
 * @example
 * const medicationDispensePerformer = new MedicationDispensePerformer({
 *   // ... properties
 * });
 */
export class MedicationDispensePerformer extends BackboneElement implements IMedicationDispensePerformer {

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

  constructor(data?: Partial<IMedicationDispensePerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_DISPENSE_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationDispensePerformer from a JSON object
   */
  static fromJSON(json: IMedicationDispensePerformer): MedicationDispensePerformer {
    return new MedicationDispensePerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationDispensePerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationDispensePerformer>): MedicationDispensePerformer {
    return new MedicationDispensePerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationDispensePerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationDispensePerformer) => Partial<IMedicationDispensePerformer>): MedicationDispensePerformer {
    const currentData = this.toJSON();
    return new MedicationDispensePerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationDispensePerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationDispensePerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_DISPENSE_PERFORMER_PROPERTIES);
    return result as IMedicationDispensePerformer;
  }

  /**
   * Create a deep clone of this MedicationDispensePerformer
   */
  clone(): MedicationDispensePerformer {
    return new MedicationDispensePerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationDispensePerformer
   */
  toString(): string {
    const parts: string[] = ['MedicationDispensePerformer'];
    return parts.join(', ');
  }
}
