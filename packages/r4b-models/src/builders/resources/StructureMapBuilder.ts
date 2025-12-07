import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { StructureMap } from '../../models/resources/StructureMap.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IStructureMap,
  IStructureMapGroup,
  IStructureMapStructure,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureMapBuilder - Fluent builder for StructureMap resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMap = new StructureMapBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class StructureMapBuilder extends DomainResourceBuilder<StructureMap, IStructureMap> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this structure map, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the structure map
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this structure map (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this structure map (human friendly)
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
   * Natural language description of the structure map
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this structure map is defined
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the structure map
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
   * Intended jurisdiction for structure map (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add structure
   * Structure Definition used by this map
   */
  addStructure(structure: IStructureMapStructure): this {
    return this.addToArray('structure', structure);
  }

  /**
   * Add import
   * Other maps used by this map (canonical URLs)
   */
  addImport(_import: string): this {
    return this.addToArray('import', _import);
  }

  /**
   * Add group
   * Named sections for reader convenience
   */
  addGroup(group: IStructureMapGroup): this {
    return this.addToArray('group', group);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMap instance
   */
  build(): StructureMap {
    return new StructureMap(this.data);
  }

  /**
   * Build and validate the StructureMap instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMap> {
    const structureMap = this.build();
    await structureMap.validateOrThrow();
    return structureMap;
  }
}
