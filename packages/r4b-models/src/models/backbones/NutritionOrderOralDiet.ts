import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  INutritionOrderOralDiet,
  INutritionOrderOralDietNutrient,
  INutritionOrderOralDietTexture,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionOrderOralDiet */
const NUTRITION_ORDER_ORAL_DIET_PROPERTIES = [
  'type',
  'schedule',
  'nutrient',
  'texture',
  'fluidConsistencyType',
  'instruction',
  '_instruction',
] as const;

/**
 * NutritionOrderOralDiet - Oral diet components
 *
 * @see https://hl7.org/fhir/R4B/nutritionorderoraldiet.html
 *
 * @example
 * const nutritionOrderOralDiet = new NutritionOrderOralDiet({
 *   // ... properties
 * });
 */
export class NutritionOrderOralDiet extends BackboneElement implements INutritionOrderOralDiet {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of oral diet or diet restrictions that describe what can be consumed orally */
  type?: ICodeableConcept[];

  /** Scheduled frequency of diet */
  schedule?: ITiming[];

  /** Required  nutrient modifications */
  nutrient?: INutritionOrderOralDietNutrient[];

  /** Required  texture modifications */
  texture?: INutritionOrderOralDietTexture[];

  /** The required consistency of fluids and liquids provided to the patient */
  fluidConsistencyType?: ICodeableConcept[];

  /** Instructions or additional information about the oral diet */
  instruction?: string;

  /** Extension for instruction */
  _instruction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderOralDiet>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ORAL_DIET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderOralDiet from a JSON object
   */
  static fromJSON(json: INutritionOrderOralDiet): NutritionOrderOralDiet {
    return new NutritionOrderOralDiet(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderOralDiet with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderOralDiet>): NutritionOrderOralDiet {
    return new NutritionOrderOralDiet({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderOralDiet by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderOralDiet) => Partial<INutritionOrderOralDiet>): NutritionOrderOralDiet {
    const currentData = this.toJSON();
    return new NutritionOrderOralDiet({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderOralDiet)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderOralDiet {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ORAL_DIET_PROPERTIES);
    return result as INutritionOrderOralDiet;
  }

  /**
   * Create a deep clone of this NutritionOrderOralDiet
   */
  clone(): NutritionOrderOralDiet {
    return new NutritionOrderOralDiet(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderOralDiet
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderOralDiet'];
    return parts.join(', ');
  }
}
