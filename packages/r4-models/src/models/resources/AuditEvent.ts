import { DomainResource } from '../base/DomainResource.js';
import type {
  AuditEventActionType,
  AuditEventOutcomeType,
  IAuditEvent,
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventSource,
  ICodeableConcept,
  ICoding,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AuditEvent */
const AUDIT_EVENT_PROPERTIES = [
  'type',
  'subtype',
  'action',
  '_action',
  'period',
  'recorded',
  '_recorded',
  'outcome',
  '_outcome',
  'outcomeDesc',
  '_outcomeDesc',
  'purposeOfEvent',
  'agent',
  'source',
  'entity',
] as const;

/**
 * AuditEvent - A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 *
 * @see https://hl7.org/fhir/R4/auditevent.html
 *
 * @example
 * const auditEvent = new AuditEvent({
 *   // ... properties
 * });
 */
export class AuditEvent extends DomainResource implements IAuditEvent {
  readonly resourceType = 'AuditEvent' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type/identifier of event */
  type: ICoding;

  /** More specific type/id for the event */
  subtype?: ICoding[];

  /** Type of action performed during the event */
  action?: AuditEventActionType;

  /** Extension for action */
  _action?: IElement;

  /** When the activity occurred */
  period?: IPeriod;

  /** Time when the event was recorded */
  recorded: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Whether the event succeeded or failed */
  outcome?: AuditEventOutcomeType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Description of the event outcome */
  outcomeDesc?: string;

  /** Extension for outcomeDesc */
  _outcomeDesc?: IElement;

  /** The purposeOfUse of the event */
  purposeOfEvent?: ICodeableConcept[];

  /** Actor involved in the event */
  agent: IAuditEventAgent[];

  /** Audit Event Reporter */
  source: IAuditEventSource;

  /** Data or objects used */
  entity?: IAuditEventEntity[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAuditEvent>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, AUDIT_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AuditEvent from a JSON object
   */
  static fromJSON(json: IAuditEvent): AuditEvent {
    return new AuditEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AuditEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAuditEvent>): AuditEvent {
    return new AuditEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AuditEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAuditEvent) => Partial<IAuditEvent>): AuditEvent {
    const currentData = this.toJSON();
    return new AuditEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAuditEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAuditEvent {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, AUDIT_EVENT_PROPERTIES);
    return result as IAuditEvent;
  }

  /**
   * Create a deep clone of this AuditEvent
   */
  clone(): AuditEvent {
    return new AuditEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AuditEvent
   */
  toString(): string {
    const parts: string[] = ['AuditEvent'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
