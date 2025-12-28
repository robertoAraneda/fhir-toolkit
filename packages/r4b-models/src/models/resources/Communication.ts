import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAnnotation,
  ICodeableConcept,
  ICommunication,
  ICommunicationPayload,
  IElement,
  IIdentifier,
  IReference,
  RequestPriorityType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Communication */
const COMMUNICATION_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'partOf',
  'inResponseTo',
  'status',
  '_status',
  'statusReason',
  'category',
  'priority',
  '_priority',
  'medium',
  'subject',
  'topic',
  'about',
  'encounter',
  'sent',
  '_sent',
  'received',
  '_received',
  'recipient',
  'sender',
  'reasonCode',
  'reasonReference',
  'payload',
  'note',
] as const;

/**
 * Communication - An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 *
 * @see https://hl7.org/fhir/R4B/communication.html
 *
 * @example
 * const communication = new Communication({
 *   // ... properties
 * });
 */
export class Communication extends DomainResource implements ICommunication {
  readonly resourceType = 'Communication' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Request fulfilled by this communication */
  basedOn?: IReference<'Resource'>[];

  /** Part of this action */
  partOf?: IReference<'Resource'>[];

  /** Reply to */
  inResponseTo?: IReference<'Communication'>[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
  status: EventStatusType;

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

  /** A channel of communication */
  medium?: ICodeableConcept[];

  /** Focus of message */
  subject?: IReference<'Patient' | 'Group'>;

  /** Description of the purpose/content */
  topic?: ICodeableConcept;

  /** Resources that pertain to this communication */
  about?: IReference<'Resource'>[];

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** When sent */
  sent?: string;

  /** Extension for sent */
  _sent?: IElement;

  /** When received */
  received?: string;

  /** Extension for received */
  _received?: IElement;

  /** Message recipient */
  recipient?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'CareTeam' | 'HealthcareService'>[];

  /** Message sender */
  sender?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService'>;

  /** Indication for message */
  reasonCode?: ICodeableConcept[];

  /** Why was communication done? */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Message payload */
  payload?: ICommunicationPayload[];

  /** Comments made about the communication */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICommunication>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, COMMUNICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Communication from a JSON object
   */
  static fromJSON(json: ICommunication): Communication {
    return new Communication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Communication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICommunication>): Communication {
    return new Communication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Communication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICommunication) => Partial<ICommunication>): Communication {
    const currentData = this.toJSON();
    return new Communication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICommunication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICommunication {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COMMUNICATION_PROPERTIES);
    return result as ICommunication;
  }

  /**
   * Create a deep clone of this Communication
   */
  clone(): Communication {
    return new Communication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Communication
   */
  toString(): string {
    const parts: string[] = ['Communication'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
