import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageDefinitionAllowedResponse } from '../../models/backbones/MessageDefinitionAllowedResponse.js';
import type {
  IMessageDefinitionAllowedResponse,
} from '@fhir-toolkit/r4-types';

/**
 * MessageDefinitionAllowedResponseBuilder - Fluent builder for MessageDefinitionAllowedResponse backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageDefinitionAllowedResponse = new MessageDefinitionAllowedResponseBuilder()
 *   .setMessage(value)
 *   .build();
 */
export class MessageDefinitionAllowedResponseBuilder extends BackboneElementBuilder<MessageDefinitionAllowedResponse, IMessageDefinitionAllowedResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set message
   * Reference to allowed message definition response
   */
  setMessage(message: string): this {
    this.data.message = message;
    return this;
  }

  /**
   * Set situation
   * When should this response be used
   */
  setSituation(situation: string): this {
    this.data.situation = situation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageDefinitionAllowedResponse instance
   */
  build(): MessageDefinitionAllowedResponse {
    return new MessageDefinitionAllowedResponse(this.data);
  }

  /**
   * Build and validate the MessageDefinitionAllowedResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageDefinitionAllowedResponse> {
    const messageDefinitionAllowedResponse = this.build();
    await messageDefinitionAllowedResponse.validateOrThrow();
    return messageDefinitionAllowedResponse;
  }
}
