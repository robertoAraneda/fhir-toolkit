import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageHeaderResponse } from '../../models/backbones/MessageHeaderResponse.js';
import type {
  IMessageHeaderResponse,
  IReference,
  ResponseTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * MessageHeaderResponseBuilder - Fluent builder for MessageHeaderResponse backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageHeaderResponse = new MessageHeaderResponseBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class MessageHeaderResponseBuilder extends BackboneElementBuilder<MessageHeaderResponse, IMessageHeaderResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Id of original message
   */
  setIdentifier(identifier: string): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set code
   * ok | transient-error | fatal-error
   */
  setCode(code: ResponseTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set details
   * Specific list of hints/warnings/errors
   */
  setDetails(details: IReference<'OperationOutcome'>): this {
    this.data.details = details;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageHeaderResponse instance
   */
  build(): MessageHeaderResponse {
    return new MessageHeaderResponse(this.data);
  }

  /**
   * Build and validate the MessageHeaderResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageHeaderResponse> {
    const messageHeaderResponse = this.build();
    await messageHeaderResponse.validateOrThrow();
    return messageHeaderResponse;
  }
}
