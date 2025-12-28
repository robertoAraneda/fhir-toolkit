import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeDefinitional,
  IMedicationKnowledgeDefinitionalDrugCharacteristic,
  IMedicationKnowledgeDefinitionalIngredient,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeDefinitional */
const MEDICATION_KNOWLEDGE_DEFINITIONAL_PROPERTIES = [
  'definition',
  'doseForm',
  'intendedRoute',
  'ingredient',
  'drugCharacteristic',
] as const;

/**
 * MedicationKnowledgeDefinitional - Minimal definition information about the medication
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgedefinitional.html
 *
 * @example
 * const medicationKnowledgeDefinitional = new MedicationKnowledgeDefinitional({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeDefinitional extends BackboneElement implements IMedicationKnowledgeDefinitional {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Definitional resources that provide more information about this medication */
  definition?: IReference<'MedicinalProductDefinition'>[];

  /** powder | tablets | capsule + */
  doseForm?: ICodeableConcept;

  /** The intended or approved route of administration */
  intendedRoute?: ICodeableConcept[];

  /** Active or inactive ingredient */
  ingredient?: IMedicationKnowledgeDefinitionalIngredient[];

  /** Specifies descriptive properties of the medicine */
  drugCharacteristic?: IMedicationKnowledgeDefinitionalDrugCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeDefinitional>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_DEFINITIONAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeDefinitional from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeDefinitional): MedicationKnowledgeDefinitional {
    return new MedicationKnowledgeDefinitional(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeDefinitional with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeDefinitional>): MedicationKnowledgeDefinitional {
    return new MedicationKnowledgeDefinitional({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeDefinitional by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeDefinitional) => Partial<IMedicationKnowledgeDefinitional>): MedicationKnowledgeDefinitional {
    const currentData = this.toJSON();
    return new MedicationKnowledgeDefinitional({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeDefinitional)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeDefinitional {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_DEFINITIONAL_PROPERTIES);
    return result as IMedicationKnowledgeDefinitional;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeDefinitional
   */
  clone(): MedicationKnowledgeDefinitional {
    return new MedicationKnowledgeDefinitional(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeDefinitional
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeDefinitional'];
    return parts.join(', ');
  }
}
