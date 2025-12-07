import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Subscription } from '../../models/resources/Subscription.js';
import type {
  ICoding,
  IContactPoint,
  IIdentifier,
  IReference,
  ISubscription,
  ISubscriptionFilterBy,
  ISubscriptionParameter,
  SubscriptionPayloadContentType,
  SubscriptionStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionBuilder - Fluent builder for Subscription resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscription = new SubscriptionBuilder()
 *   .setId('123')
 *   .setName(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SubscriptionBuilder extends DomainResourceBuilder<Subscription, ISubscription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Human readable name for this subscription
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set status
   * requested | active | error | off | entered-in-error
   */
  setStatus(status: SubscriptionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set topic
   * Reference to the subscription topic being subscribed to
   */
  setTopic(topic: string): this {
    this.data.topic = topic;
    return this;
  }

  /**
   * Set end
   * When to automatically delete the subscription
   */
  setEnd(end: string): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set managingEntity
   * Entity responsible for Subscription changes
   */
  setManagingEntity(managingEntity: IReference<'CareTeam' | 'HealthcareService' | 'Organization' | 'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.managingEntity = managingEntity;
    return this;
  }

  /**
   * Set reason
   * Description of why this subscription was created
   */
  setReason(reason: string): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set channelType
   * Channel type for notifications
   */
  setChannelType(channelType: ICoding): this {
    this.data.channelType = channelType;
    return this;
  }

  /**
   * Set endpoint
   * Where the channel points to
   */
  setEndpoint(endpoint: string): this {
    this.data.endpoint = endpoint;
    return this;
  }

  /**
   * Set heartbeatPeriod
   * Interval in seconds to send 'heartbeat' notification
   */
  setHeartbeatPeriod(heartbeatPeriod: number): this {
    this.data.heartbeatPeriod = heartbeatPeriod;
    return this;
  }

  /**
   * Set timeout
   * Timeout in seconds to attempt notification delivery
   */
  setTimeout(timeout: number): this {
    this.data.timeout = timeout;
    return this;
  }

  /**
   * Set contentType
   * MIME type to send, or omit for no payload
   */
  setContentType(contentType: string): this {
    this.data.contentType = contentType;
    return this;
  }

  /**
   * Set content
   * empty | id-only | full-resource
   */
  setContent(content: SubscriptionPayloadContentType): this {
    this.data.content = content;
    return this;
  }

  /**
   * Set maxCount
   * Maximum number of events that can be combined in a single notification
   */
  setMaxCount(maxCount: number): this {
    this.data.maxCount = maxCount;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifiers (business identifier)
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for source (e.g. troubleshooting)
   */
  addContact(contact: IContactPoint): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add filterBy
   * Criteria for narrowing the subscription topic stream
   */
  addFilterBy(filterBy: ISubscriptionFilterBy): this {
    return this.addToArray('filterBy', filterBy);
  }

  /**
   * Add parameter
   * Channel type
   */
  addParameter(parameter: ISubscriptionParameter): this {
    return this.addToArray('parameter', parameter);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Subscription instance
   */
  build(): Subscription {
    return new Subscription(this.data);
  }

  /**
   * Build and validate the Subscription instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Subscription> {
    const subscription = this.build();
    await subscription.validateOrThrow();
    return subscription;
  }
}
