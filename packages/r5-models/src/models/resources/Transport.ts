import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IReference,
  ITransport,
  ITransportInput,
  ITransportOutput,
  ITransportRestriction,
  RequestPriorityType,
  TransportIntentType,
  TransportStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Transport */
const TRANSPORT_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'groupIdentifier',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'code',
  'description',
  '_description',
  'focus',
  'for',
  'encounter',
  'completionTime',
  '_completionTime',
  'authoredOn',
  '_authoredOn',
  'lastModified',
  '_lastModified',
  'requester',
  'performerType',
  'owner',
  'location',
  'insurance',
  'note',
  'relevantHistory',
  'restriction',
  'input',
  'output',
  'requestedLocation',
  'currentLocation',
  'reason',
  'history',
] as const;

/**
 * Transport - Record of transport of item.
 *
 * @see https://hl7.org/fhir/R5/transport.html
 *
 * @example
 * const transport = new Transport({
 *   // ... properties
 * });
 */
export class Transport extends DomainResource implements ITransport {
  readonly resourceType = 'Transport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Formal definition of transport */
  instantiatesCanonical?: string;

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Formal definition of transport */
  instantiatesUri?: string;

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Request fulfilled by this transport */
  basedOn?: IReference<'Resource'>[];

  /** Requisition or grouper id */
  groupIdentifier?: IIdentifier;

  /** Part of referenced event */
  partOf?: IReference<'Transport'>[];

  /** in-progress | completed | abandoned | cancelled | planned | entered-in-error */
  status?: TransportStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: TransportIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** Transport Type */
  code?: ICodeableConcept;

  /** Human-readable explanation of transport */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** What transport is acting on */
  focus?: IReference<'Resource'>;

  /** Beneficiary of the Transport */
  for?: IReference<'Resource'>;

  /** Healthcare event during which this transport originated */
  encounter?: IReference<'Encounter'>;

  /** Completion time of the event (the occurrence) */
  completionTime?: string;

  /** Extension for completionTime */
  _completionTime?: IElement;

  /** Transport Creation Date */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Transport Last Modified Date */
  lastModified?: string;

  /** Extension for lastModified */
  _lastModified?: IElement;

  /** Who is asking for transport to be done */
  requester?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Requested performer */
  performerType?: ICodeableConcept[];

  /** Responsible individual */
  owner?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** Where transport occurs */
  location?: IReference<'Location'>;

  /** Associated insurance coverage */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /** Comments made about the transport */
  note?: IAnnotation[];

  /** Key events in history of the Transport */
  relevantHistory?: IReference<'Provenance'>[];

  /** Constraints on fulfillment transports */
  restriction?: ITransportRestriction;

  /** Information used to perform transport */
  input?: ITransportInput[];

  /** Information produced as part of transport */
  output?: ITransportOutput[];

  /** The desired location */
  requestedLocation: IReference<'Location'>;

  /** The entity current location */
  currentLocation: IReference<'Location'>;

  /** Why transport is needed */
  reason?: ICodeableReference;

  /** Parent (or preceding) transport */
  history?: IReference<'Transport'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ITransport>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, TRANSPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Transport from a JSON object
   */
  static fromJSON(json: ITransport): Transport {
    return new Transport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Transport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITransport>): Transport {
    return new Transport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Transport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITransport) => Partial<ITransport>): Transport {
    const currentData = this.toJSON();
    return new Transport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITransport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITransport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TRANSPORT_PROPERTIES);
    return result as ITransport;
  }

  /**
   * Create a deep clone of this Transport
   */
  clone(): Transport {
    return new Transport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Transport
   */
  toString(): string {
    const parts: string[] = ['Transport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
