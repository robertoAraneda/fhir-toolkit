import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  INutritionProductInstance,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionProductInstance */
const NUTRITION_PRODUCT_INSTANCE_PROPERTIES = [
  'quantity',
  'identifier',
  'lotNumber',
  '_lotNumber',
  'expiry',
  '_expiry',
  'useBy',
  '_useBy',
] as const;

/**
 * NutritionProductInstance - One or several physical instances or occurrences of the nutrition product
 *
 * @see https://hl7.org/fhir/R4B/nutritionproductinstance.html
 *
 * @example
 * const nutritionProductInstance = new NutritionProductInstance({
 *   // ... properties
 * });
 */
export class NutritionProductInstance extends BackboneElement implements INutritionProductInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The amount of items or instances */
  quantity?: IQuantity;

  /** The identifier for the physical instance, typically a serial number */
  identifier?: IIdentifier[];

  /** The identification of the batch or lot of the product */
  lotNumber?: string;

  /** Extension for lotNumber */
  _lotNumber?: IElement;

  /** The expiry date or date and time for the product */
  expiry?: string;

  /** Extension for expiry */
  _expiry?: IElement;

  /** The date until which the product is expected to be good for consumption */
  useBy?: string;

  /** Extension for useBy */
  _useBy?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionProductInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProductInstance from a JSON object
   */
  static fromJSON(json: INutritionProductInstance): NutritionProductInstance {
    return new NutritionProductInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProductInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProductInstance>): NutritionProductInstance {
    return new NutritionProductInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProductInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProductInstance) => Partial<INutritionProductInstance>): NutritionProductInstance {
    const currentData = this.toJSON();
    return new NutritionProductInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProductInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProductInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_INSTANCE_PROPERTIES);
    return result as INutritionProductInstance;
  }

  /**
   * Create a deep clone of this NutritionProductInstance
   */
  clone(): NutritionProductInstance {
    return new NutritionProductInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProductInstance
   */
  toString(): string {
    const parts: string[] = ['NutritionProductInstance'];
    return parts.join(', ');
  }
}
