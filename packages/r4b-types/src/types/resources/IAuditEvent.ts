import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IAuditEventAgent } from '../backbones/IAuditEventAgent.js';
import type { IAuditEventEntity } from '../backbones/IAuditEventEntity.js';
import type { IAuditEventSource } from '../backbones/IAuditEventSource.js';
import type { AuditEventActionType, AuditEventOutcomeType } from '../../valuesets/index.js';

/**
 * AuditEvent Interface
 * 
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
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
  type: ICoding;

  /**
   * More specific type/id for the event
   */
  subtype?: ICoding[];

  /**
   * Type of action performed during the event
   */
  action?: AuditEventActionType;
  /**
   * Extension for action
   */
  _action?: IElement;

  /**
   * When the activity occurred
   */
  period?: IPeriod;

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
  outcome?: AuditEventOutcomeType;
  /**
   * Extension for outcome
   */
  _outcome?: IElement;

  /**
   * Description of the event outcome
   */
  outcomeDesc?: string;
  /**
   * Extension for outcomeDesc
   */
  _outcomeDesc?: IElement;

  /**
   * The purposeOfUse of the event
   */
  purposeOfEvent?: ICodeableConcept[];

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
