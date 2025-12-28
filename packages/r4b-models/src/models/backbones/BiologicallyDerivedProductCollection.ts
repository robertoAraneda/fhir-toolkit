import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBiologicallyDerivedProductCollection,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BiologicallyDerivedProductCollection */
const BIOLOGICALLY_DERIVED_PRODUCT_COLLECTION_PROPERTIES = [
  'collector',
  'source',
  'collectedDateTime',
  '_collectedDateTime',
  'collectedPeriod',
] as const;

/**
 * BiologicallyDerivedProductCollection - How this product was collected
 *
 * @see https://hl7.org/fhir/R4B/biologicallyderivedproductcollection.html
 *
 * @example
 * const biologicallyDerivedProductCollection = new BiologicallyDerivedProductCollection({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductCollection extends BackboneElement implements IBiologicallyDerivedProductCollection {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Individual performing collection */
  collector?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Who is product from */
  source?: IReference<'Patient' | 'Organization'>;

  /** Time of product collection */
  collectedDateTime?: string;

  /** Extension for collectedDateTime */
  _collectedDateTime?: IElement;

  /** Time of product collection */
  collectedPeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductCollection>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_COLLECTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductCollection from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductCollection): BiologicallyDerivedProductCollection {
    return new BiologicallyDerivedProductCollection(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductCollection with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductCollection>): BiologicallyDerivedProductCollection {
    return new BiologicallyDerivedProductCollection({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductCollection by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductCollection) => Partial<IBiologicallyDerivedProductCollection>): BiologicallyDerivedProductCollection {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductCollection({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductCollection)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductCollection {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_COLLECTION_PROPERTIES);
    return result as IBiologicallyDerivedProductCollection;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductCollection
   */
  clone(): BiologicallyDerivedProductCollection {
    return new BiologicallyDerivedProductCollection(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductCollection
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductCollection'];
    return parts.join(', ');
  }
}
