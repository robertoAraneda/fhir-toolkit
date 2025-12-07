import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MessageDefinition } from '../../models/resources/MessageDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IMessageDefinition,
  IMessageDefinitionAllowedResponse,
  IMessageDefinitionFocus,
  IUsageContext,
  MessageSignificanceCategoryType,
  MessageheaderResponseRequestType,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * MessageDefinitionBuilder - Fluent builder for MessageDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageDefinition = new MessageDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MessageDefinitionBuilder extends DomainResourceBuilder<MessageDefinition, IMessageDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Business Identifier for a given MessageDefinition
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the message definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this message definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this message definition (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the message definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this message definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set base
   * Definition this one is based on
   */
  setBase(base: string): this {
    this.data.base = base;
    return this;
  }

  /**
   * Set category
   * consequence | currency | notification
   */
  setCategory(category: MessageSignificanceCategoryType): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set responseRequired
   * always | on-error | never | on-success
   */
  setResponseRequired(responseRequired: MessageheaderResponseRequestType): this {
    this.data.responseRequired = responseRequired;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set event choice type (eventCoding, eventUri)
   * @param type - 'Coding' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEvent('Coding', value)
   */
  setEvent<T extends 'Coding' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `event${type}` as keyof IMessageDefinition;
    const otherKeys: (keyof IMessageDefinition)[] = [];
    if (type !== 'Coding') {
      otherKeys.push('eventCoding' as keyof IMessageDefinition);
      otherKeys.push('_eventCoding' as keyof IMessageDefinition);
    }
    if (type !== 'Uri') {
      otherKeys.push('eventUri' as keyof IMessageDefinition);
      otherKeys.push('_eventUri' as keyof IMessageDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Primary key for the message definition on a given server
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add replaces
   * Takes the place of
   */
  addReplaces(replac: string): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for message definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add parent
   * Protocol/workflow this is part of
   */
  addParent(parent: string): this {
    return this.addToArray('parent', parent);
  }

  /**
   * Add focus
   * Resource(s) that are the subject of the event
   */
  addFocus(focu: IMessageDefinitionFocus): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add allowedResponse
   * Responses to this message
   */
  addAllowedResponse(allowedResponse: IMessageDefinitionAllowedResponse): this {
    return this.addToArray('allowedResponse', allowedResponse);
  }

  /**
   * Add graph
   * Canonical reference to a GraphDefinition
   */
  addGraph(graph: string): this {
    return this.addToArray('graph', graph);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageDefinition instance
   */
  build(): MessageDefinition {
    return new MessageDefinition(this.data);
  }

  /**
   * Build and validate the MessageDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageDefinition> {
    const messageDefinition = this.build();
    await messageDefinition.validateOrThrow();
    return messageDefinition;
  }
}
