import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  INutritionOrderOralDietSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderOralDietSchedule */
const NUTRITION_ORDER_ORAL_DIET_SCHEDULE_PROPERTIES = [
  'timing',
  'asNeeded',
  '_asNeeded',
  'asNeededFor',
] as const;

/**
 * NutritionOrderOralDietSchedule - Scheduling information for oral diets
 *
 * @see https://hl7.org/fhir/R4/nutritionorderoraldietschedule.html
 *
 * @example
 * const nutritionOrderOralDietSchedule = new NutritionOrderOralDietSchedule({
 *   // ... properties
 * });
 */
export class NutritionOrderOralDietSchedule extends BackboneElement implements INutritionOrderOralDietSchedule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Scheduled frequency of diet */
  timing?: ITiming[];

  /** Take 'as needed' */
  asNeeded?: boolean;

  /** Extension for asNeeded */
  _asNeeded?: IElement;

  /** Take 'as needed' for x */
  asNeededFor?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderOralDietSchedule>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ORAL_DIET_SCHEDULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderOralDietSchedule from a JSON object
   */
  static fromJSON(json: INutritionOrderOralDietSchedule): NutritionOrderOralDietSchedule {
    return new NutritionOrderOralDietSchedule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderOralDietSchedule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderOralDietSchedule>): NutritionOrderOralDietSchedule {
    return new NutritionOrderOralDietSchedule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderOralDietSchedule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderOralDietSchedule) => Partial<INutritionOrderOralDietSchedule>): NutritionOrderOralDietSchedule {
    const currentData = this.toJSON();
    return new NutritionOrderOralDietSchedule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderOralDietSchedule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderOralDietSchedule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ORAL_DIET_SCHEDULE_PROPERTIES);
    return result as INutritionOrderOralDietSchedule;
  }

  /**
   * Create a deep clone of this NutritionOrderOralDietSchedule
   */
  clone(): NutritionOrderOralDietSchedule {
    return new NutritionOrderOralDietSchedule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderOralDietSchedule
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderOralDietSchedule'];
    return parts.join(', ');
  }
}
