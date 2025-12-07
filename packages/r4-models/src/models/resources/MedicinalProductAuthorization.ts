import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicinalProductAuthorization,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  IMedicinalProductAuthorizationProcedure,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductAuthorization */
const MEDICINAL_PRODUCT_AUTHORIZATION_PROPERTIES = [
  'identifier',
  'subject',
  'country',
  'jurisdiction',
  'status',
  'statusDate',
  '_statusDate',
  'restoreDate',
  '_restoreDate',
  'validityPeriod',
  'dataExclusivityPeriod',
  'dateOfFirstAuthorization',
  '_dateOfFirstAuthorization',
  'internationalBirthDate',
  '_internationalBirthDate',
  'legalBasis',
  'jurisdictionalAuthorization',
  'holder',
  'regulator',
  'procedure',
] as const;

/**
 * MedicinalProductAuthorization - The regulatory authorization of a medicinal product.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorization.html
 *
 * @example
 * const medicinalProductAuthorization = new MedicinalProductAuthorization({
 *   // ... properties
 * });
 */
export class MedicinalProductAuthorization extends DomainResource implements IMedicinalProductAuthorization {
  readonly resourceType = 'MedicinalProductAuthorization' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for the marketing authorization, as assigned by a regulator */
  identifier?: IIdentifier[];

  /** The medicinal product that is being authorized */
  subject?: IReference<'MedicinalProduct' | 'MedicinalProductPackaged'>;

  /** The country in which the marketing authorization has been granted */
  country?: ICodeableConcept[];

  /** Jurisdiction within a country */
  jurisdiction?: ICodeableConcept[];

  /** The status of the marketing authorization */
  status?: ICodeableConcept;

  /** The date at which the given status has become applicable */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
  restoreDate?: string;

  /** Extension for restoreDate */
  _restoreDate?: IElement;

  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
  validityPeriod?: IPeriod;

  /** A period of time after authorization before generic product applicatiosn can be submitted */
  dataExclusivityPeriod?: IPeriod;

  /** The date when the first authorization was granted by a Medicines Regulatory Agency */
  dateOfFirstAuthorization?: string;

  /** Extension for dateOfFirstAuthorization */
  _dateOfFirstAuthorization?: IElement;

  /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
  internationalBirthDate?: string;

  /** Extension for internationalBirthDate */
  _internationalBirthDate?: IElement;

  /** The legal framework against which this authorization is granted */
  legalBasis?: ICodeableConcept;

  /** Authorization in areas within a country */
  jurisdictionalAuthorization?: IMedicinalProductAuthorizationJurisdictionalAuthorization[];

  /** Marketing Authorization Holder */
  holder?: IReference<'Organization'>;

  /** Medicines Regulatory Agency */
  regulator?: IReference<'Organization'>;

  /** The regulatory procedure for granting or amending a marketing authorization */
  procedure?: IMedicinalProductAuthorizationProcedure;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductAuthorization>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_AUTHORIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductAuthorization from a JSON object
   */
  static fromJSON(json: IMedicinalProductAuthorization): MedicinalProductAuthorization {
    return new MedicinalProductAuthorization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductAuthorization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductAuthorization>): MedicinalProductAuthorization {
    return new MedicinalProductAuthorization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductAuthorization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductAuthorization) => Partial<IMedicinalProductAuthorization>): MedicinalProductAuthorization {
    const currentData = this.toJSON();
    return new MedicinalProductAuthorization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductAuthorization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductAuthorization {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_AUTHORIZATION_PROPERTIES);
    return result as IMedicinalProductAuthorization;
  }

  /**
   * Create a deep clone of this MedicinalProductAuthorization
   */
  clone(): MedicinalProductAuthorization {
    return new MedicinalProductAuthorization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductAuthorization
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductAuthorization'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
