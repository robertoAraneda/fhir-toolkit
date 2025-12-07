import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { TerminologyCapabilities } from '../../models/resources/TerminologyCapabilities.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  CapabilityStatementKindType,
  CodeSearchSupportType,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  ITerminologyCapabilities,
  ITerminologyCapabilitiesClosure,
  ITerminologyCapabilitiesCodeSystem,
  ITerminologyCapabilitiesExpansion,
  ITerminologyCapabilitiesImplementation,
  ITerminologyCapabilitiesSoftware,
  ITerminologyCapabilitiesTranslation,
  ITerminologyCapabilitiesValidateCode,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * TerminologyCapabilitiesBuilder - Fluent builder for TerminologyCapabilities resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilities = new TerminologyCapabilitiesBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class TerminologyCapabilitiesBuilder extends DomainResourceBuilder<TerminologyCapabilities, ITerminologyCapabilities> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this terminology capabilities, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the terminology capabilities
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this terminology capabilities (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this terminology capabilities (human friendly)
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
   * Natural language description of the terminology capabilities
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this terminology capabilities is defined
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
   * Set kind
   * instance | capability | requirements
   */
  setKind(kind: CapabilityStatementKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set software
   * Software that is covered by this terminology capability statement
   */
  setSoftware(software: ITerminologyCapabilitiesSoftware): this {
    this.data.software = software;
    return this;
  }

  /**
   * Set implementation
   * If this describes a specific instance
   */
  setImplementation(implementation: ITerminologyCapabilitiesImplementation): this {
    this.data.implementation = implementation;
    return this;
  }

  /**
   * Set lockedDate
   * Whether lockedDate is supported
   */
  setLockedDate(lockedDate: boolean): this {
    this.data.lockedDate = lockedDate;
    return this;
  }

  /**
   * Set expansion
   * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
   */
  setExpansion(expansion: ITerminologyCapabilitiesExpansion): this {
    this.data.expansion = expansion;
    return this;
  }

  /**
   * Set codeSearch
   * in-compose | in-expansion | in-compose-or-expansion
   */
  setCodeSearch(codeSearch: CodeSearchSupportType): this {
    this.data.codeSearch = codeSearch;
    return this;
  }

  /**
   * Set validateCode
   * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
   */
  setValidateCode(validateCode: ITerminologyCapabilitiesValidateCode): this {
    this.data.validateCode = validateCode;
    return this;
  }

  /**
   * Set translation
   * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
   */
  setTranslation(translation: ITerminologyCapabilitiesTranslation): this {
    this.data.translation = translation;
    return this;
  }

  /**
   * Set closure
   * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
   */
  setClosure(closure: ITerminologyCapabilitiesClosure): this {
    this.data.closure = closure;
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
    const key = `versionAlgorithm${type}` as keyof ITerminologyCapabilities;
    const otherKeys: (keyof ITerminologyCapabilities)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof ITerminologyCapabilities);
      otherKeys.push('_versionAlgorithmString' as keyof ITerminologyCapabilities);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof ITerminologyCapabilities);
      otherKeys.push('_versionAlgorithmCoding' as keyof ITerminologyCapabilities);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the terminology capabilities
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
   * Intended jurisdiction for terminology capabilities (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add codeSystem
   * A code system supported by the server
   */
  addCodeSystem(codeSystem: ITerminologyCapabilitiesCodeSystem): this {
    return this.addToArray('codeSystem', codeSystem);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilities instance
   */
  build(): TerminologyCapabilities {
    return new TerminologyCapabilities(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilities instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilities> {
    const terminologyCapabilities = this.build();
    await terminologyCapabilities.validateOrThrow();
    return terminologyCapabilities;
  }
}
