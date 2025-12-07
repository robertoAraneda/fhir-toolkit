import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CompartmentDefinition } from '../../models/resources/CompartmentDefinition.js';
import type {
  CompartmentTypeType,
  ICompartmentDefinition,
  ICompartmentDefinitionResource,
  IContactDetail,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * CompartmentDefinitionBuilder - Fluent builder for CompartmentDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const compartmentDefinition = new CompartmentDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class CompartmentDefinitionBuilder extends DomainResourceBuilder<CompartmentDefinition, ICompartmentDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this compartment definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the compartment definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this compartment definition (computer friendly)
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
   * Natural language description of the compartment definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this compartment definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set code
   * Patient | Encounter | RelatedPerson | Practitioner | Device
   */
  setCode(code: CompartmentTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set search
   * Whether the search syntax is supported
   */
  setSearch(search: boolean): this {
    this.data.search = search;
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
   * Add resource
   * How a resource is related to the compartment
   */
  addResource(resource: ICompartmentDefinitionResource): this {
    return this.addToArray('resource', resource);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompartmentDefinition instance
   */
  build(): CompartmentDefinition {
    return new CompartmentDefinition(this.data);
  }

  /**
   * Build and validate the CompartmentDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompartmentDefinition> {
    const compartmentDefinition = this.build();
    await compartmentDefinition.validateOrThrow();
    return compartmentDefinition;
  }
}
