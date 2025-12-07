import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionTopicResourceTrigger } from '../../models/backbones/SubscriptionTopicResourceTrigger.js';
import type {
  ISubscriptionTopicResourceTrigger,
  ISubscriptionTopicResourceTriggerQueryCriteria,
  InteractionTriggerType,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionTopicResourceTriggerBuilder - Fluent builder for SubscriptionTopicResourceTrigger backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopicResourceTrigger = new SubscriptionTopicResourceTriggerBuilder()
 *   .setDescription(value)
 *   .addSupportedInteraction({ ... })
 *   .build();
 */
export class SubscriptionTopicResourceTriggerBuilder extends BackboneElementBuilder<SubscriptionTopicResourceTrigger, ISubscriptionTopicResourceTrigger> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Text representation of the resource trigger
   */
  setDescription(description: string): this {
    this.data.description = description;
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

  /**
   * Set queryCriteria
   * Query based trigger rule
   */
  setQueryCriteria(queryCriteria: ISubscriptionTopicResourceTriggerQueryCriteria): this {
    this.data.queryCriteria = queryCriteria;
    return this;
  }

  /**
   * Set fhirPathCriteria
   * FHIRPath based trigger rule
   */
  setFhirPathCriteria(fhirPathCriteria: string): this {
    this.data.fhirPathCriteria = fhirPathCriteria;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add supportedInteraction
   * create | update | delete
   */
  addSupportedInteraction(supportedInteraction: InteractionTriggerType): this {
    return this.addToArray('supportedInteraction', supportedInteraction);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopicResourceTrigger instance
   */
  build(): SubscriptionTopicResourceTrigger {
    return new SubscriptionTopicResourceTrigger(this.data);
  }

  /**
   * Build and validate the SubscriptionTopicResourceTrigger instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopicResourceTrigger> {
    const subscriptionTopicResourceTrigger = this.build();
    await subscriptionTopicResourceTrigger.validateOrThrow();
    return subscriptionTopicResourceTrigger;
  }
}
