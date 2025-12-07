import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageHeaderDestination } from '../../models/backbones/MessageHeaderDestination.js';
import type {
  IMessageHeaderDestination,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MessageHeaderDestinationBuilder - Fluent builder for MessageHeaderDestination backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageHeaderDestination = new MessageHeaderDestinationBuilder()
 *   .setName(value)
 *   .build();
 */
export class MessageHeaderDestinationBuilder extends BackboneElementBuilder<MessageHeaderDestination, IMessageHeaderDestination> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of system
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set target
   * Particular delivery destination within the destination
   */
  setTarget(target: IReference<'Device'>): this {
    this.data.target = target;
    return this;
  }

  /**
   * Set endpoint
   * Actual destination address or id
   */
  setEndpoint(endpoint: string): this {
    this.data.endpoint = endpoint;
    return this;
  }

  /**
   * Set receiver
   * Intended "real-world" recipient for the data
   */
  setReceiver(receiver: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.receiver = receiver;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageHeaderDestination instance
   */
  build(): MessageHeaderDestination {
    return new MessageHeaderDestination(this.data);
  }

  /**
   * Build and validate the MessageHeaderDestination instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageHeaderDestination> {
    const messageHeaderDestination = this.build();
    await messageHeaderDestination.validateOrThrow();
    return messageHeaderDestination;
  }
}
