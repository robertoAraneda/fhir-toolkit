import { BackboneElement } from '../base/BackboneElement.js';
import type {
  INutritionOrderEnteralFormulaAdministration,
  IQuantity,
  IRatio,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionOrderEnteralFormulaAdministration */
const NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_PROPERTIES = [
  'schedule',
  'quantity',
  'rateQuantity',
  'rateRatio',
] as const;

/**
 * NutritionOrderEnteralFormulaAdministration - Formula feeding instruction as structured data
 *
 * @see https://hl7.org/fhir/R4B/nutritionorderenteralformulaadministration.html
 *
 * @example
 * const nutritionOrderEnteralFormulaAdministration = new NutritionOrderEnteralFormulaAdministration({
 *   // ... properties
 * });
 */
export class NutritionOrderEnteralFormulaAdministration extends BackboneElement implements INutritionOrderEnteralFormulaAdministration {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Scheduled frequency of enteral feeding */
  schedule?: ITiming;

  /** The volume of formula to provide */
  quantity?: IQuantity;

  /** Speed with which the formula is provided per period of time */
  rateQuantity?: IQuantity;

  /** Speed with which the formula is provided per period of time */
  rateRatio?: IRatio;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderEnteralFormulaAdministration>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderEnteralFormulaAdministration from a JSON object
   */
  static fromJSON(json: INutritionOrderEnteralFormulaAdministration): NutritionOrderEnteralFormulaAdministration {
    return new NutritionOrderEnteralFormulaAdministration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderEnteralFormulaAdministration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderEnteralFormulaAdministration>): NutritionOrderEnteralFormulaAdministration {
    return new NutritionOrderEnteralFormulaAdministration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderEnteralFormulaAdministration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderEnteralFormulaAdministration) => Partial<INutritionOrderEnteralFormulaAdministration>): NutritionOrderEnteralFormulaAdministration {
    const currentData = this.toJSON();
    return new NutritionOrderEnteralFormulaAdministration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderEnteralFormulaAdministration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderEnteralFormulaAdministration {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ENTERAL_FORMULA_ADMINISTRATION_PROPERTIES);
    return result as INutritionOrderEnteralFormulaAdministration;
  }

  /**
   * Create a deep clone of this NutritionOrderEnteralFormulaAdministration
   */
  clone(): NutritionOrderEnteralFormulaAdministration {
    return new NutritionOrderEnteralFormulaAdministration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderEnteralFormulaAdministration
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderEnteralFormulaAdministration'];
    return parts.join(', ');
  }
}
