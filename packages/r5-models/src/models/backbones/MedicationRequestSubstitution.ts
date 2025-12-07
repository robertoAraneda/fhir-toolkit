import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationRequestSubstitution,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationRequestSubstitution */
const MEDICATION_REQUEST_SUBSTITUTION_PROPERTIES = [
  'allowedBoolean',
  '_allowedBoolean',
  'allowedCodeableConcept',
  'reason',
] as const;

/**
 * MedicationRequestSubstitution - Any restrictions on medication substitution
 *
 * @see https://hl7.org/fhir/R4/medicationrequestsubstitution.html
 *
 * @example
 * const medicationRequestSubstitution = new MedicationRequestSubstitution({
 *   // ... properties
 * });
 */
export class MedicationRequestSubstitution extends BackboneElement implements IMedicationRequestSubstitution {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether substitution is allowed or not */
  allowedBoolean?: boolean;

  /** Extension for allowedBoolean */
  _allowedBoolean?: IElement;

  /** Whether substitution is allowed or not */
  allowedCodeableConcept?: ICodeableConcept;

  /** Why should (not) substitution be made */
  reason?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationRequestSubstitution>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_REQUEST_SUBSTITUTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationRequestSubstitution from a JSON object
   */
  static fromJSON(json: IMedicationRequestSubstitution): MedicationRequestSubstitution {
    return new MedicationRequestSubstitution(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationRequestSubstitution with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationRequestSubstitution>): MedicationRequestSubstitution {
    return new MedicationRequestSubstitution({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationRequestSubstitution by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationRequestSubstitution) => Partial<IMedicationRequestSubstitution>): MedicationRequestSubstitution {
    const currentData = this.toJSON();
    return new MedicationRequestSubstitution({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationRequestSubstitution)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationRequestSubstitution {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_REQUEST_SUBSTITUTION_PROPERTIES);
    return result as IMedicationRequestSubstitution;
  }

  /**
   * Create a deep clone of this MedicationRequestSubstitution
   */
  clone(): MedicationRequestSubstitution {
    return new MedicationRequestSubstitution(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationRequestSubstitution
   */
  toString(): string {
    const parts: string[] = ['MedicationRequestSubstitution'];
    return parts.join(', ');
  }
}
