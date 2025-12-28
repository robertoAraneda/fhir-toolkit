import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicationKnowledgeDefinitionalIngredient,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeDefinitionalIngredient */
const MEDICATION_KNOWLEDGE_DEFINITIONAL_INGREDIENT_PROPERTIES = [
  'item',
  'type',
  'strengthRatio',
  'strengthCodeableConcept',
  'strengthQuantity',
] as const;

/**
 * MedicationKnowledgeDefinitionalIngredient - Active or inactive ingredient
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgedefinitionalingredient.html
 *
 * @example
 * const medicationKnowledgeDefinitionalIngredient = new MedicationKnowledgeDefinitionalIngredient({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeDefinitionalIngredient extends BackboneElement implements IMedicationKnowledgeDefinitionalIngredient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Substances contained in the medication */
  item: ICodeableReference;

  /** A code that defines the type of ingredient, active, base, etc */
  type?: ICodeableConcept;

  /** Quantity of ingredient present */
  strengthRatio?: IRatio;

  /** Quantity of ingredient present */
  strengthCodeableConcept?: ICodeableConcept;

  /** Quantity of ingredient present */
  strengthQuantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeDefinitionalIngredient>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_DEFINITIONAL_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeDefinitionalIngredient from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeDefinitionalIngredient): MedicationKnowledgeDefinitionalIngredient {
    return new MedicationKnowledgeDefinitionalIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeDefinitionalIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeDefinitionalIngredient>): MedicationKnowledgeDefinitionalIngredient {
    return new MedicationKnowledgeDefinitionalIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeDefinitionalIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeDefinitionalIngredient) => Partial<IMedicationKnowledgeDefinitionalIngredient>): MedicationKnowledgeDefinitionalIngredient {
    const currentData = this.toJSON();
    return new MedicationKnowledgeDefinitionalIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeDefinitionalIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeDefinitionalIngredient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_DEFINITIONAL_INGREDIENT_PROPERTIES);
    return result as IMedicationKnowledgeDefinitionalIngredient;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeDefinitionalIngredient
   */
  clone(): MedicationKnowledgeDefinitionalIngredient {
    return new MedicationKnowledgeDefinitionalIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeDefinitionalIngredient
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeDefinitionalIngredient'];
    return parts.join(', ');
  }
}
