import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeIngredient,
  IRatio,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeIngredient */
const MEDICATION_KNOWLEDGE_INGREDIENT_PROPERTIES = [
  'itemCodeableConcept',
  'itemReference',
  'isActive',
  '_isActive',
  'strength',
] as const;

/**
 * MedicationKnowledgeIngredient - Active or inactive ingredient
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeingredient.html
 *
 * @example
 * const medicationKnowledgeIngredient = new MedicationKnowledgeIngredient({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeIngredient extends BackboneElement implements IMedicationKnowledgeIngredient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Medication(s) or substance(s) contained in the medication */
  itemCodeableConcept?: ICodeableConcept;

  /** Medication(s) or substance(s) contained in the medication */
  itemReference?: IReference;

  /** Active ingredient indicator */
  isActive?: boolean;

  /** Extension for isActive */
  _isActive?: IElement;

  /** Quantity of ingredient present */
  strength?: IRatio;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeIngredient>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeIngredient from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeIngredient): MedicationKnowledgeIngredient {
    return new MedicationKnowledgeIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeIngredient>): MedicationKnowledgeIngredient {
    return new MedicationKnowledgeIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeIngredient) => Partial<IMedicationKnowledgeIngredient>): MedicationKnowledgeIngredient {
    const currentData = this.toJSON();
    return new MedicationKnowledgeIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeIngredient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_INGREDIENT_PROPERTIES);
    return result as IMedicationKnowledgeIngredient;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeIngredient
   */
  clone(): MedicationKnowledgeIngredient {
    return new MedicationKnowledgeIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeIngredient
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeIngredient'];
    return parts.join(', ');
  }
}
