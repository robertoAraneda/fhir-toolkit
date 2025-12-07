import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageHeaderDestination } from '../../models/backbones/MessageHeaderDestination.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IMessageHeaderDestination,
  IReference,
} from '@fhir-toolkit/r5-types';

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
   * Set receiver
   * Intended "real-world" recipient for the data
   */
  setReceiver(receiver: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.receiver = receiver;
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
    const key = `endpoint${type}` as keyof IMessageHeaderDestination;
    const otherKeys: (keyof IMessageHeaderDestination)[] = [];
    if (type !== 'Url') {
      otherKeys.push('endpointUrl' as keyof IMessageHeaderDestination);
      otherKeys.push('_endpointUrl' as keyof IMessageHeaderDestination);
    }
    if (type !== 'Reference') {
      otherKeys.push('endpointReference' as keyof IMessageHeaderDestination);
      otherKeys.push('_endpointReference' as keyof IMessageHeaderDestination);
    }
    return this.setChoiceType(key, value, otherKeys);
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
