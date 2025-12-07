import { DomainResource } from '../base/DomainResource.js';
import type {
  EligibilityOutcomeType,
  EligibilityResponsePurposeType,
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverageEligibilityResponse,
  ICoverageEligibilityResponseError,
  ICoverageEligibilityResponseEvent,
  ICoverageEligibilityResponseInsurance,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityResponse */
const COVERAGE_ELIGIBILITY_RESPONSE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'purpose',
  '_purpose',
  'patient',
  'event',
  'servicedDate',
  '_servicedDate',
  'servicedPeriod',
  'created',
  '_created',
  'requestor',
  'request',
  'outcome',
  '_outcome',
  'disposition',
  '_disposition',
  'insurer',
  'insurance',
  'preAuthRef',
  '_preAuthRef',
  'form',
  'error',
] as const;

/**
 * CoverageEligibilityResponse - This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponse.html
 *
 * @example
 * const coverageEligibilityResponse = new CoverageEligibilityResponse({
 *   resourceType: 'CoverageEligibilityResponse',
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponse extends DomainResource implements ICoverageEligibilityResponse {
  readonly resourceType = 'CoverageEligibilityResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for coverage eligiblity request */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** auth-requirements | benefits | discovery | validation */
  purpose: EligibilityResponsePurposeType[];

  /** Extension for purpose */
  _purpose?: IElement;

  /** Intended recipient of products and services */
  patient: IReference<'Patient'>;

  /** Event information */
  event?: ICoverageEligibilityResponseEvent[];

  /** Estimated date or dates of service */
  servicedDate?: string;

  /** Extension for servicedDate */
  _servicedDate?: IElement;

  /** Estimated date or dates of service */
  servicedPeriod?: IPeriod;

  /** Response creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Party responsible for the request */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Eligibility request reference */
  request: IReference<'CoverageEligibilityRequest'>;

  /** queued | complete | error | partial */
  outcome: EligibilityOutcomeType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Disposition Message */
  disposition?: string;

  /** Extension for disposition */
  _disposition?: IElement;

  /** Coverage issuer */
  insurer: IReference<'Organization'>;

  /** Patient insurance information */
  insurance?: ICoverageEligibilityResponseInsurance[];

  /** Preauthorization reference */
  preAuthRef?: string;

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  /** Printed form identifier */
  form?: ICodeableConcept;

  /** Processing errors */
  error?: ICoverageEligibilityResponseError[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponse from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponse): CoverageEligibilityResponse {
    return new CoverageEligibilityResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponse>): CoverageEligibilityResponse {
    return new CoverageEligibilityResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponse) => Partial<ICoverageEligibilityResponse>): CoverageEligibilityResponse {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_PROPERTIES);
    return result as ICoverageEligibilityResponse;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponse
   */
  clone(): CoverageEligibilityResponse {
    return new CoverageEligibilityResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponse
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
