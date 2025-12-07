import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstance,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIngredientSpecifiedSubstance */
const MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_PROPERTIES = [
  'code',
  'group',
  'confidentiality',
  'strength',
] as const;

/**
 * MedicinalProductIngredientSpecifiedSubstance - A specified substance that comprises this ingredient
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstance.html
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstance = new MedicinalProductIngredientSpecifiedSubstance({
 *   // ... properties
 * });
 */
export class MedicinalProductIngredientSpecifiedSubstance extends BackboneElement implements IMedicinalProductIngredientSpecifiedSubstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specified substance */
  code: ICodeableConcept;

  /** The group of specified substance, e.g. group 1 to 4 */
  group: ICodeableConcept;

  /** Confidentiality level of the specified substance as the ingredient */
  confidentiality?: ICodeableConcept;

  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: IMedicinalProductIngredientSpecifiedSubstanceStrength[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductIngredientSpecifiedSubstance>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIngredientSpecifiedSubstance from a JSON object
   */
  static fromJSON(json: IMedicinalProductIngredientSpecifiedSubstance): MedicinalProductIngredientSpecifiedSubstance {
    return new MedicinalProductIngredientSpecifiedSubstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIngredientSpecifiedSubstance>): MedicinalProductIngredientSpecifiedSubstance {
    return new MedicinalProductIngredientSpecifiedSubstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIngredientSpecifiedSubstance) => Partial<IMedicinalProductIngredientSpecifiedSubstance>): MedicinalProductIngredientSpecifiedSubstance {
    const currentData = this.toJSON();
    return new MedicinalProductIngredientSpecifiedSubstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIngredientSpecifiedSubstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIngredientSpecifiedSubstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_PROPERTIES);
    return result as IMedicinalProductIngredientSpecifiedSubstance;
  }

  /**
   * Create a deep clone of this MedicinalProductIngredientSpecifiedSubstance
   */
  clone(): MedicinalProductIngredientSpecifiedSubstance {
    return new MedicinalProductIngredientSpecifiedSubstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIngredientSpecifiedSubstance
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIngredientSpecifiedSubstance'];
    return parts.join(', ');
  }
}
