import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { RequestOrchestration } from '../../models/resources/RequestOrchestration.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IReference,
  IRequestOrchestration,
  IRequestOrchestrationAction,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationBuilder - Fluent builder for RequestOrchestration resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestration = new RequestOrchestrationBuilder()
 *   .setId('123')
 *   .setGroupIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RequestOrchestrationBuilder extends DomainResourceBuilder<RequestOrchestration, IRequestOrchestration> {
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
   * Set intent
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: RequestIntentType): this {
    this.data.intent = intent;
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
   * Set code
   * What's being requested/ordered
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who the request orchestration is about
   */
  setSubject(subject: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authoredOn
   * When the request orchestration was authored
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set author
   * Device or practitioner that authored the request orchestration
   */
  setAuthor(author: IReference<'Device' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.author = author;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
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
   * Fulfills plan, proposal, or order
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add replaces
   * Request(s) replaced by this request
   */
  addReplaces(replac: IReference<'Resource'>): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add reason
   * Why the request orchestration is needed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add goal
   * What goals
   */
  addGoal(goal: IReference<'Goal'>): this {
    return this.addToArray('goal', goal);
  }

  /**
   * Add note
   * Additional notes about the response
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add action
   * Proposed actions, if any
   */
  addAction(action: IRequestOrchestrationAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestOrchestration instance
   */
  build(): RequestOrchestration {
    return new RequestOrchestration(this.data);
  }

  /**
   * Build and validate the RequestOrchestration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestration> {
    const requestOrchestration = this.build();
    await requestOrchestration.validateOrThrow();
    return requestOrchestration;
  }
}
