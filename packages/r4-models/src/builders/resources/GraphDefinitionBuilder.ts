import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { GraphDefinition } from '../../models/resources/GraphDefinition.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IGraphDefinition,
  IGraphDefinitionLink,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * GraphDefinitionBuilder - Fluent builder for GraphDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinition = new GraphDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class GraphDefinitionBuilder extends DomainResourceBuilder<GraphDefinition, IGraphDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this graph definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the graph definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this graph definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
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
   * Natural language description of the graph definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this graph definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set start
   * Type of resource at which the graph starts
   */
  setStart(start: string): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set profile
   * Profile on base resource
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

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
   * Intended jurisdiction for graph definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add link
   * Links this graph makes rules about
   */
  addLink(link: IGraphDefinitionLink): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GraphDefinition instance
   */
  build(): GraphDefinition {
    return new GraphDefinition(this.data);
  }

  /**
   * Build and validate the GraphDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinition> {
    const graphDefinition = this.build();
    await graphDefinition.validateOrThrow();
    return graphDefinition;
  }
}
