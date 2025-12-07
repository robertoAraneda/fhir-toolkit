import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IServiceRequest,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ServiceRequest */
const SERVICE_REQUEST_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'replaces',
  'requisition',
  'status',
  '_status',
  'intent',
  '_intent',
  'category',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'code',
  'orderDetail',
  'quantityQuantity',
  'quantityRatio',
  'quantityRange',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'asNeededBoolean',
  '_asNeededBoolean',
  'asNeededCodeableConcept',
  'authoredOn',
  '_authoredOn',
  'requester',
  'performerType',
  'performer',
  'locationCode',
  'locationReference',
  'reasonCode',
  'reasonReference',
  'insurance',
  'supportingInfo',
  'specimen',
  'bodySite',
  'note',
  'patientInstruction',
  '_patientInstruction',
  'relevantHistory',
] as const;

/**
 * ServiceRequest - A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 *
 * @see https://hl7.org/fhir/R4/servicerequest.html
 *
 * @example
 * const serviceRequest = new ServiceRequest({
 *   resourceType: 'ServiceRequest',
 *   // ... properties
 * });
 */
export class ServiceRequest extends DomainResource implements IServiceRequest {
  readonly resourceType = 'ServiceRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifiers assigned to this order */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** What request fulfills */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'MedicationRequest'>[];

  /** What request replaces */
  replaces?: IReference<'ServiceRequest'>[];

  /** Composite Request ID */
  requisition?: IIdentifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: RequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** Classification of service */
  category?: ICodeableConcept[];

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if service/procedure should not be performed */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** What is being requested/ordered */
  code?: ICodeableConcept;

  /** Additional order information */
  orderDetail?: ICodeableConcept[];

  /** Service amount */
  quantityQuantity?: IQuantity;

  /** Service amount */
  quantityRatio?: IRatio;

  /** Service amount */
  quantityRange?: IRange;

  /** Individual or Entity the service is ordered for */
  subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>;

  /** Encounter in which the request was created */
  encounter?: IReference<'Encounter'>;

  /** When service should occur */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When service should occur */
  occurrencePeriod?: IPeriod;

  /** When service should occur */
  occurrenceTiming?: ITiming;

  /** Preconditions for service */
  asNeededBoolean?: boolean;

  /** Extension for asNeededBoolean */
  _asNeededBoolean?: IElement;

  /** Preconditions for service */
  asNeededCodeableConcept?: ICodeableConcept;

  /** Date request signed */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Who/what is requesting service */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** Performer role */
  performerType?: ICodeableConcept;

  /** Requested performer */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>[];

  /** Requested location */
  locationCode?: ICodeableConcept[];

  /** Requested location */
  locationReference?: IReference<'Location'>[];

  /** Explanation/Justification for procedure or service */
  reasonCode?: ICodeableConcept[];

  /** Explanation/Justification for service or service */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Additional clinical information */
  supportingInfo?: IReference<'Resource'>[];

  /** Procedure Samples */
  specimen?: IReference<'Specimen'>[];

  /** Location on Body */
  bodySite?: ICodeableConcept[];

  /** Comments */
  note?: IAnnotation[];

  /** Patient or consumer-oriented instructions */
  patientInstruction?: string;

  /** Extension for patientInstruction */
  _patientInstruction?: IElement;

  /** Request provenance */
  relevantHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IServiceRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, SERVICE_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ServiceRequest from a JSON object
   */
  static fromJSON(json: IServiceRequest): ServiceRequest {
    return new ServiceRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ServiceRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IServiceRequest>): ServiceRequest {
    return new ServiceRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ServiceRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IServiceRequest) => Partial<IServiceRequest>): ServiceRequest {
    const currentData = this.toJSON();
    return new ServiceRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IServiceRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IServiceRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SERVICE_REQUEST_PROPERTIES);
    return result as IServiceRequest;
  }

  /**
   * Create a deep clone of this ServiceRequest
   */
  clone(): ServiceRequest {
    return new ServiceRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ServiceRequest
   */
  toString(): string {
    const parts: string[] = ['ServiceRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
