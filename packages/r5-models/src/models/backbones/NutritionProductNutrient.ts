import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  INutritionProductNutrient,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionProductNutrient */
const NUTRITION_PRODUCT_NUTRIENT_PROPERTIES = [
  'item',
  'amount',
] as const;

/**
 * NutritionProductNutrient - The product's nutritional information expressed by the nutrients
 *
 * @see https://hl7.org/fhir/R4/nutritionproductnutrient.html
 *
 * @example
 * const nutritionProductNutrient = new NutritionProductNutrient({
 *   // ... properties
 * });
 */
export class NutritionProductNutrient extends BackboneElement implements INutritionProductNutrient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The (relevant) nutrients in the product */
  item?: ICodeableReference;

  /** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose */
  amount?: IRatio[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionProductNutrient>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_NUTRIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProductNutrient from a JSON object
   */
  static fromJSON(json: INutritionProductNutrient): NutritionProductNutrient {
    return new NutritionProductNutrient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProductNutrient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProductNutrient>): NutritionProductNutrient {
    return new NutritionProductNutrient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProductNutrient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProductNutrient) => Partial<INutritionProductNutrient>): NutritionProductNutrient {
    const currentData = this.toJSON();
    return new NutritionProductNutrient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProductNutrient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProductNutrient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_NUTRIENT_PROPERTIES);
    return result as INutritionProductNutrient;
  }

  /**
   * Create a deep clone of this NutritionProductNutrient
   */
  clone(): NutritionProductNutrient {
    return new NutritionProductNutrient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProductNutrient
   */
  toString(): string {
    const parts: string[] = ['NutritionProductNutrient'];
    return parts.join(', ');
  }
}
