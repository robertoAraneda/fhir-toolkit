import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IElement,
  INutritionOrderEnteralFormulaAdditive,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderEnteralFormulaAdditive */
const NUTRITION_ORDER_ENTERAL_FORMULA_ADDITIVE_PROPERTIES = [
  'type',
  'productName',
  '_productName',
  'quantity',
] as const;

/**
 * NutritionOrderEnteralFormulaAdditive - Components to add to the feeding
 *
 * @see https://hl7.org/fhir/R5/nutritionorderenteralformulaadditive.html
 *
 * @example
 * const nutritionOrderEnteralFormulaAdditive = new NutritionOrderEnteralFormulaAdditive({
 *   // ... properties
 * });
 */
export class NutritionOrderEnteralFormulaAdditive extends BackboneElement implements INutritionOrderEnteralFormulaAdditive {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of modular component to add to the feeding */
  type?: ICodeableReference;

  /** Product or brand name of the modular additive */
  productName?: string;

  /** Extension for productName */
  _productName?: IElement;

  /** Amount of additive to be given or mixed in */
  quantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderEnteralFormulaAdditive>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ENTERAL_FORMULA_ADDITIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderEnteralFormulaAdditive from a JSON object
   */
  static fromJSON(json: INutritionOrderEnteralFormulaAdditive): NutritionOrderEnteralFormulaAdditive {
    return new NutritionOrderEnteralFormulaAdditive(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderEnteralFormulaAdditive with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderEnteralFormulaAdditive>): NutritionOrderEnteralFormulaAdditive {
    return new NutritionOrderEnteralFormulaAdditive({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderEnteralFormulaAdditive by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderEnteralFormulaAdditive) => Partial<INutritionOrderEnteralFormulaAdditive>): NutritionOrderEnteralFormulaAdditive {
    const currentData = this.toJSON();
    return new NutritionOrderEnteralFormulaAdditive({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderEnteralFormulaAdditive)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderEnteralFormulaAdditive {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ENTERAL_FORMULA_ADDITIVE_PROPERTIES);
    return result as INutritionOrderEnteralFormulaAdditive;
  }

  /**
   * Create a deep clone of this NutritionOrderEnteralFormulaAdditive
   */
  clone(): NutritionOrderEnteralFormulaAdditive {
    return new NutritionOrderEnteralFormulaAdditive(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderEnteralFormulaAdditive
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderEnteralFormulaAdditive'];
    return parts.join(', ');
  }
}
