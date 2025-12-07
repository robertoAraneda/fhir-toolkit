import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementMessaging } from '../../models/backbones/CapabilityStatementMessaging.js';
import type {
  ICapabilityStatementMessaging,
  ICapabilityStatementMessagingEndpoint,
  ICapabilityStatementMessagingSupportedMessage,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementMessagingBuilder - Fluent builder for CapabilityStatementMessaging backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementMessaging = new CapabilityStatementMessagingBuilder()
 *   .setReliableCache(value)
 *   .addEndpoint({ ... })
 *   .build();
 */
export class CapabilityStatementMessagingBuilder extends BackboneElementBuilder<CapabilityStatementMessaging, ICapabilityStatementMessaging> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reliableCache
   * Reliable Message Cache Length (min)
   */
  setReliableCache(reliableCache: number): this {
    this.data.reliableCache = reliableCache;
    return this;
  }

  /**
   * Set documentation
   * Messaging interface behavior details
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add endpoint
   * Where messages should be sent
   */
  addEndpoint(endpoint: ICapabilityStatementMessagingEndpoint): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add supportedMessage
   * Messages supported by this system
   */
  addSupportedMessage(supportedMessage: ICapabilityStatementMessagingSupportedMessage): this {
    return this.addToArray('supportedMessage', supportedMessage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementMessaging instance
   */
  build(): CapabilityStatementMessaging {
    return new CapabilityStatementMessaging(this.data);
  }

  /**
   * Build and validate the CapabilityStatementMessaging instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementMessaging> {
    const capabilityStatementMessaging = this.build();
    await capabilityStatementMessaging.validateOrThrow();
    return capabilityStatementMessaging;
  }
}
