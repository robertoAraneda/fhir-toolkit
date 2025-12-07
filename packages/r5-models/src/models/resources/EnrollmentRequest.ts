import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  IElement,
  IEnrollmentRequest,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EnrollmentRequest */
const ENROLLMENT_REQUEST_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'created',
  '_created',
  'insurer',
  'provider',
  'candidate',
  'coverage',
] as const;

/**
 * EnrollmentRequest - This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 *
 * @see https://hl7.org/fhir/R4/enrollmentrequest.html
 *
 * @example
 * const enrollmentRequest = new EnrollmentRequest({
 *   // ... properties
 * });
 */
export class EnrollmentRequest extends DomainResource implements IEnrollmentRequest {
  readonly resourceType = 'EnrollmentRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status?: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Creation date */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Target */
  insurer?: IReference<'Organization'>;

  /** Responsible practitioner */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** The subject to be enrolled */
  candidate?: IReference<'Patient'>;

  /** Insurance information */
  coverage?: IReference<'Coverage'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEnrollmentRequest>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ENROLLMENT_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EnrollmentRequest from a JSON object
   */
  static fromJSON(json: IEnrollmentRequest): EnrollmentRequest {
    return new EnrollmentRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EnrollmentRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEnrollmentRequest>): EnrollmentRequest {
    return new EnrollmentRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EnrollmentRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEnrollmentRequest) => Partial<IEnrollmentRequest>): EnrollmentRequest {
    const currentData = this.toJSON();
    return new EnrollmentRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEnrollmentRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEnrollmentRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ENROLLMENT_REQUEST_PROPERTIES);
    return result as IEnrollmentRequest;
  }

  /**
   * Create a deep clone of this EnrollmentRequest
   */
  clone(): EnrollmentRequest {
    return new EnrollmentRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EnrollmentRequest
   */
  toString(): string {
    const parts: string[] = ['EnrollmentRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
