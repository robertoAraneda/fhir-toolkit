import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IAuditEventAgent } from '../backbones/IAuditEventAgent.js';
import type { IAuditEventEntity } from '../backbones/IAuditEventEntity.js';
import type { IAuditEventOutcome } from '../backbones/IAuditEventOutcome.js';
import type { IAuditEventSource } from '../backbones/IAuditEventSource.js';
import type { AuditEventActionType, AuditEventSeverityType } from '../../valuesets/index.js';

/**
 * AuditEvent Interface
 * 
 * A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 * 
 *
 * @see https://hl7.org/fhir/R4/auditevent.html
 */
export interface IAuditEvent extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'AuditEvent';

  /**
   * Type/identifier of event
   */
  category?: ICodeableConcept[];

  /**
   * Specific type of event
   */
  code: ICodeableConcept;

  /**
   * Type of action performed during the event
   */
  action?: AuditEventActionType;
  /**
   * Extension for action
   */
  _action?: IElement;

  /**
   * emergency | alert | critical | error | warning | notice | informational | debug
   */
  severity?: AuditEventSeverityType;
  /**
   * Extension for severity
   */
  _severity?: IElement;

  /**
   * When the activity occurred
   */
  occurredPeriod?: IPeriod;

  /**
   * When the activity occurred
   */
  occurredDateTime?: string;
  /**
   * Extension for occurredDateTime
   */
  _occurredDateTime?: IElement;

  /**
   * Time when the event was recorded
   */
  recorded: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Whether the event succeeded or failed
   */
  outcome?: IAuditEventOutcome;

  /**
   * Authorization related to the event
   */
  authorization?: ICodeableConcept[];

  /**
   * Workflow authorization within which this event occurred
   */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'Task'>[];

  /**
   * The patient is the subject of the data used/created/updated/deleted during the activity
   */
  patient?: IReference<'Patient'>;

  /**
   * Encounter within which this event occurred or which the event is tightly associated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Actor involved in the event
   */
  agent: IAuditEventAgent[];

  /**
   * Audit Event Reporter
   */
  source: IAuditEventSource;

  /**
   * Data or objects used
   */
  entity?: IAuditEventEntity[];

}
