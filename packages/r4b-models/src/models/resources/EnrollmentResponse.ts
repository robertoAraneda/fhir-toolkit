import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  IElement,
  IEnrollmentResponse,
  IIdentifier,
  IReference,
  RemittanceOutcomeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EnrollmentResponse */
const ENROLLMENT_RESPONSE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'request',
  'outcome',
  '_outcome',
  'disposition',
  '_disposition',
  'created',
  '_created',
  'organization',
  'requestProvider',
] as const;

/**
 * EnrollmentResponse - This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 *
 * @see https://hl7.org/fhir/R4B/enrollmentresponse.html
 *
 * @example
 * const enrollmentResponse = new EnrollmentResponse({
 *   // ... properties
 * });
 */
export class EnrollmentResponse extends DomainResource implements IEnrollmentResponse {
  readonly resourceType = 'EnrollmentResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status?: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Claim reference */
  request?: IReference<'EnrollmentRequest'>;

  /** queued | complete | error | partial */
  outcome?: RemittanceOutcomeType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Disposition Message */
  disposition?: string;

  /** Extension for disposition */
  _disposition?: IElement;

  /** Creation date */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Insurer */
  organization?: IReference<'Organization'>;

  /** Responsible practitioner */
  requestProvider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEnrollmentResponse>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ENROLLMENT_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EnrollmentResponse from a JSON object
   */
  static fromJSON(json: IEnrollmentResponse): EnrollmentResponse {
    return new EnrollmentResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EnrollmentResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEnrollmentResponse>): EnrollmentResponse {
    return new EnrollmentResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EnrollmentResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEnrollmentResponse) => Partial<IEnrollmentResponse>): EnrollmentResponse {
    const currentData = this.toJSON();
    return new EnrollmentResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEnrollmentResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEnrollmentResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ENROLLMENT_RESPONSE_PROPERTIES);
    return result as IEnrollmentResponse;
  }

  /**
   * Create a deep clone of this EnrollmentResponse
   */
  clone(): EnrollmentResponse {
    return new EnrollmentResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EnrollmentResponse
   */
  toString(): string {
    const parts: string[] = ['EnrollmentResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
