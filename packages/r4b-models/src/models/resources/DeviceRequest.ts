import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDeviceRequest,
  IDeviceRequestParameter,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceRequest */
const DEVICE_REQUEST_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'priorRequest',
  'groupIdentifier',
  'status',
  '_status',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'codeReference',
  'codeCodeableConcept',
  'parameter',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'authoredOn',
  '_authoredOn',
  'requester',
  'performerType',
  'performer',
  'reasonCode',
  'reasonReference',
  'insurance',
  'supportingInfo',
  'note',
  'relevantHistory',
] as const;

/**
 * DeviceRequest - Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 *
 * @see https://hl7.org/fhir/R4/devicerequest.html
 *
 * @example
 * const deviceRequest = new DeviceRequest({
 *   resourceType: 'DeviceRequest',
 *   // ... properties
 * });
 */
export class DeviceRequest extends DomainResource implements IDeviceRequest {
  readonly resourceType = 'DeviceRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Request identifier */
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
  basedOn?: IReference<'Resource'>[];

  /** What request replaces */
  priorRequest?: IReference<'Resource'>[];

  /** Identifier of composite request */
  groupIdentifier?: IIdentifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status?: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: RequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** Device requested */
  codeReference?: IReference;

  /** Device requested */
  codeCodeableConcept?: ICodeableConcept;

  /** Device details */
  parameter?: IDeviceRequestParameter[];

  /** Focus of request */
  subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>;

  /** Encounter motivating request */
  encounter?: IReference<'Encounter'>;

  /** Desired time or schedule for use */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** Desired time or schedule for use */
  occurrencePeriod?: IPeriod;

  /** Desired time or schedule for use */
  occurrenceTiming?: ITiming;

  /** When recorded */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Who/what is requesting diagnostics */
  requester?: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Filler role */
  performerType?: ICodeableConcept;

  /** Requested Filler */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** Coded Reason for request */
  reasonCode?: ICodeableConcept[];

  /** Linked Reason for request */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Additional clinical information */
  supportingInfo?: IReference<'Resource'>[];

  /** Notes or comments */
  note?: IAnnotation[];

  /** Request provenance */
  relevantHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceRequest from a JSON object
   */
  static fromJSON(json: IDeviceRequest): DeviceRequest {
    return new DeviceRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceRequest>): DeviceRequest {
    return new DeviceRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceRequest) => Partial<IDeviceRequest>): DeviceRequest {
    const currentData = this.toJSON();
    return new DeviceRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_REQUEST_PROPERTIES);
    return result as IDeviceRequest;
  }

  /**
   * Create a deep clone of this DeviceRequest
   */
  clone(): DeviceRequest {
    return new DeviceRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceRequest
   */
  toString(): string {
    const parts: string[] = ['DeviceRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
