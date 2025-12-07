import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationDispenseSubstitution,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationDispenseSubstitution */
const MEDICATION_DISPENSE_SUBSTITUTION_PROPERTIES = [
  'wasSubstituted',
  '_wasSubstituted',
  'type',
  'reason',
  'responsibleParty',
] as const;

/**
 * MedicationDispenseSubstitution - Whether a substitution was performed on the dispense
 *
 * @see https://hl7.org/fhir/R4/medicationdispensesubstitution.html
 *
 * @example
 * const medicationDispenseSubstitution = new MedicationDispenseSubstitution({
 *   // ... properties
 * });
 */
export class MedicationDispenseSubstitution extends BackboneElement implements IMedicationDispenseSubstitution {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether a substitution was or was not performed on the dispense */
  wasSubstituted: boolean;

  /** Extension for wasSubstituted */
  _wasSubstituted?: IElement;

  /** Code signifying whether a different drug was dispensed from what was prescribed */
  type?: ICodeableConcept;

  /** Why was substitution made */
  reason?: ICodeableConcept[];

  /** Who is responsible for the substitution */
  responsibleParty?: IReference<'Practitioner' | 'PractitionerRole'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationDispenseSubstitution>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_DISPENSE_SUBSTITUTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationDispenseSubstitution from a JSON object
   */
  static fromJSON(json: IMedicationDispenseSubstitution): MedicationDispenseSubstitution {
    return new MedicationDispenseSubstitution(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationDispenseSubstitution with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationDispenseSubstitution>): MedicationDispenseSubstitution {
    return new MedicationDispenseSubstitution({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationDispenseSubstitution by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationDispenseSubstitution) => Partial<IMedicationDispenseSubstitution>): MedicationDispenseSubstitution {
    const currentData = this.toJSON();
    return new MedicationDispenseSubstitution({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationDispenseSubstitution)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationDispenseSubstitution {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_DISPENSE_SUBSTITUTION_PROPERTIES);
    return result as IMedicationDispenseSubstitution;
  }

  /**
   * Create a deep clone of this MedicationDispenseSubstitution
   */
  clone(): MedicationDispenseSubstitution {
    return new MedicationDispenseSubstitution(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationDispenseSubstitution
   */
  toString(): string {
    const parts: string[] = ['MedicationDispenseSubstitution'];
    return parts.join(', ');
  }
}
