import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionStatusNotificationEvent } from '../../models/backbones/SubscriptionStatusNotificationEvent.js';
import type {
  IReference,
  ISubscriptionStatusNotificationEvent,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionStatusNotificationEventBuilder - Fluent builder for SubscriptionStatusNotificationEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionStatusNotificationEvent = new SubscriptionStatusNotificationEventBuilder()
 *   .setEventNumber(value)
 *   .addAdditionalContext({ ... })
 *   .build();
 */
export class SubscriptionStatusNotificationEventBuilder extends BackboneElementBuilder<SubscriptionStatusNotificationEvent, ISubscriptionStatusNotificationEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set eventNumber
   * Event number
   */
  setEventNumber(eventNumber: string): this {
    this.data.eventNumber = eventNumber;
    return this;
  }

  /**
   * Set timestamp
   * The instant this event occurred
   */
  setTimestamp(timestamp: string): this {
    this.data.timestamp = timestamp;
    return this;
  }

  /**
   * Set focus
   * The focus of this event
   */
  setFocus(focus: IReference<'Resource'>): this {
    this.data.focus = focus;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additionalContext
   * Additional context for this event
   */
  addAdditionalContext(additionalContext: IReference<'Resource'>): this {
    return this.addToArray('additionalContext', additionalContext);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionStatusNotificationEvent instance
   */
  build(): SubscriptionStatusNotificationEvent {
    return new SubscriptionStatusNotificationEvent(this.data);
  }

  /**
   * Build and validate the SubscriptionStatusNotificationEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionStatusNotificationEvent> {
    const subscriptionStatusNotificationEvent = this.build();
    await subscriptionStatusNotificationEvent.validateOrThrow();
    return subscriptionStatusNotificationEvent;
  }
}
