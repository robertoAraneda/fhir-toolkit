import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CodeSystem } from '../../models/resources/CodeSystem.js';
import type {
  CodeSystemContentModeType,
  CodeSystemHierarchyMeaningType,
  ICodeSystem,
  ICodeSystemConcept,
  ICodeSystemFilter,
  ICodeSystemProperty,
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * CodeSystemBuilder - Fluent builder for CodeSystem resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystem = new CodeSystemBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CodeSystemBuilder extends DomainResourceBuilder<CodeSystem, ICodeSystem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the code system (Coding.version)
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this code system (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this code system (human friendly)
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
   * Natural language description of the code system
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this code system is defined
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
   * Set caseSensitive
   * If code comparison is case sensitive
   */
  setCaseSensitive(caseSensitive: boolean): this {
    this.data.caseSensitive = caseSensitive;
    return this;
  }

  /**
   * Set valueSet
   * Canonical reference to the value set with entire code system
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  /**
   * Set hierarchyMeaning
   * grouped-by | is-a | part-of | classified-with
   */
  setHierarchyMeaning(hierarchyMeaning: CodeSystemHierarchyMeaningType): this {
    this.data.hierarchyMeaning = hierarchyMeaning;
    return this;
  }

  /**
   * Set compositional
   * If code system defines a compositional grammar
   */
  setCompositional(compositional: boolean): this {
    this.data.compositional = compositional;
    return this;
  }

  /**
   * Set versionNeeded
   * If definitions are not stable
   */
  setVersionNeeded(versionNeeded: boolean): this {
    this.data.versionNeeded = versionNeeded;
    return this;
  }

  /**
   * Set content
   * not-present | example | fragment | complete | supplement
   */
  setContent(content: CodeSystemContentModeType): this {
    this.data.content = content;
    return this;
  }

  /**
   * Set supplements
   * Canonical URL of Code System this adds designations and properties to
   */
  setSupplements(supplements: string): this {
    this.data.supplements = supplements;
    return this;
  }

  /**
   * Set count
   * Total concepts in the code system
   */
  setCount(count: number): this {
    this.data.count = count;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the code system (business identifier)
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
   * Intended jurisdiction for code system (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add filter
   * Filter that can be used in a value set
   */
  addFilter(filter: ICodeSystemFilter): this {
    return this.addToArray('filter', filter);
  }

  /**
   * Add property
   * Additional information supplied about each concept
   */
  addProperty(property: ICodeSystemProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add concept
   * Concepts in the code system
   */
  addConcept(concept: ICodeSystemConcept): this {
    return this.addToArray('concept', concept);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystem instance
   */
  build(): CodeSystem {
    return new CodeSystem(this.data);
  }

  /**
   * Build and validate the CodeSystem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystem> {
    const codeSystem = this.build();
    await codeSystem.validateOrThrow();
    return codeSystem;
  }
}
