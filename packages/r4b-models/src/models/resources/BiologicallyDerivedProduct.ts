import { DomainResource } from '../base/DomainResource.js';
import type {
  BiologicallyDerivedProductCategoryType,
  BiologicallyDerivedProductStatusType,
  IBiologicallyDerivedProduct,
  IBiologicallyDerivedProductCollection,
  IBiologicallyDerivedProductManipulation,
  IBiologicallyDerivedProductProcessing,
  IBiologicallyDerivedProductStorage,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BiologicallyDerivedProduct */
const BIOLOGICALLY_DERIVED_PRODUCT_PROPERTIES = [
  'identifier',
  'productCategory',
  '_productCategory',
  'productCode',
  'status',
  '_status',
  'request',
  'quantity',
  '_quantity',
  'parent',
  'collection',
  'processing',
  'manipulation',
  'storage',
] as const;

/**
 * BiologicallyDerivedProduct - A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproduct.html
 *
 * @example
 * const biologicallyDerivedProduct = new BiologicallyDerivedProduct({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProduct extends DomainResource implements IBiologicallyDerivedProduct {
  readonly resourceType = 'BiologicallyDerivedProduct' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External ids for this item */
  identifier?: IIdentifier[];

  /** organ | tissue | fluid | cells | biologicalAgent */
  productCategory?: BiologicallyDerivedProductCategoryType;

  /** Extension for productCategory */
  _productCategory?: IElement;

  /** What this biologically derived product is */
  productCode?: ICodeableConcept;

  /** available | unavailable */
  status?: BiologicallyDerivedProductStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Procedure request */
  request?: IReference<'ServiceRequest'>[];

  /** The amount of this biologically derived product */
  quantity?: number;

  /** Extension for quantity */
  _quantity?: IElement;

  /** BiologicallyDerivedProduct parent */
  parent?: IReference<'BiologicallyDerivedProduct'>[];

  /** How this product was collected */
  collection?: IBiologicallyDerivedProductCollection;

  /** Any processing of the product during collection */
  processing?: IBiologicallyDerivedProductProcessing[];

  /** Any manipulation of product post-collection */
  manipulation?: IBiologicallyDerivedProductManipulation;

  /** Product storage */
  storage?: IBiologicallyDerivedProductStorage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IBiologicallyDerivedProduct>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProduct from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProduct): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProduct with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProduct>): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProduct by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProduct) => Partial<IBiologicallyDerivedProduct>): BiologicallyDerivedProduct {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProduct({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProduct)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProduct {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_PROPERTIES);
    return result as IBiologicallyDerivedProduct;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProduct
   */
  clone(): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProduct
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProduct'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
