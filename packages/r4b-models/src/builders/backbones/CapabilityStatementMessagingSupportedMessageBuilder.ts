import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementMessagingSupportedMessage } from '../../models/backbones/CapabilityStatementMessagingSupportedMessage.js';
import type {
  EventCapabilityModeType,
  ICapabilityStatementMessagingSupportedMessage,
} from '@fhir-toolkit/r4b-types';

/**
 * CapabilityStatementMessagingSupportedMessageBuilder - Fluent builder for CapabilityStatementMessagingSupportedMessage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementMessagingSupportedMessage = new CapabilityStatementMessagingSupportedMessageBuilder()
 *   .setMode(value)
 *   .build();
 */
export class CapabilityStatementMessagingSupportedMessageBuilder extends BackboneElementBuilder<CapabilityStatementMessagingSupportedMessage, ICapabilityStatementMessagingSupportedMessage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * sender | receiver
   */
  setMode(mode: EventCapabilityModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set definition
   * Message supported by this system
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementMessagingSupportedMessage instance
   */
  build(): CapabilityStatementMessagingSupportedMessage {
    return new CapabilityStatementMessagingSupportedMessage(this.data);
  }

  /**
   * Build and validate the CapabilityStatementMessagingSupportedMessage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementMessagingSupportedMessage> {
    const capabilityStatementMessagingSupportedMessage = this.build();
    await capabilityStatementMessagingSupportedMessage.validateOrThrow();
    return capabilityStatementMessagingSupportedMessage;
  }
}
