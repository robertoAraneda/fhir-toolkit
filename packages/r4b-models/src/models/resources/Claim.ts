import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  IClaim,
  IClaimAccident,
  IClaimCareTeam,
  IClaimDiagnosis,
  IClaimInsurance,
  IClaimItem,
  IClaimPayee,
  IClaimProcedure,
  IClaimRelated,
  IClaimSupportingInfo,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPeriod,
  IReference,
  UseType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Claim */
const CLAIM_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'subType',
  'use',
  '_use',
  'patient',
  'billablePeriod',
  'created',
  '_created',
  'enterer',
  'insurer',
  'provider',
  'priority',
  'fundsReserve',
  'related',
  'prescription',
  'originalPrescription',
  'payee',
  'referral',
  'facility',
  'careTeam',
  'supportingInfo',
  'diagnosis',
  'procedure',
  'insurance',
  'accident',
  'item',
  'total',
] as const;

/**
 * Claim - A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 *
 * @see https://hl7.org/fhir/R4/claim.html
 *
 * @example
 * const claim = new Claim({
 *   resourceType: 'Claim',
 *   // ... properties
 * });
 */
export class Claim extends DomainResource implements IClaim {
  readonly resourceType = 'Claim' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for claim */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Category or discipline */
  type: ICodeableConcept;

  /** More granular claim type */
  subType?: ICodeableConcept;

  /** claim | preauthorization | predetermination */
  use: UseType;

  /** Extension for use */
  _use?: IElement;

  /** The recipient of the products and services */
  patient: IReference<'Patient'>;

  /** Relevant time frame for the claim */
  billablePeriod?: IPeriod;

  /** Resource creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Author of the claim */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Target */
  insurer?: IReference<'Organization'>;

  /** Party responsible for the claim */
  provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Desired processing ugency */
  priority: ICodeableConcept;

  /** For whom to reserve funds */
  fundsReserve?: ICodeableConcept;

  /** Prior or corollary claims */
  related?: IClaimRelated[];

  /** Prescription authorizing services and products */
  prescription?: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>;

  /** Original prescription if superseded by fulfiller */
  originalPrescription?: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>;

  /** Recipient of benefits payable */
  payee?: IClaimPayee;

  /** Treatment referral */
  referral?: IReference<'ServiceRequest'>;

  /** Servicing facility */
  facility?: IReference<'Location'>;

  /** Members of the care team */
  careTeam?: IClaimCareTeam[];

  /** Supporting information */
  supportingInfo?: IClaimSupportingInfo[];

  /** Pertinent diagnosis information */
  diagnosis?: IClaimDiagnosis[];

  /** Clinical procedures performed */
  procedure?: IClaimProcedure[];

  /** Patient insurance information */
  insurance: IClaimInsurance[];

  /** Details of the event */
  accident?: IClaimAccident;

  /** Product or service provided */
  item?: IClaimItem[];

  /** Total claim cost */
  total?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaim>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Claim from a JSON object
   */
  static fromJSON(json: IClaim): Claim {
    return new Claim(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Claim with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaim>): Claim {
    return new Claim({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Claim by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaim) => Partial<IClaim>): Claim {
    const currentData = this.toJSON();
    return new Claim({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaim)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaim {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CLAIM_PROPERTIES);
    return result as IClaim;
  }

  /**
   * Create a deep clone of this Claim
   */
  clone(): Claim {
    return new Claim(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Claim
   */
  toString(): string {
    const parts: string[] = ['Claim'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
