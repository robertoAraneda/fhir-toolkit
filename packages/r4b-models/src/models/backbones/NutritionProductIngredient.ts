import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  INutritionProductIngredient,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionProductIngredient */
const NUTRITION_PRODUCT_INGREDIENT_PROPERTIES = [
  'item',
  'amount',
] as const;

/**
 * NutritionProductIngredient - Ingredients contained in this product
 *
 * @see https://hl7.org/fhir/R4/nutritionproductingredient.html
 *
 * @example
 * const nutritionProductIngredient = new NutritionProductIngredient({
 *   // ... properties
 * });
 */
export class NutritionProductIngredient extends BackboneElement implements INutritionProductIngredient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The ingredient contained in the product */
  item: ICodeableReference;

  /** The amount of ingredient that is in the product */
  amount?: IRatio[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionProductIngredient>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProductIngredient from a JSON object
   */
  static fromJSON(json: INutritionProductIngredient): NutritionProductIngredient {
    return new NutritionProductIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProductIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProductIngredient>): NutritionProductIngredient {
    return new NutritionProductIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProductIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProductIngredient) => Partial<INutritionProductIngredient>): NutritionProductIngredient {
    const currentData = this.toJSON();
    return new NutritionProductIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProductIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProductIngredient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_INGREDIENT_PROPERTIES);
    return result as INutritionProductIngredient;
  }

  /**
   * Create a deep clone of this NutritionProductIngredient
   */
  clone(): NutritionProductIngredient {
    return new NutritionProductIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProductIngredient
   */
  toString(): string {
    const parts: string[] = ['NutritionProductIngredient'];
    return parts.join(', ');
  }
}
