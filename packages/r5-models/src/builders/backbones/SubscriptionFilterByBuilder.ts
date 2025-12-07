import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionFilterBy } from '../../models/backbones/SubscriptionFilterBy.js';
import type {
  ISubscriptionFilterBy,
  SearchComparatorType,
  SearchModifierCodeType,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionFilterByBuilder - Fluent builder for SubscriptionFilterBy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionFilterBy = new SubscriptionFilterByBuilder()
 *   .setResourceType(value)
 *   .build();
 */
export class SubscriptionFilterByBuilder extends BackboneElementBuilder<SubscriptionFilterBy, ISubscriptionFilterBy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set resourceType
   * Allowed Resource (reference to definition) for this Subscription filter
   */
  setResourceType(resourceType: string): this {
    this.data.resourceType = resourceType;
    return this;
  }

  /**
   * Set filterParameter
   * Filter label defined in SubscriptionTopic
   */
  setFilterParameter(filterParameter: string): this {
    this.data.filterParameter = filterParameter;
    return this;
  }

  /**
   * Set comparator
   * eq | ne | gt | lt | ge | le | sa | eb | ap
   */
  setComparator(comparator: SearchComparatorType): this {
    this.data.comparator = comparator;
    return this;
  }

  /**
   * Set modifier
   * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   */
  setModifier(modifier: SearchModifierCodeType): this {
    this.data.modifier = modifier;
    return this;
  }

  /**
   * Set value
   * Literal value or resource path
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionFilterBy instance
   */
  build(): SubscriptionFilterBy {
    return new SubscriptionFilterBy(this.data);
  }

  /**
   * Build and validate the SubscriptionFilterBy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionFilterBy> {
    const subscriptionFilterBy = this.build();
    await subscriptionFilterBy.validateOrThrow();
    return subscriptionFilterBy;
  }
}
