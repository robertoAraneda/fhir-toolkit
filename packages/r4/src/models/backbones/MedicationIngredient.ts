import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationIngredient,
  IRatio,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationIngredient */
const MEDICATION_INGREDIENT_PROPERTIES = [
  'itemCodeableConcept',
  'itemReference',
  'isActive',
  '_isActive',
  'strength',
] as const;

/**
 * MedicationIngredient - Active or inactive ingredient
 *
 * @see https://hl7.org/fhir/R4/medicationingredient.html
 *
 * @example
 * const medicationIngredient = new MedicationIngredient({
 *   // ... properties
 * });
 */
export class MedicationIngredient extends BackboneElement implements IMedicationIngredient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual ingredient or content */
  itemCodeableConcept?: ICodeableConcept;

  /** The actual ingredient or content */
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

  constructor(data?: Partial<IMedicationIngredient>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationIngredient from a JSON object
   */
  static fromJSON(json: IMedicationIngredient): MedicationIngredient {
    return new MedicationIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationIngredient>): MedicationIngredient {
    return new MedicationIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationIngredient) => Partial<IMedicationIngredient>): MedicationIngredient {
    const currentData = this.toJSON();
    return new MedicationIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationIngredient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_INGREDIENT_PROPERTIES);
    return result as IMedicationIngredient;
  }

  /**
   * Create a deep clone of this MedicationIngredient
   */
  clone(): MedicationIngredient {
    return new MedicationIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationIngredient
   */
  toString(): string {
    const parts: string[] = ['MedicationIngredient'];
    return parts.join(', ');
  }
}
