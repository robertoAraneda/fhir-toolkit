import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Transport } from '../../models/resources/Transport.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IReference,
  ITransport,
  ITransportInput,
  ITransportOutput,
  ITransportRestriction,
  RequestPriorityType,
  TransportIntentType,
  TransportStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * TransportBuilder - Fluent builder for Transport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const transport = new TransportBuilder()
 *   .setId('123')
 *   .setInstantiatesCanonical(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class TransportBuilder extends DomainResourceBuilder<Transport, ITransport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set instantiatesCanonical
   * Formal definition of transport
   */
  setInstantiatesCanonical(instantiatesCanonical: string): this {
    this.data.instantiatesCanonical = instantiatesCanonical;
    return this;
  }

  /**
   * Set instantiatesUri
   * Formal definition of transport
   */
  setInstantiatesUri(instantiatesUri: string): this {
    this.data.instantiatesUri = instantiatesUri;
    return this;
  }

  /**
   * Set groupIdentifier
   * Requisition or grouper id
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
    return this;
  }

  /**
   * Set status
   * in-progress | completed | abandoned | cancelled | planned | entered-in-error
   */
  setStatus(status: TransportStatusType): this {
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
   * Set intent
   * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: TransportIntentType): this {
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
   * Transport Type
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * Human-readable explanation of transport
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set focus
   * What transport is acting on
   */
  setFocus(focus: IReference<'Resource'>): this {
    this.data.focus = focus;
    return this;
  }

  /**
   * Set for
   * Beneficiary of the Transport
   */
  setFor(_for: IReference<'Resource'>): this {
    this.data.for = _for;
    return this;
  }

  /**
   * Set encounter
   * Healthcare event during which this transport originated
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set completionTime
   * Completion time of the event (the occurrence)
   */
  setCompletionTime(completionTime: string): this {
    this.data.completionTime = completionTime;
    return this;
  }

  /**
   * Set authoredOn
   * Transport Creation Date
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set lastModified
   * Transport Last Modified Date
   */
  setLastModified(lastModified: string): this {
    this.data.lastModified = lastModified;
    return this;
  }

  /**
   * Set requester
   * Who is asking for transport to be done
   */
  setRequester(requester: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set owner
   * Responsible individual
   */
  setOwner(owner: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.owner = owner;
    return this;
  }

  /**
   * Set location
   * Where transport occurs
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set restriction
   * Constraints on fulfillment transports
   */
  setRestriction(restriction: ITransportRestriction): this {
    this.data.restriction = restriction;
    return this;
  }

  /**
   * Set requestedLocation
   * The desired location
   */
  setRequestedLocation(requestedLocation: IReference<'Location'>): this {
    this.data.requestedLocation = requestedLocation;
    return this;
  }

  /**
   * Set currentLocation
   * The entity current location
   */
  setCurrentLocation(currentLocation: IReference<'Location'>): this {
    this.data.currentLocation = currentLocation;
    return this;
  }

  /**
   * Set reason
   * Why transport is needed
   */
  setReason(reason: ICodeableReference): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set history
   * Parent (or preceding) transport
   */
  setHistory(history: IReference<'Transport'>): this {
    this.data.history = history;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Request fulfilled by this transport
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'Transport'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add performerType
   * Requested performer
   */
  addPerformerType(performerType: ICodeableConcept): this {
    return this.addToArray('performerType', performerType);
  }

  /**
   * Add insurance
   * Associated insurance coverage
   */
  addInsurance(insurance: IReference<'Coverage' | 'ClaimResponse'>): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add note
   * Comments made about the transport
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add relevantHistory
   * Key events in history of the Transport
   */
  addRelevantHistory(relevantHistory: IReference<'Provenance'>): this {
    return this.addToArray('relevantHistory', relevantHistory);
  }

  /**
   * Add input
   * Information used to perform transport
   */
  addInput(input: ITransportInput): this {
    return this.addToArray('input', input);
  }

  /**
   * Add output
   * Information produced as part of transport
   */
  addOutput(output: ITransportOutput): this {
    return this.addToArray('output', output);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Transport instance
   */
  build(): Transport {
    return new Transport(this.data);
  }

  /**
   * Build and validate the Transport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Transport> {
    const transport = this.build();
    await transport.validateOrThrow();
    return transport;
  }
}
