import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  INutritionProduct,
  INutritionProductCharacteristic,
  INutritionProductIngredient,
  INutritionProductInstance,
  INutritionProductNutrient,
  IReference,
  NutritionProductStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionProduct */
const NUTRITION_PRODUCT_PROPERTIES = [
  'code',
  'status',
  '_status',
  'category',
  'manufacturer',
  'nutrient',
  'ingredient',
  'knownAllergen',
  'characteristic',
  'instance',
  'note',
] as const;

/**
 * NutritionProduct - A food or supplement that is consumed by patients.
 *
 * @see https://hl7.org/fhir/R4/nutritionproduct.html
 *
 * @example
 * const nutritionProduct = new NutritionProduct({
 *   resourceType: 'NutritionProduct',
 *   // ... properties
 * });
 */
export class NutritionProduct extends DomainResource implements INutritionProduct {
  readonly resourceType = 'NutritionProduct' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code that can identify the detailed nutrients and ingredients in a specific food product */
  code?: ICodeableConcept;

  /** active | inactive | entered-in-error */
  status: NutritionProductStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products */
  category?: ICodeableConcept[];

  /** Manufacturer, representative or officially responsible for the product */
  manufacturer?: IReference<'Organization'>[];

  /** The product's nutritional information expressed by the nutrients */
  nutrient?: INutritionProductNutrient[];

  /** Ingredients contained in this product */
  ingredient?: INutritionProductIngredient[];

  /** Known or suspected allergens that are a part of this product */
  knownAllergen?: ICodeableReference[];

  /** Specifies descriptive properties of the nutrition product */
  characteristic?: INutritionProductCharacteristic[];

  /** One or several physical instances or occurrences of the nutrition product */
  instance?: INutritionProductInstance[];

  /** Comments made about the product */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionProduct>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_PRODUCT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionProduct from a JSON object
   */
  static fromJSON(json: INutritionProduct): NutritionProduct {
    return new NutritionProduct(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionProduct with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionProduct>): NutritionProduct {
    return new NutritionProduct({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionProduct by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionProduct) => Partial<INutritionProduct>): NutritionProduct {
    const currentData = this.toJSON();
    return new NutritionProduct({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionProduct)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionProduct {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, NUTRITION_PRODUCT_PROPERTIES);
    return result as INutritionProduct;
  }

  /**
   * Create a deep clone of this NutritionProduct
   */
  clone(): NutritionProduct {
    return new NutritionProduct(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionProduct
   */
  toString(): string {
    const parts: string[] = ['NutritionProduct'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
