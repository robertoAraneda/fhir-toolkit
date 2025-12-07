import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageHeaderSource } from '../../models/backbones/MessageHeaderSource.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IContactPoint,
  IMessageHeaderSource,
  IReference,
} from '@fhir-toolkit/r5-types';

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

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set endpoint choice type (endpointUrl, endpointReference)
   * @param type - 'Url' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEndpoint('Url', value)
   */
  setEndpoint<T extends 'Url' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `endpoint${type}` as keyof IMessageHeaderSource;
    const otherKeys: (keyof IMessageHeaderSource)[] = [];
    if (type !== 'Url') {
      otherKeys.push('endpointUrl' as keyof IMessageHeaderSource);
      otherKeys.push('_endpointUrl' as keyof IMessageHeaderSource);
    }
    if (type !== 'Reference') {
      otherKeys.push('endpointReference' as keyof IMessageHeaderSource);
      otherKeys.push('_endpointReference' as keyof IMessageHeaderSource);
    }
    return this.setChoiceType(key, value, otherKeys);
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
