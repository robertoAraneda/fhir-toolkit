import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Requirements } from '../../models/resources/Requirements.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IRequirements,
  IRequirementsStatement,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * RequirementsBuilder - Fluent builder for Requirements resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const requirements = new RequirementsBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RequirementsBuilder extends DomainResourceBuilder<Requirements, IRequirements> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this Requirements, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the Requirements
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this Requirements (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this Requirements (human friendly)
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
   * Natural language description of the requirements
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this Requirements is defined
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
    const key = `versionAlgorithm${type}` as keyof IRequirements;
    const otherKeys: (keyof IRequirements)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IRequirements);
      otherKeys.push('_versionAlgorithmString' as keyof IRequirements);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IRequirements);
      otherKeys.push('_versionAlgorithmCoding' as keyof IRequirements);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the Requirements (business identifier)
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
   * Intended jurisdiction for Requirements (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add derivedFrom
   * Other set of Requirements this builds on
   */
  addDerivedFrom(derivedFrom: string): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add reference
   * External artifact (rule/document etc. that) created this set of requirements
   */
  addReference(reference: string): this {
    return this.addToArray('reference', reference);
  }

  /**
   * Add actor
   * Actor for these requirements
   */
  addActor(actor: string): this {
    return this.addToArray('actor', actor);
  }

  /**
   * Add statement
   * Actual statement as markdown
   */
  addStatement(statement: IRequirementsStatement): this {
    return this.addToArray('statement', statement);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Requirements instance
   */
  build(): Requirements {
    return new Requirements(this.data);
  }

  /**
   * Build and validate the Requirements instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Requirements> {
    const requirements = this.build();
    await requirements.validateOrThrow();
    return requirements;
  }
}
