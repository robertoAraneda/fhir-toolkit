import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MessageHeader } from '../../models/resources/MessageHeader.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IMessageHeader,
  IMessageHeaderDestination,
  IMessageHeaderResponse,
  IMessageHeaderSource,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MessageHeaderBuilder - Fluent builder for MessageHeader resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageHeader = new MessageHeaderBuilder()
 *   .setId('123')
 *   .setSender(value)
 *   .addDestination({ ... })
 *   .build();
 */
export class MessageHeaderBuilder extends DomainResourceBuilder<MessageHeader, IMessageHeader> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sender
   * Real world sender of the message
   */
  setSender(sender: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization'>): this {
    this.data.sender = sender;
    return this;
  }

  /**
   * Set author
   * The source of the decision
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set source
   * Message source application
   */
  setSource(source: IMessageHeaderSource): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set responsible
   * Final responsibility for event
   */
  setResponsible(responsible: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.responsible = responsible;
    return this;
  }

  /**
   * Set reason
   * Cause of event
   */
  setReason(reason: ICodeableConcept): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set response
   * If this is a reply to prior message
   */
  setResponse(response: IMessageHeaderResponse): this {
    this.data.response = response;
    return this;
  }

  /**
   * Set definition
   * Link to the definition for this message
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set event choice type (eventCoding, eventCanonical)
   * @param type - 'Coding' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEvent('Coding', value)
   */
  setEvent<T extends 'Coding' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `event${type}` as keyof IMessageHeader;
    const otherKeys: (keyof IMessageHeader)[] = [];
    if (type !== 'Coding') {
      otherKeys.push('eventCoding' as keyof IMessageHeader);
      otherKeys.push('_eventCoding' as keyof IMessageHeader);
    }
    if (type !== 'Canonical') {
      otherKeys.push('eventCanonical' as keyof IMessageHeader);
      otherKeys.push('_eventCanonical' as keyof IMessageHeader);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add destination
   * Message destination application(s)
   */
  addDestination(destination: IMessageHeaderDestination): this {
    return this.addToArray('destination', destination);
  }

  /**
   * Add focus
   * The actual content of the message
   */
  addFocus(focu: IReference<'Resource'>): this {
    return this.addToArray('focus', focu);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageHeader instance
   */
  build(): MessageHeader {
    return new MessageHeader(this.data);
  }

  /**
   * Build and validate the MessageHeader instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageHeader> {
    const messageHeader = this.build();
    await messageHeader.validateOrThrow();
    return messageHeader;
  }
}
