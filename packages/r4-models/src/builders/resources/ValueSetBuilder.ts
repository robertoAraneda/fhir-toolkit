import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ValueSet } from '../../models/resources/ValueSet.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IUsageContext,
  IValueSet,
  IValueSetCompose,
  IValueSetExpansion,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * ValueSetBuilder - Fluent builder for ValueSet resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSet = new ValueSetBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ValueSetBuilder extends DomainResourceBuilder<ValueSet, IValueSet> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this value set, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the value set
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this value set (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this value set (human friendly)
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
   * Natural language description of the value set
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set immutable
   * Indicates whether or not any change to the content logical definition may occur
   */
  setImmutable(immutable: boolean): this {
    this.data.immutable = immutable;
    return this;
  }

  /**
   * Set purpose
   * Why this value set is defined
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
   * Set compose
   * Content logical definition of the value set (CLD)
   */
  setCompose(compose: IValueSetCompose): this {
    this.data.compose = compose;
    return this;
  }

  /**
   * Set expansion
   * Used when the value set is "expanded"
   */
  setExpansion(expansion: IValueSetExpansion): this {
    this.data.expansion = expansion;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the value set (business identifier)
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
   * Intended jurisdiction for value set (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSet instance
   */
  build(): ValueSet {
    return new ValueSet(this.data);
  }

  /**
   * Build and validate the ValueSet instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSet> {
    const valueSet = this.build();
    await valueSet.validateOrThrow();
    return valueSet;
  }
}
