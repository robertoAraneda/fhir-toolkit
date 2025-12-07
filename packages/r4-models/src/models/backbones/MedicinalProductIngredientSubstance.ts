import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  IMedicinalProductIngredientSubstance,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIngredientSubstance */
const MEDICINAL_PRODUCT_INGREDIENT_SUBSTANCE_PROPERTIES = [
  'code',
  'strength',
] as const;

/**
 * MedicinalProductIngredientSubstance - The ingredient substance
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientsubstance.html
 *
 * @example
 * const medicinalProductIngredientSubstance = new MedicinalProductIngredientSubstance({
 *   // ... properties
 * });
 */
export class MedicinalProductIngredientSubstance extends BackboneElement implements IMedicinalProductIngredientSubstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The ingredient substance */
  code: ICodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: IMedicinalProductIngredientSpecifiedSubstanceStrength[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductIngredientSubstance>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INGREDIENT_SUBSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIngredientSubstance from a JSON object
   */
  static fromJSON(json: IMedicinalProductIngredientSubstance): MedicinalProductIngredientSubstance {
    return new MedicinalProductIngredientSubstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIngredientSubstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIngredientSubstance>): MedicinalProductIngredientSubstance {
    return new MedicinalProductIngredientSubstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIngredientSubstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIngredientSubstance) => Partial<IMedicinalProductIngredientSubstance>): MedicinalProductIngredientSubstance {
    const currentData = this.toJSON();
    return new MedicinalProductIngredientSubstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIngredientSubstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIngredientSubstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INGREDIENT_SUBSTANCE_PROPERTIES);
    return result as IMedicinalProductIngredientSubstance;
  }

  /**
   * Create a deep clone of this MedicinalProductIngredientSubstance
   */
  clone(): MedicinalProductIngredientSubstance {
    return new MedicinalProductIngredientSubstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIngredientSubstance
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIngredientSubstance'];
    return parts.join(', ');
  }
}
