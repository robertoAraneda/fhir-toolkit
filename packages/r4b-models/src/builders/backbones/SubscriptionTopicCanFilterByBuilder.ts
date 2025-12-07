import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionTopicCanFilterBy } from '../../models/backbones/SubscriptionTopicCanFilterBy.js';
import type {
  ISubscriptionTopicCanFilterBy,
  SubscriptionSearchModifierType,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionTopicCanFilterByBuilder - Fluent builder for SubscriptionTopicCanFilterBy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopicCanFilterBy = new SubscriptionTopicCanFilterByBuilder()
 *   .setDescription(value)
 *   .addModifier({ ... })
 *   .build();
 */
export class SubscriptionTopicCanFilterByBuilder extends BackboneElementBuilder<SubscriptionTopicCanFilterBy, ISubscriptionTopicCanFilterBy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of this filter parameter
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set resource
   * URL of the triggering Resource that this filter applies to
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set filterParameter
   * Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter
   */
  setFilterParameter(filterParameter: string): this {
    this.data.filterParameter = filterParameter;
    return this;
  }

  /**
   * Set filterDefinition
   * Canonical URL for a filterParameter definition
   */
  setFilterDefinition(filterDefinition: string): this {
    this.data.filterDefinition = filterDefinition;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add modifier
   * = | eq | ne | gt | lt | ge | le | sa | eb | ap | above | below | in | not-in | of-type
   */
  addModifier(modifier: SubscriptionSearchModifierType): this {
    return this.addToArray('modifier', modifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopicCanFilterBy instance
   */
  build(): SubscriptionTopicCanFilterBy {
    return new SubscriptionTopicCanFilterBy(this.data);
  }

  /**
   * Build and validate the SubscriptionTopicCanFilterBy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopicCanFilterBy> {
    const subscriptionTopicCanFilterBy = this.build();
    await subscriptionTopicCanFilterBy.validateOrThrow();
    return subscriptionTopicCanFilterBy;
  }
}
