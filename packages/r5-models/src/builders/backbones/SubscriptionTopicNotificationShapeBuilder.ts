import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionTopicNotificationShape } from '../../models/backbones/SubscriptionTopicNotificationShape.js';
import type {
  ISubscriptionTopicNotificationShape,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionTopicNotificationShapeBuilder - Fluent builder for SubscriptionTopicNotificationShape backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopicNotificationShape = new SubscriptionTopicNotificationShapeBuilder()
 *   .setResource(value)
 *   .addInclude({ ... })
 *   .build();
 */
export class SubscriptionTopicNotificationShapeBuilder extends BackboneElementBuilder<SubscriptionTopicNotificationShape, ISubscriptionTopicNotificationShape> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set resource
   * URL of the Resource that is the focus (main) resource in a notification shape
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add include
   * Include directives, rooted in the resource for this shape
   */
  addInclude(include: string): this {
    return this.addToArray('include', include);
  }

  /**
   * Add revInclude
   * Reverse include directives, rooted in the resource for this shape
   */
  addRevInclude(revInclude: string): this {
    return this.addToArray('revInclude', revInclude);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopicNotificationShape instance
   */
  build(): SubscriptionTopicNotificationShape {
    return new SubscriptionTopicNotificationShape(this.data);
  }

  /**
   * Build and validate the SubscriptionTopicNotificationShape instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopicNotificationShape> {
    const subscriptionTopicNotificationShape = this.build();
    await subscriptionTopicNotificationShape.validateOrThrow();
    return subscriptionTopicNotificationShape;
  }
}
