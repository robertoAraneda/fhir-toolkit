import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  INutritionOrderEnteralFormulaAdministrationSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderEnteralFormulaAdministrationSchedule */
const NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_SCHEDULE_PROPERTIES = [
  'timing',
  'asNeeded',
  '_asNeeded',
  'asNeededFor',
] as const;

/**
 * NutritionOrderEnteralFormulaAdministrationSchedule - Scheduling information for enteral formula products
 *
 * @see https://hl7.org/fhir/R5/nutritionorderenteralformulaadministrationschedule.html
 *
 * @example
 * const nutritionOrderEnteralFormulaAdministrationSchedule = new NutritionOrderEnteralFormulaAdministrationSchedule({
 *   // ... properties
 * });
 */
export class NutritionOrderEnteralFormulaAdministrationSchedule extends BackboneElement implements INutritionOrderEnteralFormulaAdministrationSchedule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Scheduled frequency of enteral formula */
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

  constructor(data?: Partial<INutritionOrderEnteralFormulaAdministrationSchedule>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_SCHEDULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderEnteralFormulaAdministrationSchedule from a JSON object
   */
  static fromJSON(json: INutritionOrderEnteralFormulaAdministrationSchedule): NutritionOrderEnteralFormulaAdministrationSchedule {
    return new NutritionOrderEnteralFormulaAdministrationSchedule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderEnteralFormulaAdministrationSchedule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderEnteralFormulaAdministrationSchedule>): NutritionOrderEnteralFormulaAdministrationSchedule {
    return new NutritionOrderEnteralFormulaAdministrationSchedule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderEnteralFormulaAdministrationSchedule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderEnteralFormulaAdministrationSchedule) => Partial<INutritionOrderEnteralFormulaAdministrationSchedule>): NutritionOrderEnteralFormulaAdministrationSchedule {
    const currentData = this.toJSON();
    return new NutritionOrderEnteralFormulaAdministrationSchedule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderEnteralFormulaAdministrationSchedule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderEnteralFormulaAdministrationSchedule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_SCHEDULE_PROPERTIES);
    return result as INutritionOrderEnteralFormulaAdministrationSchedule;
  }

  /**
   * Create a deep clone of this NutritionOrderEnteralFormulaAdministrationSchedule
   */
  clone(): NutritionOrderEnteralFormulaAdministrationSchedule {
    return new NutritionOrderEnteralFormulaAdministrationSchedule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderEnteralFormulaAdministrationSchedule
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderEnteralFormulaAdministrationSchedule'];
    return parts.join(', ');
  }
}
