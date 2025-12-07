import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AuditEvent } from '../../models/resources/AuditEvent.js';
import type {
  AuditEventActionType,
  AuditEventOutcomeType,
  IAuditEvent,
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventSource,
  ICodeableConcept,
  ICoding,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * AuditEventBuilder - Fluent builder for AuditEvent resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEvent = new AuditEventBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addSubtype({ ... })
 *   .build();
 */
export class AuditEventBuilder extends DomainResourceBuilder<AuditEvent, IAuditEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type/identifier of event
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set action
   * Type of action performed during the event
   */
  setAction(action: AuditEventActionType): this {
    this.data.action = action;
    return this;
  }

  /**
   * Set period
   * When the activity occurred
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set recorded
   * Time when the event was recorded
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set outcome
   * Whether the event succeeded or failed
   */
  setOutcome(outcome: AuditEventOutcomeType): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set outcomeDesc
   * Description of the event outcome
   */
  setOutcomeDesc(outcomeDesc: string): this {
    this.data.outcomeDesc = outcomeDesc;
    return this;
  }

  /**
   * Set source
   * Audit Event Reporter
   */
  setSource(source: IAuditEventSource): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subtype
   * More specific type/id for the event
   */
  addSubtype(subtype: ICoding): this {
    return this.addToArray('subtype', subtype);
  }

  /**
   * Add purposeOfEvent
   * The purposeOfUse of the event
   */
  addPurposeOfEvent(purposeOfEvent: ICodeableConcept): this {
    return this.addToArray('purposeOfEvent', purposeOfEvent);
  }

  /**
   * Add agent
   * Actor involved in the event
   */
  addAgent(agent: IAuditEventAgent): this {
    return this.addToArray('agent', agent);
  }

  /**
   * Add entity
   * Data or objects used
   */
  addEntity(entity: IAuditEventEntity): this {
    return this.addToArray('entity', entity);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEvent instance
   */
  build(): AuditEvent {
    return new AuditEvent(this.data);
  }

  /**
   * Build and validate the AuditEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEvent> {
    const auditEvent = this.build();
    await auditEvent.validateOrThrow();
    return auditEvent;
  }
}
