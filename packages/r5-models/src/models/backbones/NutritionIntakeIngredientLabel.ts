import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  INutritionIntakeIngredientLabel,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionIntakeIngredientLabel */
const NUTRITION_INTAKE_INGREDIENT_LABEL_PROPERTIES = [
  'nutrient',
  'amount',
] as const;

/**
 * NutritionIntakeIngredientLabel - Total nutrient for the whole meal, product, serving
 *
 * @see https://hl7.org/fhir/R4/nutritionintakeingredientlabel.html
 *
 * @example
 * const nutritionIntakeIngredientLabel = new NutritionIntakeIngredientLabel({
 *   // ... properties
 * });
 */
export class NutritionIntakeIngredientLabel extends BackboneElement implements INutritionIntakeIngredientLabel {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Total nutrient consumed */
  nutrient: ICodeableReference;

  /** Total amount of nutrient consumed */
  amount: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionIntakeIngredientLabel>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_INTAKE_INGREDIENT_LABEL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionIntakeIngredientLabel from a JSON object
   */
  static fromJSON(json: INutritionIntakeIngredientLabel): NutritionIntakeIngredientLabel {
    return new NutritionIntakeIngredientLabel(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionIntakeIngredientLabel with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionIntakeIngredientLabel>): NutritionIntakeIngredientLabel {
    return new NutritionIntakeIngredientLabel({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionIntakeIngredientLabel by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionIntakeIngredientLabel) => Partial<INutritionIntakeIngredientLabel>): NutritionIntakeIngredientLabel {
    const currentData = this.toJSON();
    return new NutritionIntakeIngredientLabel({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionIntakeIngredientLabel)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionIntakeIngredientLabel {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_INTAKE_INGREDIENT_LABEL_PROPERTIES);
    return result as INutritionIntakeIngredientLabel;
  }

  /**
   * Create a deep clone of this NutritionIntakeIngredientLabel
   */
  clone(): NutritionIntakeIngredientLabel {
    return new NutritionIntakeIngredientLabel(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionIntakeIngredientLabel
   */
  toString(): string {
    const parts: string[] = ['NutritionIntakeIngredientLabel'];
    return parts.join(', ');
  }
}
