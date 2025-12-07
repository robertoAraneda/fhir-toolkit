import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionTopicResourceTriggerQueryCriteria } from '../../models/backbones/SubscriptionTopicResourceTriggerQueryCriteria.js';
import type {
  CriteriaNotExistsBehaviorType,
  ISubscriptionTopicResourceTriggerQueryCriteria,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionTopicResourceTriggerQueryCriteriaBuilder - Fluent builder for SubscriptionTopicResourceTriggerQueryCriteria backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopicResourceTriggerQueryCriteria = new SubscriptionTopicResourceTriggerQueryCriteriaBuilder()
 *   .setPrevious(value)
 *   .build();
 */
export class SubscriptionTopicResourceTriggerQueryCriteriaBuilder extends BackboneElementBuilder<SubscriptionTopicResourceTriggerQueryCriteria, ISubscriptionTopicResourceTriggerQueryCriteria> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set previous
   * Rule applied to previous resource state
   */
  setPrevious(previous: string): this {
    this.data.previous = previous;
    return this;
  }

  /**
   * Set resultForCreate
   * test-passes | test-fails
   */
  setResultForCreate(resultForCreate: CriteriaNotExistsBehaviorType): this {
    this.data.resultForCreate = resultForCreate;
    return this;
  }

  /**
   * Set current
   * Rule applied to current resource state
   */
  setCurrent(current: string): this {
    this.data.current = current;
    return this;
  }

  /**
   * Set resultForDelete
   * test-passes | test-fails
   */
  setResultForDelete(resultForDelete: CriteriaNotExistsBehaviorType): this {
    this.data.resultForDelete = resultForDelete;
    return this;
  }

  /**
   * Set requireBoth
   * Both must be true flag
   */
  setRequireBoth(requireBoth: boolean): this {
    this.data.requireBoth = requireBoth;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopicResourceTriggerQueryCriteria instance
   */
  build(): SubscriptionTopicResourceTriggerQueryCriteria {
    return new SubscriptionTopicResourceTriggerQueryCriteria(this.data);
  }

  /**
   * Build and validate the SubscriptionTopicResourceTriggerQueryCriteria instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopicResourceTriggerQueryCriteria> {
    const subscriptionTopicResourceTriggerQueryCriteria = this.build();
    await subscriptionTopicResourceTriggerQueryCriteria.validateOrThrow();
    return subscriptionTopicResourceTriggerQueryCriteria;
  }
}
