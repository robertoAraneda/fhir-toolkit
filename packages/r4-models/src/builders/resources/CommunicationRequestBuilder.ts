import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CommunicationRequest } from '../../models/resources/CommunicationRequest.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICommunicationRequest,
  ICommunicationRequestPayload,
  IIdentifier,
  IPeriod,
  IReference,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * CommunicationRequestBuilder - Fluent builder for CommunicationRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const communicationRequest = new CommunicationRequestBuilder()
 *   .setId('123')
 *   .setGroupIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CommunicationRequestBuilder extends DomainResourceBuilder<CommunicationRequest, ICommunicationRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set groupIdentifier
   * Composite request this is part of
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
    return this;
  }

  /**
   * Set status
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  setStatus(status: RequestStatusType): this {
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
   * Set doNotPerform
   * True if request is prohibiting action
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
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
   * Set encounter
   * Encounter created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authoredOn
   * When request transitioned to being actionable
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set requester
   * Who/what is requesting service
   */
  setRequester(requester: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set sender
   * Message sender
   */
  setSender(sender: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'HealthcareService'>): this {
    this.data.sender = sender;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof ICommunicationRequest;
    const otherKeys: (keyof ICommunicationRequest)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof ICommunicationRequest);
      otherKeys.push('_occurrenceDateTime' as keyof ICommunicationRequest);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof ICommunicationRequest);
      otherKeys.push('_occurrencePeriod' as keyof ICommunicationRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Add basedOn
   * Fulfills plan or proposal
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add replaces
   * Request(s) replaced by this request
   */
  addReplaces(replac: IReference<'CommunicationRequest'>): this {
    return this.addToArray('replaces', replac);
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
   * Resources that pertain to this communication request
   */
  addAbout(about: IReference<'Resource'>): this {
    return this.addToArray('about', about);
  }

  /**
   * Add payload
   * Message payload
   */
  addPayload(payload: ICommunicationRequestPayload): this {
    return this.addToArray('payload', payload);
  }

  /**
   * Add recipient
   * Message recipient
   */
  addRecipient(recipient: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'CareTeam' | 'HealthcareService'>): this {
    return this.addToArray('recipient', recipient);
  }

  /**
   * Add reasonCode
   * Why is communication needed?
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Why is communication needed?
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add note
   * Comments made about communication request
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CommunicationRequest instance
   */
  build(): CommunicationRequest {
    return new CommunicationRequest(this.data);
  }

  /**
   * Build and validate the CommunicationRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CommunicationRequest> {
    const communicationRequest = this.build();
    await communicationRequest.validateOrThrow();
    return communicationRequest;
  }
}
