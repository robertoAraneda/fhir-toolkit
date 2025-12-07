import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICommunicationRequest,
  ICommunicationRequestPayload,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CommunicationRequest */
const COMMUNICATION_REQUEST_PROPERTIES = [
  'identifier',
  'basedOn',
  'replaces',
  'groupIdentifier',
  'status',
  '_status',
  'statusReason',
  'category',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'medium',
  'subject',
  'about',
  'encounter',
  'payload',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'authoredOn',
  '_authoredOn',
  'requester',
  'recipient',
  'sender',
  'reasonCode',
  'reasonReference',
  'note',
] as const;

/**
 * CommunicationRequest - A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 *
 * @see https://hl7.org/fhir/R4/communicationrequest.html
 *
 * @example
 * const communicationRequest = new CommunicationRequest({
 *   resourceType: 'CommunicationRequest',
 *   // ... properties
 * });
 */
export class CommunicationRequest extends DomainResource implements ICommunicationRequest {
  readonly resourceType = 'CommunicationRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier */
  identifier?: IIdentifier[];

  /** Fulfills plan or proposal */
  basedOn?: IReference<'Resource'>[];

  /** Request(s) replaced by this request */
  replaces?: IReference<'CommunicationRequest'>[];

  /** Composite request this is part of */
  groupIdentifier?: IIdentifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** Message category */
  category?: ICodeableConcept[];

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if request is prohibiting action */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** A channel of communication */
  medium?: ICodeableConcept[];

  /** Focus of message */
  subject?: IReference<'Patient' | 'Group'>;

  /** Resources that pertain to this communication request */
  about?: IReference<'Resource'>[];

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** Message payload */
  payload?: ICommunicationRequestPayload[];

  /** When scheduled */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When scheduled */
  occurrencePeriod?: IPeriod;

  /** When request transitioned to being actionable */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Who/what is requesting service */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** Message recipient */
  recipient?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'CareTeam' | 'HealthcareService'>[];

  /** Message sender */
  sender?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService'>;

  /** Why is communication needed? */
  reasonCode?: ICodeableConcept[];

  /** Why is communication needed? */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Comments made about communication request */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICommunicationRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, COMMUNICATION_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CommunicationRequest from a JSON object
   */
  static fromJSON(json: ICommunicationRequest): CommunicationRequest {
    return new CommunicationRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CommunicationRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICommunicationRequest>): CommunicationRequest {
    return new CommunicationRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CommunicationRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICommunicationRequest) => Partial<ICommunicationRequest>): CommunicationRequest {
    const currentData = this.toJSON();
    return new CommunicationRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICommunicationRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICommunicationRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COMMUNICATION_REQUEST_PROPERTIES);
    return result as ICommunicationRequest;
  }

  /**
   * Create a deep clone of this CommunicationRequest
   */
  clone(): CommunicationRequest {
    return new CommunicationRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CommunicationRequest
   */
  toString(): string {
    const parts: string[] = ['CommunicationRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
