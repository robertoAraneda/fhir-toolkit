import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDietTexture,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionOrderOralDietTexture */
const NUTRITION_ORDER_ORAL_DIET_TEXTURE_PROPERTIES = [
  'modifier',
  'foodType',
] as const;

/**
 * NutritionOrderOralDietTexture - Required  texture modifications
 *
 * @see https://hl7.org/fhir/R4/nutritionorderoraldiettexture.html
 *
 * @example
 * const nutritionOrderOralDietTexture = new NutritionOrderOralDietTexture({
 *   // ... properties
 * });
 */
export class NutritionOrderOralDietTexture extends BackboneElement implements INutritionOrderOralDietTexture {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code to indicate how to alter the texture of the foods, e.g. pureed */
  modifier?: ICodeableConcept;

  /** Concepts that are used to identify an entity that is ingested for nutritional purposes */
  foodType?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderOralDietTexture>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ORAL_DIET_TEXTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderOralDietTexture from a JSON object
   */
  static fromJSON(json: INutritionOrderOralDietTexture): NutritionOrderOralDietTexture {
    return new NutritionOrderOralDietTexture(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderOralDietTexture with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderOralDietTexture>): NutritionOrderOralDietTexture {
    return new NutritionOrderOralDietTexture({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderOralDietTexture by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderOralDietTexture) => Partial<INutritionOrderOralDietTexture>): NutritionOrderOralDietTexture {
    const currentData = this.toJSON();
    return new NutritionOrderOralDietTexture({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderOralDietTexture)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderOralDietTexture {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ORAL_DIET_TEXTURE_PROPERTIES);
    return result as INutritionOrderOralDietTexture;
  }

  /**
   * Create a deep clone of this NutritionOrderOralDietTexture
   */
  clone(): NutritionOrderOralDietTexture {
    return new NutritionOrderOralDietTexture(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderOralDietTexture
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderOralDietTexture'];
    return parts.join(', ');
  }
}
