import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ActorDefinition } from '../../models/resources/ActorDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ExampleScenarioActorTypeType,
  IActorDefinition,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ActorDefinitionBuilder - Fluent builder for ActorDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const actorDefinition = new ActorDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ActorDefinitionBuilder extends DomainResourceBuilder<ActorDefinition, IActorDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this actor definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the actor definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this actor definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this actor definition (human friendly)
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
   * Name of the publisher/steward (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the actor
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this actor definition is defined
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
   * Set copyrightLabel
   * Copyright holder and year(s)
   */
  setCopyrightLabel(copyrightLabel: string): this {
    this.data.copyrightLabel = copyrightLabel;
    return this;
  }

  /**
   * Set type
   * person | system
   */
  setType(type: ExampleScenarioActorTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set documentation
   * Functionality associated with the actor
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set capabilities
   * CapabilityStatement for the actor (if applicable)
   */
  setCapabilities(capabilities: string): this {
    this.data.capabilities = capabilities;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set versionAlgorithm choice type (versionAlgorithmString, versionAlgorithmCoding)
   * @param type - 'String' | 'Coding'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setVersionAlgorithm('String', value)
   */
  setVersionAlgorithm<T extends 'String' | 'Coding'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `versionAlgorithm${type}` as keyof IActorDefinition;
    const otherKeys: (keyof IActorDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IActorDefinition);
      otherKeys.push('_versionAlgorithmString' as keyof IActorDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IActorDefinition);
      otherKeys.push('_versionAlgorithmCoding' as keyof IActorDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the actor definition (business identifier)
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
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
   * Intended jurisdiction for actor definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add reference
   * Reference to more information about the actor
   */
  addReference(reference: string): this {
    return this.addToArray('reference', reference);
  }

  /**
   * Add derivedFrom
   * Definition of this actor in another context / IG
   */
  addDerivedFrom(derivedFrom: string): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ActorDefinition instance
   */
  build(): ActorDefinition {
    return new ActorDefinition(this.data);
  }

  /**
   * Build and validate the ActorDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ActorDefinition> {
    const actorDefinition = this.build();
    await actorDefinition.validateOrThrow();
    return actorDefinition;
  }
}
