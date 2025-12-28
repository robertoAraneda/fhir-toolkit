import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeRegulatorySubstitution,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeRegulatorySubstitution */
const MEDICATION_KNOWLEDGE_REGULATORY_SUBSTITUTION_PROPERTIES = [
  'type',
  'allowed',
  '_allowed',
] as const;

/**
 * MedicationKnowledgeRegulatorySubstitution - Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeregulatorysubstitution.html
 *
 * @example
 * const medicationKnowledgeRegulatorySubstitution = new MedicationKnowledgeRegulatorySubstitution({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement implements IMedicationKnowledgeRegulatorySubstitution {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specifies the type of substitution allowed */
  type: ICodeableConcept;

  /** Specifies if regulation allows for changes in the medication when dispensing */
  allowed: boolean;

  /** Extension for allowed */
  _allowed?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeRegulatorySubstitution>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_REGULATORY_SUBSTITUTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeRegulatorySubstitution from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeRegulatorySubstitution): MedicationKnowledgeRegulatorySubstitution {
    return new MedicationKnowledgeRegulatorySubstitution(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeRegulatorySubstitution with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeRegulatorySubstitution>): MedicationKnowledgeRegulatorySubstitution {
    return new MedicationKnowledgeRegulatorySubstitution({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeRegulatorySubstitution by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeRegulatorySubstitution) => Partial<IMedicationKnowledgeRegulatorySubstitution>): MedicationKnowledgeRegulatorySubstitution {
    const currentData = this.toJSON();
    return new MedicationKnowledgeRegulatorySubstitution({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeRegulatorySubstitution)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeRegulatorySubstitution {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_REGULATORY_SUBSTITUTION_PROPERTIES);
    return result as IMedicationKnowledgeRegulatorySubstitution;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeRegulatorySubstitution
   */
  clone(): MedicationKnowledgeRegulatorySubstitution {
    return new MedicationKnowledgeRegulatorySubstitution(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeRegulatorySubstitution
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeRegulatorySubstitution'];
    return parts.join(', ');
  }
}
