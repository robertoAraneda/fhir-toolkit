import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionParameter } from '../../models/backbones/SubscriptionParameter.js';
import type {
  ISubscriptionParameter,
} from '@fhir-toolkit/r5-types';

/**
 * SubscriptionParameterBuilder - Fluent builder for SubscriptionParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionParameter = new SubscriptionParameterBuilder()
 *   .setName(value)
 *   .build();
 */
export class SubscriptionParameterBuilder extends BackboneElementBuilder<SubscriptionParameter, ISubscriptionParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name (key) of the parameter
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set value
   * Value of the parameter to use or pass through
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionParameter instance
   */
  build(): SubscriptionParameter {
    return new SubscriptionParameter(this.data);
  }

  /**
   * Build and validate the SubscriptionParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionParameter> {
    const subscriptionParameter = this.build();
    await subscriptionParameter.validateOrThrow();
    return subscriptionParameter;
  }
}
