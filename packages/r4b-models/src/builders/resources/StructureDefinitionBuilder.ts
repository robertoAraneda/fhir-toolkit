import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { StructureDefinition } from '../../models/resources/StructureDefinition.js';
import type {
  FHIRVersionType,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IStructureDefinition,
  IStructureDefinitionContext,
  IStructureDefinitionDifferential,
  IStructureDefinitionMapping,
  IStructureDefinitionSnapshot,
  IUsageContext,
  PublicationStatusType,
  StructureDefinitionKindType,
  TypeDerivationRuleType,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureDefinitionBuilder - Fluent builder for StructureDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureDefinition = new StructureDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class StructureDefinitionBuilder extends DomainResourceBuilder<StructureDefinition, IStructureDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this structure definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the structure definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this structure definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this structure definition (human friendly)
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
   * Natural language description of the structure definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this structure definition is defined
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
   * Set fhirVersion
   * FHIR Version this StructureDefinition targets
   */
  setFhirVersion(fhirVersion: FHIRVersionType): this {
    this.data.fhirVersion = fhirVersion;
    return this;
  }

  /**
   * Set kind
   * primitive-type | complex-type | resource | logical
   */
  setKind(kind: StructureDefinitionKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set abstract
   * Whether the structure is abstract
   */
  setAbstract(abstract: boolean): this {
    this.data.abstract = abstract;
    return this;
  }

  /**
   * Set type
   * Type defined or constrained by this structure
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set baseDefinition
   * Definition that this type is constrained/specialized from
   */
  setBaseDefinition(baseDefinition: string): this {
    this.data.baseDefinition = baseDefinition;
    return this;
  }

  /**
   * Set derivation
   * specialization | constraint - How relates to base definition
   */
  setDerivation(derivation: TypeDerivationRuleType): this {
    this.data.derivation = derivation;
    return this;
  }

  /**
   * Set snapshot
   * Snapshot view of the structure
   */
  setSnapshot(snapshot: IStructureDefinitionSnapshot): this {
    this.data.snapshot = snapshot;
    return this;
  }

  /**
   * Set differential
   * Differential view of the structure
   */
  setDifferential(differential: IStructureDefinitionDifferential): this {
    this.data.differential = differential;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the structure definition
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
   * Intended jurisdiction for structure definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add keyword
   * Assist with indexing and finding
   */
  addKeyword(keyword: ICoding): this {
    return this.addToArray('keyword', keyword);
  }

  /**
   * Add mapping
   * External specification that the content is mapped to
   */
  addMapping(mapping: IStructureDefinitionMapping): this {
    return this.addToArray('mapping', mapping);
  }

  /**
   * Add context
   * If an extension, where it can be used in instances
   */
  addContext(context: IStructureDefinitionContext): this {
    return this.addToArray('context', context);
  }

  /**
   * Add contextInvariant
   * FHIRPath invariants - when the extension can be used
   */
  addContextInvariant(contextInvariant: string): this {
    return this.addToArray('contextInvariant', contextInvariant);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureDefinition instance
   */
  build(): StructureDefinition {
    return new StructureDefinition(this.data);
  }

  /**
   * Build and validate the StructureDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureDefinition> {
    const structureDefinition = this.build();
    await structureDefinition.validateOrThrow();
    return structureDefinition;
  }
}
