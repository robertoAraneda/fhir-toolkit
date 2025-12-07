import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  IRatio,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength */
const MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES = [
  'substance',
  'strength',
  'strengthLowLimit',
  'measurementPoint',
  '_measurementPoint',
  'country',
] as const;

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength - Strength expressed in terms of a reference substance
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstancestrengthreferencestrength.html
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength({
 *   // ... properties
 * });
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement implements IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Relevant reference substance */
  substance?: ICodeableConcept;

  /** Strength expressed in terms of a reference substance */
  strength: IRatio;

  /** Strength expressed in terms of a reference substance */
  strengthLowLimit?: IRatio;

  /** For when strength is measured at a particular point or distance */
  measurementPoint?: string;

  /** Extension for measurementPoint */
  _measurementPoint?: IElement;

  /** The country or countries for which the strength range applies */
  country?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength from a JSON object
   */
  static fromJSON(json: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength) => Partial<IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const currentData = this.toJSON();
    return new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES);
    return result as IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
  }

  /**
   * Create a deep clone of this MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
   */
  clone(): MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength'];
    return parts.join(', ');
  }
}
