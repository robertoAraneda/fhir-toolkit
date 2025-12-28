import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDietNutrient,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderOralDietNutrient */
const NUTRITION_ORDER_ORAL_DIET_NUTRIENT_PROPERTIES = [
  'modifier',
  'amount',
] as const;

/**
 * NutritionOrderOralDietNutrient - Required  nutrient modifications
 *
 * @see https://hl7.org/fhir/R5/nutritionorderoraldietnutrient.html
 *
 * @example
 * const nutritionOrderOralDietNutrient = new NutritionOrderOralDietNutrient({
 *   // ... properties
 * });
 */
export class NutritionOrderOralDietNutrient extends BackboneElement implements INutritionOrderOralDietNutrient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of nutrient that is being modified */
  modifier?: ICodeableConcept;

  /** Quantity of the specified nutrient */
  amount?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderOralDietNutrient>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ORAL_DIET_NUTRIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderOralDietNutrient from a JSON object
   */
  static fromJSON(json: INutritionOrderOralDietNutrient): NutritionOrderOralDietNutrient {
    return new NutritionOrderOralDietNutrient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderOralDietNutrient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderOralDietNutrient>): NutritionOrderOralDietNutrient {
    return new NutritionOrderOralDietNutrient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderOralDietNutrient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderOralDietNutrient) => Partial<INutritionOrderOralDietNutrient>): NutritionOrderOralDietNutrient {
    const currentData = this.toJSON();
    return new NutritionOrderOralDietNutrient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderOralDietNutrient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderOralDietNutrient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ORAL_DIET_NUTRIENT_PROPERTIES);
    return result as INutritionOrderOralDietNutrient;
  }

  /**
   * Create a deep clone of this NutritionOrderOralDietNutrient
   */
  clone(): NutritionOrderOralDietNutrient {
    return new NutritionOrderOralDietNutrient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderOralDietNutrient
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderOralDietNutrient'];
    return parts.join(', ');
  }
}
