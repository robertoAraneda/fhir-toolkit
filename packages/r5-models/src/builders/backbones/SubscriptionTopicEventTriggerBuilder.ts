import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionTopicEventTrigger } from '../../models/backbones/SubscriptionTopicEventTrigger.js';
import type {
  ICodeableConcept,
  ISubscriptionTopicEventTrigger,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionTopicEventTriggerBuilder - Fluent builder for SubscriptionTopicEventTrigger backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopicEventTrigger = new SubscriptionTopicEventTriggerBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class SubscriptionTopicEventTriggerBuilder extends BackboneElementBuilder<SubscriptionTopicEventTrigger, ISubscriptionTopicEventTrigger> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Text representation of the event trigger
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set event
   * Event which can trigger a notification from the SubscriptionTopic
   */
  setEvent(event: ICodeableConcept): this {
    this.data.event = event;
    return this;
  }

  /**
   * Set resource
   * Data Type or Resource (reference to definition) for this trigger definition
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopicEventTrigger instance
   */
  build(): SubscriptionTopicEventTrigger {
    return new SubscriptionTopicEventTrigger(this.data);
  }

  /**
   * Build and validate the SubscriptionTopicEventTrigger instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopicEventTrigger> {
    const subscriptionTopicEventTrigger = this.build();
    await subscriptionTopicEventTrigger.validateOrThrow();
    return subscriptionTopicEventTrigger;
  }
}
