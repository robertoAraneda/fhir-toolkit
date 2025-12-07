import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubscriptionChannel } from '../../models/backbones/SubscriptionChannel.js';
import type {
  ISubscriptionChannel,
  SubscriptionChannelTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionChannelBuilder - Fluent builder for SubscriptionChannel backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionChannel = new SubscriptionChannelBuilder()
 *   .setType(value)
 *   .addHeader({ ... })
 *   .build();
 */
export class SubscriptionChannelBuilder extends BackboneElementBuilder<SubscriptionChannel, ISubscriptionChannel> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * rest-hook | websocket | email | sms | message
   */
  setType(type: SubscriptionChannelTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set endpoint
   * Where the channel points to
   */
  setEndpoint(endpoint: string): this {
    this.data.endpoint = endpoint;
    return this;
  }

  /**
   * Set payload
   * MIME type to send, or omit for no payload
   */
  setPayload(payload: string): this {
    this.data.payload = payload;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add header
   * Usage depends on the channel type
   */
  addHeader(header: string): this {
    return this.addToArray('header', header);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionChannel instance
   */
  build(): SubscriptionChannel {
    return new SubscriptionChannel(this.data);
  }

  /**
   * Build and validate the SubscriptionChannel instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionChannel> {
    const subscriptionChannel = this.build();
    await subscriptionChannel.validateOrThrow();
    return subscriptionChannel;
  }
}
