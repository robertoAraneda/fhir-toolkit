import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IProductShelfLife,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProductShelfLife */
const PRODUCT_SHELF_LIFE_PROPERTIES = [
  'identifier',
  'type',
  'period',
  'specialPrecautionsForStorage',
] as const;

/**
 * ProductShelfLife - The shelf-life and storage information for a medicinal product item or container can be described using this class.
 *
 * @see https://hl7.org/fhir/R4B/productshelflife.html
 *
 * @example
 * const productShelfLife = new ProductShelfLife({
 *   // ... properties
 * });
 */
export class ProductShelfLife extends Element implements IProductShelfLife {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier for the packaged Medicinal Product */
  identifier?: IIdentifier;

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
  type: ICodeableConcept;

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  period: IQuantity;

  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
  specialPrecautionsForStorage?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProductShelfLife>) {
    super(data);
    if (data) {
      this.assignProps(data, PRODUCT_SHELF_LIFE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProductShelfLife from a JSON object
   */
  static fromJSON(json: IProductShelfLife): ProductShelfLife {
    return new ProductShelfLife(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProductShelfLife with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProductShelfLife>): ProductShelfLife {
    return new ProductShelfLife({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProductShelfLife by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProductShelfLife) => Partial<IProductShelfLife>): ProductShelfLife {
    const currentData = this.toJSON();
    return new ProductShelfLife({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProductShelfLife)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProductShelfLife {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, PRODUCT_SHELF_LIFE_PROPERTIES);
    return result as IProductShelfLife;
  }

  /**
   * Create a deep clone of this ProductShelfLife
   */
  clone(): ProductShelfLife {
    return new ProductShelfLife(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProductShelfLife
   */
  toString(): string {
    const parts: string[] = ['ProductShelfLife'];
    return parts.join(', ');
  }
}
