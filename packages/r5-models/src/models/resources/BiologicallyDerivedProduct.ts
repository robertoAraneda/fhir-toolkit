import { DomainResource } from '../base/DomainResource.js';
import type {
  IBiologicallyDerivedProduct,
  IBiologicallyDerivedProductCollection,
  IBiologicallyDerivedProductProperty,
  ICodeableConcept,
  ICoding,
  IElement,
  IIdentifier,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BiologicallyDerivedProduct */
const BIOLOGICALLY_DERIVED_PRODUCT_PROPERTIES = [
  'productCategory',
  'productCode',
  'parent',
  'request',
  'identifier',
  'biologicalSourceEvent',
  'processingFacility',
  'division',
  '_division',
  'productStatus',
  'expirationDate',
  '_expirationDate',
  'collection',
  'storageTempRequirements',
  'property',
] as const;

/**
 * BiologicallyDerivedProduct - This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.
 *
 * @see https://hl7.org/fhir/R5/biologicallyderivedproduct.html
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

  /** organ | tissue | fluid | cells | biologicalAgent */
  productCategory?: ICoding;

  /** A code that identifies the kind of this biologically derived product */
  productCode?: ICodeableConcept;

  /** The parent biologically-derived product */
  parent?: IReference<'BiologicallyDerivedProduct'>[];

  /** Request to obtain and/or infuse this product */
  request?: IReference<'ServiceRequest'>[];

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled */
  biologicalSourceEvent?: IIdentifier;

  /** Processing facilities responsible for the labeling and distribution of this biologically derived product */
  processingFacility?: IReference<'Organization'>[];

  /** A unique identifier for an aliquot of a product */
  division?: string;

  /** Extension for division */
  _division?: IElement;

  /** available | unavailable */
  productStatus?: ICoding;

  /** Date, and where relevant time, of expiration */
  expirationDate?: string;

  /** Extension for expirationDate */
  _expirationDate?: IElement;

  /** How this product was collected */
  collection?: IBiologicallyDerivedProductCollection;

  /** Product storage temperature requirements */
  storageTempRequirements?: IRange;

  /** A property that is specific to this BiologicallyDerviedProduct instance */
  property?: IBiologicallyDerivedProductProperty[];

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
