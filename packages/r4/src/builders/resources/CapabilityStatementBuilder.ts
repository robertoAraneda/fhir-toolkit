import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CapabilityStatement } from '../../models/resources/CapabilityStatement.js';
import type {
  CapabilityStatementKindType,
  FHIRVersionType,
  ICapabilityStatement,
  ICapabilityStatementDocument,
  ICapabilityStatementImplementation,
  ICapabilityStatementMessaging,
  ICapabilityStatementRest,
  ICapabilityStatementSoftware,
  ICodeableConcept,
  IContactDetail,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * CapabilityStatementBuilder - Fluent builder for CapabilityStatement resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatement = new CapabilityStatementBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class CapabilityStatementBuilder extends DomainResourceBuilder<CapabilityStatement, ICapabilityStatement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this capability statement, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the capability statement
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this capability statement (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this capability statement (human friendly)
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
   * Natural language description of the capability statement
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this capability statement is defined
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
   * Set kind
   * instance | capability | requirements
   */
  setKind(kind: CapabilityStatementKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set software
   * Software that is covered by this capability statement
   */
  setSoftware(software: ICapabilityStatementSoftware): this {
    this.data.software = software;
    return this;
  }

  /**
   * Set implementation
   * If this describes a specific instance
   */
  setImplementation(implementation: ICapabilityStatementImplementation): this {
    this.data.implementation = implementation;
    return this;
  }

  /**
   * Set fhirVersion
   * FHIR Version the system supports
   */
  setFhirVersion(fhirVersion: FHIRVersionType): this {
    this.data.fhirVersion = fhirVersion;
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
   * Intended jurisdiction for capability statement (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add instantiates
   * Canonical URL of another capability statement this implements
   */
  addInstantiates(instantiat: string): this {
    return this.addToArray('instantiates', instantiat);
  }

  /**
   * Add imports
   * Canonical URL of another capability statement this adds to
   */
  addImports(_import: string): this {
    return this.addToArray('imports', _import);
  }

  /**
   * Add format
   * formats supported (xml | json | ttl | mime type)
   */
  addFormat(format: string): this {
    return this.addToArray('format', format);
  }

  /**
   * Add patchFormat
   * Patch formats supported
   */
  addPatchFormat(patchFormat: string): this {
    return this.addToArray('patchFormat', patchFormat);
  }

  /**
   * Add implementationGuide
   * Implementation guides supported
   */
  addImplementationGuide(implementationGuide: string): this {
    return this.addToArray('implementationGuide', implementationGuide);
  }

  /**
   * Add rest
   * If the endpoint is a RESTful one
   */
  addRest(rest: ICapabilityStatementRest): this {
    return this.addToArray('rest', rest);
  }

  /**
   * Add messaging
   * If messaging is supported
   */
  addMessaging(messaging: ICapabilityStatementMessaging): this {
    return this.addToArray('messaging', messaging);
  }

  /**
   * Add document
   * Document definition
   */
  addDocument(document: ICapabilityStatementDocument): this {
    return this.addToArray('document', document);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatement instance
   */
  build(): CapabilityStatement {
    return new CapabilityStatement(this.data);
  }

  /**
   * Build and validate the CapabilityStatement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatement> {
    const capabilityStatement = this.build();
    await capabilityStatement.validateOrThrow();
    return capabilityStatement;
  }
}
