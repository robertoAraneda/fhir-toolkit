import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AuditEvent } from '../../models/resources/AuditEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  AuditEventActionType,
  AuditEventSeverityType,
  IAuditEvent,
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventOutcome,
  IAuditEventSource,
  ICodeableConcept,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

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
 *   .setCode(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class AuditEventBuilder extends DomainResourceBuilder<AuditEvent, IAuditEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Specific type of event
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
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
   * Set severity
   * emergency | alert | critical | error | warning | notice | informational | debug
   */
  setSeverity(severity: AuditEventSeverityType): this {
    this.data.severity = severity;
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
  setOutcome(outcome: IAuditEventOutcome): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set patient
   * The patient is the subject of the data used/created/updated/deleted during the activity
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set encounter
   * Encounter within which this event occurred or which the event is tightly associated
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
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
  // Choice Types
  // ============================================================================

  /**
   * Set occurred choice type (occurredPeriod, occurredDateTime)
   * @param type - 'Period' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurred('Period', value)
   */
  setOccurred<T extends 'Period' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurred${type}` as keyof IAuditEvent;
    const otherKeys: (keyof IAuditEvent)[] = [];
    if (type !== 'Period') {
      otherKeys.push('occurredPeriod' as keyof IAuditEvent);
      otherKeys.push('_occurredPeriod' as keyof IAuditEvent);
    }
    if (type !== 'DateTime') {
      otherKeys.push('occurredDateTime' as keyof IAuditEvent);
      otherKeys.push('_occurredDateTime' as keyof IAuditEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * Type/identifier of event
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add authorization
   * Authorization related to the event
   */
  addAuthorization(authorization: ICodeableConcept): this {
    return this.addToArray('authorization', authorization);
  }

  /**
   * Add basedOn
   * Workflow authorization within which this event occurred
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'Task'>): this {
    return this.addToArray('basedOn', basedOn);
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
