import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { RequestGroup } from '../../models/resources/RequestGroup.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IReference,
  IRequestGroup,
  IRequestGroupAction,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * RequestGroupBuilder - Fluent builder for RequestGroup resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestGroup = new RequestGroupBuilder()
 *   .setId('123')
 *   .setGroupIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RequestGroupBuilder extends DomainResourceBuilder<RequestGroup, IRequestGroup> {
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
   * Who the request group is about
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
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
   * When the request group was authored
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set author
   * Device or practitioner that authored the request group
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
   * Add reasonCode
   * Why the request group is needed
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Why the request group is needed
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>): this {
    return this.addToArray('reasonReference', reasonReference);
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
  addAction(action: IRequestGroupAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestGroup instance
   */
  build(): RequestGroup {
    return new RequestGroup(this.data);
  }

  /**
   * Build and validate the RequestGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestGroup> {
    const requestGroup = this.build();
    await requestGroup.validateOrThrow();
    return requestGroup;
  }
}
