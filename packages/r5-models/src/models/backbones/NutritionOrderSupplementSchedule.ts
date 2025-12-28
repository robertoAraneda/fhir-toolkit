import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  INutritionOrderSupplementSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderSupplementSchedule */
const NUTRITION_ORDER_SUPPLEMENT_SCHEDULE_PROPERTIES = [
  'timing',
  'asNeeded',
  '_asNeeded',
  'asNeededFor',
] as const;

/**
 * NutritionOrderSupplementSchedule - Scheduling information for supplements
 *
 * @see https://hl7.org/fhir/R5/nutritionordersupplementschedule.html
 *
 * @example
 * const nutritionOrderSupplementSchedule = new NutritionOrderSupplementSchedule({
 *   // ... properties
 * });
 */
export class NutritionOrderSupplementSchedule extends BackboneElement implements INutritionOrderSupplementSchedule {

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

  constructor(data?: Partial<INutritionOrderSupplementSchedule>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_SUPPLEMENT_SCHEDULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderSupplementSchedule from a JSON object
   */
  static fromJSON(json: INutritionOrderSupplementSchedule): NutritionOrderSupplementSchedule {
    return new NutritionOrderSupplementSchedule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderSupplementSchedule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderSupplementSchedule>): NutritionOrderSupplementSchedule {
    return new NutritionOrderSupplementSchedule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderSupplementSchedule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderSupplementSchedule) => Partial<INutritionOrderSupplementSchedule>): NutritionOrderSupplementSchedule {
    const currentData = this.toJSON();
    return new NutritionOrderSupplementSchedule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderSupplementSchedule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderSupplementSchedule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_SUPPLEMENT_SCHEDULE_PROPERTIES);
    return result as INutritionOrderSupplementSchedule;
  }

  /**
   * Create a deep clone of this NutritionOrderSupplementSchedule
   */
  clone(): NutritionOrderSupplementSchedule {
    return new NutritionOrderSupplementSchedule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderSupplementSchedule
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderSupplementSchedule'];
    return parts.join(', ');
  }
}
