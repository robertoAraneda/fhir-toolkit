import { DomainResource } from '../base/DomainResource.js';
import type {
  EligibilityRequestPurposeType,
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverageEligibilityRequest,
  ICoverageEligibilityRequestInsurance,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestSupportingInfo,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CoverageEligibilityRequest */
const COVERAGE_ELIGIBILITY_REQUEST_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'priority',
  'purpose',
  '_purpose',
  'patient',
  'servicedDate',
  '_servicedDate',
  'servicedPeriod',
  'created',
  '_created',
  'enterer',
  'provider',
  'insurer',
  'facility',
  'supportingInfo',
  'insurance',
  'item',
] as const;

/**
 * CoverageEligibilityRequest - The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequest.html
 *
 * @example
 * const coverageEligibilityRequest = new CoverageEligibilityRequest({
 *   resourceType: 'CoverageEligibilityRequest',
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequest extends DomainResource implements ICoverageEligibilityRequest {
  readonly resourceType = 'CoverageEligibilityRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for coverage eligiblity request */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Desired processing priority */
  priority?: ICodeableConcept;

  /** auth-requirements | benefits | discovery | validation */
  purpose: EligibilityRequestPurposeType[];

  /** Extension for purpose */
  _purpose?: IElement;

  /** Intended recipient of products and services */
  patient: IReference<'Patient'>;

  /** Estimated date or dates of service */
  servicedDate?: string;

  /** Extension for servicedDate */
  _servicedDate?: IElement;

  /** Estimated date or dates of service */
  servicedPeriod?: IPeriod;

  /** Creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Author */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Party responsible for the request */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Coverage issuer */
  insurer: IReference<'Organization'>;

  /** Servicing facility */
  facility?: IReference<'Location'>;

  /** Supporting information */
  supportingInfo?: ICoverageEligibilityRequestSupportingInfo[];

  /** Patient insurance information */
  insurance?: ICoverageEligibilityRequestInsurance[];

  /** Item to be evaluated for eligibiity */
  item?: ICoverageEligibilityRequestItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequest from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequest): CoverageEligibilityRequest {
    return new CoverageEligibilityRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequest>): CoverageEligibilityRequest {
    return new CoverageEligibilityRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequest) => Partial<ICoverageEligibilityRequest>): CoverageEligibilityRequest {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_PROPERTIES);
    return result as ICoverageEligibilityRequest;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequest
   */
  clone(): CoverageEligibilityRequest {
    return new CoverageEligibilityRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequest
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
