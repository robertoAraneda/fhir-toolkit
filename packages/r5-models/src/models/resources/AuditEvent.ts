import { DomainResource } from '../base/DomainResource.js';
import type {
  AuditEventActionType,
  AuditEventSeverityType,
  IAuditEvent,
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventOutcome,
  IAuditEventSource,
  ICodeableConcept,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AuditEvent */
const AUDIT_EVENT_PROPERTIES = [
  'category',
  'code',
  'action',
  '_action',
  'severity',
  '_severity',
  'occurredPeriod',
  'occurredDateTime',
  '_occurredDateTime',
  'recorded',
  '_recorded',
  'outcome',
  'authorization',
  'basedOn',
  'patient',
  'encounter',
  'agent',
  'source',
  'entity',
] as const;

/**
 * AuditEvent - A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 *
 * @see https://hl7.org/fhir/R4/auditevent.html
 *
 * @example
 * const auditEvent = new AuditEvent({
 *   resourceType: 'AuditEvent',
 *   // ... properties
 * });
 */
export class AuditEvent extends DomainResource implements IAuditEvent {
  readonly resourceType = 'AuditEvent' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type/identifier of event */
  category?: ICodeableConcept[];

  /** Specific type of event */
  code: ICodeableConcept;

  /** Type of action performed during the event */
  action?: AuditEventActionType;

  /** Extension for action */
  _action?: IElement;

  /** emergency | alert | critical | error | warning | notice | informational | debug */
  severity?: AuditEventSeverityType;

  /** Extension for severity */
  _severity?: IElement;

  /** When the activity occurred */
  occurredPeriod?: IPeriod;

  /** When the activity occurred */
  occurredDateTime?: string;

  /** Extension for occurredDateTime */
  _occurredDateTime?: IElement;

  /** Time when the event was recorded */
  recorded: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Whether the event succeeded or failed */
  outcome?: IAuditEventOutcome;

  /** Authorization related to the event */
  authorization?: ICodeableConcept[];

  /** Workflow authorization within which this event occurred */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'Task'>[];

  /** The patient is the subject of the data used/created/updated/deleted during the activity */
  patient?: IReference<'Patient'>;

  /** Encounter within which this event occurred or which the event is tightly associated */
  encounter?: IReference<'Encounter'>;

  /** Actor involved in the event */
  agent: IAuditEventAgent[];

  /** Audit Event Reporter */
  source: IAuditEventSource;

  /** Data or objects used */
  entity?: IAuditEventEntity[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAuditEvent>) {
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
