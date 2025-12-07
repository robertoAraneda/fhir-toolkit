import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  INutritionIntakeConsumedItem,
  IQuantity,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionIntakeConsumedItem */
const NUTRITION_INTAKE_CONSUMED_ITEM_PROPERTIES = [
  'type',
  'nutritionProduct',
  'schedule',
  'amount',
  'rate',
  'notConsumed',
  '_notConsumed',
  'notConsumedReason',
] as const;

/**
 * NutritionIntakeConsumedItem - What food or fluid product or item was consumed
 *
 * @see https://hl7.org/fhir/R4/nutritionintakeconsumeditem.html
 *
 * @example
 * const nutritionIntakeConsumedItem = new NutritionIntakeConsumedItem({
 *   // ... properties
 * });
 */
export class NutritionIntakeConsumedItem extends BackboneElement implements INutritionIntakeConsumedItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of food or fluid product */
  type: ICodeableConcept;

  /** Code that identifies the food or fluid product that was consumed */
  nutritionProduct: ICodeableReference;

  /** Scheduled frequency of consumption */
  schedule?: ITiming;

  /** Quantity of the specified food */
  amount?: IQuantity;

  /** Rate at which enteral feeding was administered */
  rate?: IQuantity;

  /** Flag to indicate if the food or fluid item was refused or otherwise not consumed */
  notConsumed?: boolean;

  /** Extension for notConsumed */
  _notConsumed?: IElement;

  /** Reason food or fluid was not consumed */
  notConsumedReason?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionIntakeConsumedItem>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_INTAKE_CONSUMED_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionIntakeConsumedItem from a JSON object
   */
  static fromJSON(json: INutritionIntakeConsumedItem): NutritionIntakeConsumedItem {
    return new NutritionIntakeConsumedItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionIntakeConsumedItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionIntakeConsumedItem>): NutritionIntakeConsumedItem {
    return new NutritionIntakeConsumedItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionIntakeConsumedItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionIntakeConsumedItem) => Partial<INutritionIntakeConsumedItem>): NutritionIntakeConsumedItem {
    const currentData = this.toJSON();
    return new NutritionIntakeConsumedItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionIntakeConsumedItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionIntakeConsumedItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_INTAKE_CONSUMED_ITEM_PROPERTIES);
    return result as INutritionIntakeConsumedItem;
  }

  /**
   * Create a deep clone of this NutritionIntakeConsumedItem
   */
  clone(): NutritionIntakeConsumedItem {
    return new NutritionIntakeConsumedItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionIntakeConsumedItem
   */
  toString(): string {
    const parts: string[] = ['NutritionIntakeConsumedItem'];
    return parts.join(', ');
  }
}
