import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProduct,
  IMedicinalProductManufacturingBusinessOperation,
  IMedicinalProductName,
  IMedicinalProductSpecialDesignation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProduct */
const MEDICINAL_PRODUCT_PROPERTIES = [
  'identifier',
  'type',
  'domain',
  'combinedPharmaceuticalDoseForm',
  'legalStatusOfSupply',
  'additionalMonitoringIndicator',
  'specialMeasures',
  '_specialMeasures',
  'paediatricUseIndicator',
  'productClassification',
  'marketingStatus',
  'pharmaceuticalProduct',
  'packagedMedicinalProduct',
  'attachedDocument',
  'masterFile',
  'contact',
  'clinicalTrial',
  'name',
  'crossReference',
  'manufacturingBusinessOperation',
  'specialDesignation',
] as const;

/**
 * MedicinalProduct - Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 *
 * @see https://hl7.org/fhir/R4/medicinalproduct.html
 *
 * @example
 * const medicinalProduct = new MedicinalProduct({
 *   resourceType: 'MedicinalProduct',
 *   // ... properties
 * });
 */
export class MedicinalProduct extends DomainResource implements IMedicinalProduct {
  readonly resourceType = 'MedicinalProduct' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this product. Could be an MPID */
  identifier?: IIdentifier[];

  /** Regulatory type, e.g. Investigational or Authorized */
  type?: ICodeableConcept;

  /** If this medicine applies to human or veterinary uses */
  domain?: ICoding;

  /** The dose form for a single part product, or combined form of a multiple part product */
  combinedPharmaceuticalDoseForm?: ICodeableConcept;

  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: ICodeableConcept;

  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
  additionalMonitoringIndicator?: ICodeableConcept;

  /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
  specialMeasures?: string[];

  /** Extension for specialMeasures */
  _specialMeasures?: IElement;

  /** If authorised for use in children */
  paediatricUseIndicator?: ICodeableConcept;

  /** Allows the product to be classified by various systems */
  productClassification?: ICodeableConcept[];

  /** Marketing status of the medicinal product, in contrast to marketing authorizaton */
  marketingStatus?: IMarketingStatus[];

  /** Pharmaceutical aspects of product */
  pharmaceuticalProduct?: IReference<'MedicinalProductPharmaceutical'>[];

  /** Package representation for the product */
  packagedMedicinalProduct?: IReference<'MedicinalProductPackaged'>[];

  /** Supporting documentation, typically for regulatory submission */
  attachedDocument?: IReference<'DocumentReference'>[];

  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) */
  masterFile?: IReference<'DocumentReference'>[];

  /** A product specific contact, person (in a role), or an organization */
  contact?: IReference<'Organization' | 'PractitionerRole'>[];

  /** Clinical trials or studies that this product is involved in */
  clinicalTrial?: IReference<'ResearchStudy'>[];

  /** The product's name, including full name and possibly coded parts */
  name: IMedicinalProductName[];

  /** Reference to another product, e.g. for linking authorised to investigational product */
  crossReference?: IIdentifier[];

  /** An operation applied to the product, for manufacturing or adminsitrative purpose */
  manufacturingBusinessOperation?: IMedicinalProductManufacturingBusinessOperation[];

  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease */
  specialDesignation?: IMedicinalProductSpecialDesignation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProduct>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProduct from a JSON object
   */
  static fromJSON(json: IMedicinalProduct): MedicinalProduct {
    return new MedicinalProduct(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProduct with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProduct>): MedicinalProduct {
    return new MedicinalProduct({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProduct by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProduct) => Partial<IMedicinalProduct>): MedicinalProduct {
    const currentData = this.toJSON();
    return new MedicinalProduct({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProduct)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProduct {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PROPERTIES);
    return result as IMedicinalProduct;
  }

  /**
   * Create a deep clone of this MedicinalProduct
   */
  clone(): MedicinalProduct {
    return new MedicinalProduct(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProduct
   */
  toString(): string {
    const parts: string[] = ['MedicinalProduct'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
