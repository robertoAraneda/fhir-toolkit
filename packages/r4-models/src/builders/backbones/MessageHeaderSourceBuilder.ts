import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageHeaderSource } from '../../models/backbones/MessageHeaderSource.js';
import type {
  IContactPoint,
  IMessageHeaderSource,
} from '@fhir-toolkit/r4-types';

/**
 * MessageHeaderSourceBuilder - Fluent builder for MessageHeaderSource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageHeaderSource = new MessageHeaderSourceBuilder()
 *   .setName(value)
 *   .build();
 */
export class MessageHeaderSourceBuilder extends BackboneElementBuilder<MessageHeaderSource, IMessageHeaderSource> {
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
   * Set software
   * Name of software running the system
   */
  setSoftware(software: string): this {
    this.data.software = software;
    return this;
  }

  /**
   * Set version
   * Version of software running
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set contact
   * Human contact for problems
   */
  setContact(contact: IContactPoint): this {
    this.data.contact = contact;
    return this;
  }

  /**
   * Set endpoint
   * Actual message source address or id
   */
  setEndpoint(endpoint: string): this {
    this.data.endpoint = endpoint;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageHeaderSource instance
   */
  build(): MessageHeaderSource {
    return new MessageHeaderSource(this.data);
  }

  /**
   * Build and validate the MessageHeaderSource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageHeaderSource> {
    const messageHeaderSource = this.build();
    await messageHeaderSource.validateOrThrow();
    return messageHeaderSource;
  }
}
