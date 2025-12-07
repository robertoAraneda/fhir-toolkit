import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  IRatio,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIngredientSpecifiedSubstanceStrength */
const MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_PROPERTIES = [
  'presentation',
  'presentationLowLimit',
  'concentration',
  'concentrationLowLimit',
  'measurementPoint',
  '_measurementPoint',
  'country',
  'referenceStrength',
] as const;

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrength - Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstancestrength.html
 *
 * @example
 * const medicinalProductIngredientSpecifiedSubstanceStrength = new MedicinalProductIngredientSpecifiedSubstanceStrength({
 *   // ... properties
 * });
 */
export class MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement implements IMedicinalProductIngredientSpecifiedSubstanceStrength {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
  presentation: IRatio;

  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
  presentationLowLimit?: IRatio;

  /** The strength per unitary volume (or mass) */
  concentration?: IRatio;

  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
  concentrationLowLimit?: IRatio;

  /** For when strength is measured at a particular point or distance */
  measurementPoint?: string;

  /** Extension for measurementPoint */
  _measurementPoint?: IElement;

  /** The country or countries for which the strength range applies */
  country?: ICodeableConcept[];

  /** Strength expressed in terms of a reference substance */
  referenceStrength?: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrength>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIngredientSpecifiedSubstanceStrength from a JSON object
   */
  static fromJSON(json: IMedicinalProductIngredientSpecifiedSubstanceStrength): MedicinalProductIngredientSpecifiedSubstanceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrength(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstanceStrength with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIngredientSpecifiedSubstanceStrength>): MedicinalProductIngredientSpecifiedSubstanceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrength({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIngredientSpecifiedSubstanceStrength by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIngredientSpecifiedSubstanceStrength) => Partial<IMedicinalProductIngredientSpecifiedSubstanceStrength>): MedicinalProductIngredientSpecifiedSubstanceStrength {
    const currentData = this.toJSON();
    return new MedicinalProductIngredientSpecifiedSubstanceStrength({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIngredientSpecifiedSubstanceStrength)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIngredientSpecifiedSubstanceStrength {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INGREDIENT_SPECIFIED_SUBSTANCE_STRENGTH_PROPERTIES);
    return result as IMedicinalProductIngredientSpecifiedSubstanceStrength;
  }

  /**
   * Create a deep clone of this MedicinalProductIngredientSpecifiedSubstanceStrength
   */
  clone(): MedicinalProductIngredientSpecifiedSubstanceStrength {
    return new MedicinalProductIngredientSpecifiedSubstanceStrength(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIngredientSpecifiedSubstanceStrength
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIngredientSpecifiedSubstanceStrength'];
    return parts.join(', ');
  }
}
