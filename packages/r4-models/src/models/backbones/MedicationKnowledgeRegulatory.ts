import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRegulatoryMaxDispense,
  IMedicationKnowledgeRegulatorySchedule,
  IMedicationKnowledgeRegulatorySubstitution,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeRegulatory */
const MEDICATION_KNOWLEDGE_REGULATORY_PROPERTIES = [
  'regulatoryAuthority',
  'substitution',
  'schedule',
  'maxDispense',
] as const;

/**
 * MedicationKnowledgeRegulatory - Regulatory information about a medication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeregulatory.html
 *
 * @example
 * const medicationKnowledgeRegulatory = new MedicationKnowledgeRegulatory({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeRegulatory extends BackboneElement implements IMedicationKnowledgeRegulatory {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specifies the authority of the regulation */
  regulatoryAuthority: IReference<'Organization'>;

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective */
  substitution?: IMedicationKnowledgeRegulatorySubstitution[];

  /** Specifies the schedule of a medication in jurisdiction */
  schedule?: IMedicationKnowledgeRegulatorySchedule[];

  /** The maximum number of units of the medication that can be dispensed in a period */
  maxDispense?: IMedicationKnowledgeRegulatoryMaxDispense;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeRegulatory>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_REGULATORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeRegulatory from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeRegulatory): MedicationKnowledgeRegulatory {
    return new MedicationKnowledgeRegulatory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeRegulatory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeRegulatory>): MedicationKnowledgeRegulatory {
    return new MedicationKnowledgeRegulatory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeRegulatory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeRegulatory) => Partial<IMedicationKnowledgeRegulatory>): MedicationKnowledgeRegulatory {
    const currentData = this.toJSON();
    return new MedicationKnowledgeRegulatory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeRegulatory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeRegulatory {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_REGULATORY_PROPERTIES);
    return result as IMedicationKnowledgeRegulatory;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeRegulatory
   */
  clone(): MedicationKnowledgeRegulatory {
    return new MedicationKnowledgeRegulatory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeRegulatory
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeRegulatory'];
    return parts.join(', ');
  }
}
