import { DomainResource } from '../base/DomainResource.js';
import type {
  GuidanceResponseStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDataRequirement,
  IElement,
  IGuidanceResponse,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GuidanceResponse */
const GUIDANCE_RESPONSE_PROPERTIES = [
  'requestIdentifier',
  'identifier',
  'moduleUri',
  '_moduleUri',
  'moduleCanonical',
  '_moduleCanonical',
  'moduleCodeableConcept',
  'status',
  '_status',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'performer',
  'reason',
  'note',
  'evaluationMessage',
  'outputParameters',
  'result',
  'dataRequirement',
] as const;

/**
 * GuidanceResponse - A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 *
 * @see https://hl7.org/fhir/R4/guidanceresponse.html
 *
 * @example
 * const guidanceResponse = new GuidanceResponse({
 *   resourceType: 'GuidanceResponse',
 *   // ... properties
 * });
 */
export class GuidanceResponse extends DomainResource implements IGuidanceResponse {
  readonly resourceType = 'GuidanceResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The identifier of the request associated with this response, if any */
  requestIdentifier?: IIdentifier;

  /** Business identifier */
  identifier?: IIdentifier[];

  /** What guidance was requested */
  moduleUri?: string;

  /** Extension for moduleUri */
  _moduleUri?: IElement;

  /** What guidance was requested */
  moduleCanonical?: string;

  /** Extension for moduleCanonical */
  _moduleCanonical?: IElement;

  /** What guidance was requested */
  moduleCodeableConcept?: ICodeableConcept;

  /** success | data-requested | data-required | in-progress | failure | entered-in-error */
  status: GuidanceResponseStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Patient the request was performed for */
  subject?: IReference<'Patient' | 'Group'>;

  /** Encounter during which the response was returned */
  encounter?: IReference<'Encounter'>;

  /** When the guidance response was processed */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** Device returning the guidance */
  performer?: IReference<'Device'>;

  /** Why guidance is needed */
  reason?: ICodeableReference[];

  /** Additional notes about the response */
  note?: IAnnotation[];

  /** Messages resulting from the evaluation of the artifact or artifacts */
  evaluationMessage?: IReference<'OperationOutcome'>;

  /** The output parameters of the evaluation, if any */
  outputParameters?: IReference<'Parameters'>;

  /** Proposed actions, if any */
  result?: IReference<'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'Task' | 'VisionPrescription'>[];

  /** Additional required data */
  dataRequirement?: IDataRequirement[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGuidanceResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, GUIDANCE_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GuidanceResponse from a JSON object
   */
  static fromJSON(json: IGuidanceResponse): GuidanceResponse {
    return new GuidanceResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GuidanceResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGuidanceResponse>): GuidanceResponse {
    return new GuidanceResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GuidanceResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGuidanceResponse) => Partial<IGuidanceResponse>): GuidanceResponse {
    const currentData = this.toJSON();
    return new GuidanceResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGuidanceResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGuidanceResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, GUIDANCE_RESPONSE_PROPERTIES);
    return result as IGuidanceResponse;
  }

  /**
   * Create a deep clone of this GuidanceResponse
   */
  clone(): GuidanceResponse {
    return new GuidanceResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GuidanceResponse
   */
  toString(): string {
    const parts: string[] = ['GuidanceResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
