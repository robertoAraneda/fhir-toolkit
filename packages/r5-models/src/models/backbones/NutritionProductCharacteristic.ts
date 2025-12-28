import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  INutritionProductCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionProductCharacteristic */
const NUTRITION_PRODUCT_CHARACTERISTIC_PROPERTIES = [
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
 * NutritionProductCharacteristic - Specifies descriptive properties of the nutrition product
 *
 * @see https://hl7.org/fhir/R5/nutritionproductcharacteristic.html
 *
 * @example
 * const nutritionProductCharacteristic = new NutritionProductCharacteristic({
 *   // ... properties
 * });
 */
export class NutritionProductCharacteristic extends BackboneElement implements INutritionProductCharacteristic {

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

  constructor(data?: Partial<INutritionProductCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProductCharacteristic from a JSON object
   */
  static fromJSON(json: INutritionProductCharacteristic): NutritionProductCharacteristic {
    return new NutritionProductCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProductCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProductCharacteristic>): NutritionProductCharacteristic {
    return new NutritionProductCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProductCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProductCharacteristic) => Partial<INutritionProductCharacteristic>): NutritionProductCharacteristic {
    const currentData = this.toJSON();
    return new NutritionProductCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProductCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProductCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_CHARACTERISTIC_PROPERTIES);
    return result as INutritionProductCharacteristic;
  }

  /**
   * Create a deep clone of this NutritionProductCharacteristic
   */
  clone(): NutritionProductCharacteristic {
    return new NutritionProductCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProductCharacteristic
   */
  toString(): string {
    const parts: string[] = ['NutritionProductCharacteristic'];
    return parts.join(', ');
  }
}
