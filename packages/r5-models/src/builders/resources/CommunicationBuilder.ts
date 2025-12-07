import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Communication } from '../../models/resources/Communication.js';
import type {
  EventStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  ICommunication,
  ICommunicationPayload,
  IIdentifier,
  IReference,
  RequestPriorityType,
} from '@fhir-toolkit/r5-types';

/**
 * CommunicationBuilder - Fluent builder for Communication resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const communication = new CommunicationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CommunicationBuilder extends DomainResourceBuilder<Communication, ICommunication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  setStatus(status: EventStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set subject
   * Focus of message
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set topic
   * Description of the purpose/content
   */
  setTopic(topic: ICodeableConcept): this {
    this.data.topic = topic;
    return this;
  }

  /**
   * Set encounter
   * The Encounter during which this Communication was created
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set sent
   * When sent
   */
  setSent(sent: string): this {
    this.data.sent = sent;
    return this;
  }

  /**
   * Set received
   * When received
   */
  setReceived(received: string): this {
    this.data.received = received;
    return this;
  }

  /**
   * Set sender
   * Who shares the information
   */
  setSender(sender: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService' | 'Endpoint' | 'CareTeam'>): this {
    this.data.sender = sender;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiatesCanonical
   * Instantiates FHIR protocol or definition
   */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addToArray('instantiatesCanonical', instantiatesCanonical);
  }

  /**
   * Add instantiatesUri
   * Instantiates external protocol or definition
   */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addToArray('instantiatesUri', instantiatesUri);
  }

  /**
   * Add basedOn
   * Request fulfilled by this communication
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event (e.g. Communication, Procedure)
   */
  addPartOf(partOf: IReference<'Resource'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add inResponseTo
   * Reply to
   */
  addInResponseTo(inResponseTo: IReference<'Communication'>): this {
    return this.addToArray('inResponseTo', inResponseTo);
  }

  /**
   * Add category
   * Message category
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add medium
   * A channel of communication
   */
  addMedium(medium: ICodeableConcept): this {
    return this.addToArray('medium', medium);
  }

  /**
   * Add about
   * Resources that pertain to this communication
   */
  addAbout(about: IReference<'Resource'>): this {
    return this.addToArray('about', about);
  }

  /**
   * Add recipient
   * Who the information is shared with
   */
  addRecipient(recipient: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Endpoint'>): this {
    return this.addToArray('recipient', recipient);
  }

  /**
   * Add reason
   * Indication for message
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add payload
   * Message payload
   */
  addPayload(payload: ICommunicationPayload): this {
    return this.addToArray('payload', payload);
  }

  /**
   * Add note
   * Comments made about the communication
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Communication instance
   */
  build(): Communication {
    return new Communication(this.data);
  }

  /**
   * Build and validate the Communication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Communication> {
    const communication = this.build();
    await communication.validateOrThrow();
    return communication;
  }
}
