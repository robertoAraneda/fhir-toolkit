import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  INutritionProduct,
  INutritionProductIngredient,
  INutritionProductInstance,
  INutritionProductNutrient,
  INutritionProductProductCharacteristic,
  IReference,
  NutritionProductStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to NutritionProduct */
const NUTRITION_PRODUCT_PROPERTIES = [
  'status',
  '_status',
  'category',
  'code',
  'manufacturer',
  'nutrient',
  'ingredient',
  'knownAllergen',
  'productCharacteristic',
  'instance',
  'note',
] as const;

/**
 * NutritionProduct - A food or fluid product that is consumed by patients.
 *
 * @see https://hl7.org/fhir/R4/nutritionproduct.html
 *
 * @example
 * const nutritionProduct = new NutritionProduct({
 *   // ... properties
 * });
 */
export class NutritionProduct extends DomainResource implements INutritionProduct {
  readonly resourceType = 'NutritionProduct' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** active | inactive | entered-in-error */
  status: NutritionProductStatusType;

  /** Extension for status */
  _status?: IElement;

  /** A category or class of the nutrition product (halal, kosher, gluten free, vegan, etc) */
  category?: ICodeableConcept[];

  /** A code designating a specific type of nutritional product */
  code?: ICodeableConcept;

  /** Manufacturer, representative or officially responsible for the product */
  manufacturer?: IReference<'Organization'>[];

  /** The product's nutritional information expressed by the nutrients */
  nutrient?: INutritionProductNutrient[];

  /** Ingredients contained in this product */
  ingredient?: INutritionProductIngredient[];

  /** Known or suspected allergens that are a part of this product */
  knownAllergen?: ICodeableReference[];

  /** Specifies descriptive properties of the nutrition product */
  productCharacteristic?: INutritionProductProductCharacteristic[];

  /** One or several physical instances or occurrences of the nutrition product */
  instance?: INutritionProductInstance;

  /** Comments made about the product */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<INutritionProduct>, 'resourceType'>) {
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
