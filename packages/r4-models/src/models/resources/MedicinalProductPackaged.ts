import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductPackaged,
  IMedicinalProductPackagedBatchIdentifier,
  IMedicinalProductPackagedPackageItem,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPackaged */
const MEDICINAL_PRODUCT_PACKAGED_PROPERTIES = [
  'identifier',
  'subject',
  'description',
  '_description',
  'legalStatusOfSupply',
  'marketingStatus',
  'marketingAuthorization',
  'manufacturer',
  'batchIdentifier',
  'packageItem',
] as const;

/**
 * MedicinalProductPackaged - A medicinal product in a container or package.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackaged.html
 *
 * @example
 * const medicinalProductPackaged = new MedicinalProductPackaged({
 *   resourceType: 'MedicinalProductPackaged',
 *   // ... properties
 * });
 */
export class MedicinalProductPackaged extends DomainResource implements IMedicinalProductPackaged {
  readonly resourceType = 'MedicinalProductPackaged' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier */
  identifier?: IIdentifier[];

  /** The product with this is a pack for */
  subject?: IReference<'MedicinalProduct'>[];

  /** Textual description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: ICodeableConcept;

  /** Marketing information */
  marketingStatus?: IMarketingStatus[];

  /** Manufacturer of this Package Item */
  marketingAuthorization?: IReference<'MedicinalProductAuthorization'>;

  /** Manufacturer of this Package Item */
  manufacturer?: IReference<'Organization'>[];

  /** Batch numbering */
  batchIdentifier?: IMedicinalProductPackagedBatchIdentifier[];

  /** A packaging item, as a contained for medicine, possibly with other packaging items within */
  packageItem: IMedicinalProductPackagedPackageItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPackaged>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PACKAGED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPackaged from a JSON object
   */
  static fromJSON(json: IMedicinalProductPackaged): MedicinalProductPackaged {
    return new MedicinalProductPackaged(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPackaged with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPackaged>): MedicinalProductPackaged {
    return new MedicinalProductPackaged({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPackaged by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPackaged) => Partial<IMedicinalProductPackaged>): MedicinalProductPackaged {
    const currentData = this.toJSON();
    return new MedicinalProductPackaged({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPackaged)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPackaged {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PACKAGED_PROPERTIES);
    return result as IMedicinalProductPackaged;
  }

  /**
   * Create a deep clone of this MedicinalProductPackaged
   */
  clone(): MedicinalProductPackaged {
    return new MedicinalProductPackaged(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPackaged
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPackaged'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
