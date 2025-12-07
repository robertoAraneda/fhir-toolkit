import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubscriptionStatus } from '../../models/resources/SubscriptionStatus.js';
import type {
  ICodeableConcept,
  IReference,
  ISubscriptionStatus,
  ISubscriptionStatusNotificationEvent,
  SubscriptionNotificationTypeType,
  SubscriptionStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionStatusBuilder - Fluent builder for SubscriptionStatus resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionStatus = new SubscriptionStatusBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addNotificationEvent({ ... })
 *   .build();
 */
export class SubscriptionStatusBuilder extends DomainResourceBuilder<SubscriptionStatus, ISubscriptionStatus> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * requested | active | error | off | entered-in-error
   */
  setStatus(status: SubscriptionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * handshake | heartbeat | event-notification | query-status | query-event
   */
  setType(type: SubscriptionNotificationTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set eventsSinceSubscriptionStart
   * Events since the Subscription was created
   */
  setEventsSinceSubscriptionStart(eventsSinceSubscriptionStart: string): this {
    this.data.eventsSinceSubscriptionStart = eventsSinceSubscriptionStart;
    return this;
  }

  /**
   * Set subscription
   * Reference to the Subscription responsible for this notification
   */
  setSubscription(subscription: IReference<'Subscription'>): this {
    this.data.subscription = subscription;
    return this;
  }

  /**
   * Set topic
   * Reference to the SubscriptionTopic this notification relates to
   */
  setTopic(topic: string): this {
    this.data.topic = topic;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add notificationEvent
   * Detailed information about any events relevant to this notification
   */
  addNotificationEvent(notificationEvent: ISubscriptionStatusNotificationEvent): this {
    return this.addToArray('notificationEvent', notificationEvent);
  }

  /**
   * Add error
   * List of errors on the subscription
   */
  addError(error: ICodeableConcept): this {
    return this.addToArray('error', error);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionStatus instance
   */
  build(): SubscriptionStatus {
    return new SubscriptionStatus(this.data);
  }

  /**
   * Build and validate the SubscriptionStatus instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionStatus> {
    const subscriptionStatus = this.build();
    await subscriptionStatus.validateOrThrow();
    return subscriptionStatus;
  }
}
