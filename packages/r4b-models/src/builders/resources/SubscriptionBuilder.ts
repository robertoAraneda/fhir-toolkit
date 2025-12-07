import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Subscription } from '../../models/resources/Subscription.js';
import type {
  IContactPoint,
  ISubscription,
  ISubscriptionChannel,
  SubscriptionStatusType,
} from '@fhir-toolkit/r4b-types';

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
 *   .setStatus(value)
 *   .addContact({ ... })
 *   .build();
 */
export class SubscriptionBuilder extends DomainResourceBuilder<Subscription, ISubscription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * requested | active | error | off
   */
  setStatus(status: SubscriptionStatusType): this {
    this.data.status = status;
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
   * Set reason
   * Description of why this subscription was created
   */
  setReason(reason: string): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set criteria
   * Rule for server push
   */
  setCriteria(criteria: string): this {
    this.data.criteria = criteria;
    return this;
  }

  /**
   * Set error
   * Latest error note
   */
  setError(error: string): this {
    this.data.error = error;
    return this;
  }

  /**
   * Set channel
   * The channel on which to report matches to the criteria
   */
  setChannel(channel: ISubscriptionChannel): this {
    this.data.channel = channel;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add contact
   * Contact details for source (e.g. troubleshooting)
   */
  addContact(contact: IContactPoint): this {
    return this.addToArray('contact', contact);
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
