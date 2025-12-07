import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ImplementationGuide } from '../../models/resources/ImplementationGuide.js';
import type {
  FHIRVersionType,
  ICodeableConcept,
  IContactDetail,
  IImplementationGuide,
  IImplementationGuideDefinition,
  IImplementationGuideDependsOn,
  IImplementationGuideGlobal,
  IImplementationGuideManifest,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideBuilder - Fluent builder for ImplementationGuide resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuide = new ImplementationGuideBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class ImplementationGuideBuilder extends DomainResourceBuilder<ImplementationGuide, IImplementationGuide> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this implementation guide, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the implementation guide
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this implementation guide (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this implementation guide (human friendly)
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
   * Natural language description of the implementation guide
   */
  setDescription(description: string): this {
    this.data.description = description;
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
   * Set packageId
   * NPM Package name for IG
   */
  setPackageId(packageId: string): this {
    this.data.packageId = packageId;
    return this;
  }

  /**
   * Set license
   * SPDX license code for this IG (or not-open-source)
   */
  setLicense(license: string): this {
    this.data.license = license;
    return this;
  }

  /**
   * Set definition
   * Information needed to build the IG
   */
  setDefinition(definition: IImplementationGuideDefinition): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set manifest
   * Information about an assembled IG
   */
  setManifest(manifest: IImplementationGuideManifest): this {
    this.data.manifest = manifest;
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
   * Intended jurisdiction for implementation guide (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add fhirVersion
   * FHIR Version(s) this Implementation Guide targets
   */
  addFhirVersion(fhirVersion: FHIRVersionType): this {
    return this.addToArray('fhirVersion', fhirVersion);
  }

  /**
   * Add dependsOn
   * Another Implementation guide this depends on
   */
  addDependsOn(dependsOn: IImplementationGuideDependsOn): this {
    return this.addToArray('dependsOn', dependsOn);
  }

  /**
   * Add global
   * Profiles that apply globally
   */
  addGlobal(global: IImplementationGuideGlobal): this {
    return this.addToArray('global', global);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuide instance
   */
  build(): ImplementationGuide {
    return new ImplementationGuide(this.data);
  }

  /**
   * Build and validate the ImplementationGuide instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuide> {
    const implementationGuide = this.build();
    await implementationGuide.validateOrThrow();
    return implementationGuide;
  }
}
