import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IElement,
  INutritionOrderSupplement,
  INutritionOrderSupplementSchedule,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrderSupplement */
const NUTRITION_ORDER_SUPPLEMENT_PROPERTIES = [
  'type',
  'productName',
  '_productName',
  'schedule',
  'quantity',
  'instruction',
  '_instruction',
] as const;

/**
 * NutritionOrderSupplement - Supplement components
 *
 * @see https://hl7.org/fhir/R4/nutritionordersupplement.html
 *
 * @example
 * const nutritionOrderSupplement = new NutritionOrderSupplement({
 *   // ... properties
 * });
 */
export class NutritionOrderSupplement extends BackboneElement implements INutritionOrderSupplement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of supplement product requested */
  type?: ICodeableReference;

  /** Product or brand name of the nutritional supplement */
  productName?: string;

  /** Extension for productName */
  _productName?: IElement;

  /** Scheduling information for supplements */
  schedule?: INutritionOrderSupplementSchedule;

  /** Amount of the nutritional supplement */
  quantity?: IQuantity;

  /** Instructions or additional information about the oral supplement */
  instruction?: string;

  /** Extension for instruction */
  _instruction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderSupplement>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_SUPPLEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderSupplement from a JSON object
   */
  static fromJSON(json: INutritionOrderSupplement): NutritionOrderSupplement {
    return new NutritionOrderSupplement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderSupplement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderSupplement>): NutritionOrderSupplement {
    return new NutritionOrderSupplement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderSupplement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderSupplement) => Partial<INutritionOrderSupplement>): NutritionOrderSupplement {
    const currentData = this.toJSON();
    return new NutritionOrderSupplement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderSupplement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderSupplement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_SUPPLEMENT_PROPERTIES);
    return result as INutritionOrderSupplement;
  }

  /**
   * Create a deep clone of this NutritionOrderSupplement
   */
  clone(): NutritionOrderSupplement {
    return new NutritionOrderSupplement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderSupplement
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderSupplement'];
    return parts.join(', ');
  }
}
