import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  INutritionProductProductCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionProductProductCharacteristic */
const NUTRITION_PRODUCT_PRODUCT_CHARACTERISTIC_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueQuantity',
  'valueBase64Binary',
  '_valueBase64Binary',
  'valueAttachment',
  'valueBoolean',
  '_valueBoolean',
] as const;

/**
 * NutritionProductProductCharacteristic - Specifies descriptive properties of the nutrition product
 *
 * @see https://hl7.org/fhir/R4/nutritionproductproductcharacteristic.html
 *
 * @example
 * const nutritionProductProductCharacteristic = new NutritionProductProductCharacteristic({
 *   // ... properties
 * });
 */
export class NutritionProductProductCharacteristic extends BackboneElement implements INutritionProductProductCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code specifying the type of characteristic */
  type: ICodeableConcept;

  /** The value of the characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** The value of the characteristic */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** The value of the characteristic */
  valueQuantity?: IQuantity;

  /** The value of the characteristic */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** The value of the characteristic */
  valueAttachment?: IAttachment;

  /** The value of the characteristic */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionProductProductCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_PRODUCT_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProductProductCharacteristic from a JSON object
   */
  static fromJSON(json: INutritionProductProductCharacteristic): NutritionProductProductCharacteristic {
    return new NutritionProductProductCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProductProductCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProductProductCharacteristic>): NutritionProductProductCharacteristic {
    return new NutritionProductProductCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProductProductCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProductProductCharacteristic) => Partial<INutritionProductProductCharacteristic>): NutritionProductProductCharacteristic {
    const currentData = this.toJSON();
    return new NutritionProductProductCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProductProductCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProductProductCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_PRODUCT_CHARACTERISTIC_PROPERTIES);
    return result as INutritionProductProductCharacteristic;
  }

  /**
   * Create a deep clone of this NutritionProductProductCharacteristic
   */
  clone(): NutritionProductProductCharacteristic {
    return new NutritionProductProductCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProductProductCharacteristic
   */
  toString(): string {
    const parts: string[] = ['NutritionProductProductCharacteristic'];
    return parts.join(', ');
  }
}
