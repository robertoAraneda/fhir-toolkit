import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ConceptMap } from '../../models/resources/ConceptMap.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IConceptMap,
  IConceptMapAdditionalAttribute,
  IConceptMapGroup,
  IConceptMapProperty,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapBuilder - Fluent builder for ConceptMap resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMap = new ConceptMapBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ConceptMapBuilder extends DomainResourceBuilder<ConceptMap, IConceptMap> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this concept map, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the concept map
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this concept map (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this concept map (human friendly)
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
   * Natural language description of the concept map
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this concept map is defined
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
   * Set approvalDate
   * When the ConceptMap was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the ConceptMap was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the ConceptMap is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
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
    const key = `versionAlgorithm${type}` as keyof IConceptMap;
    const otherKeys: (keyof IConceptMap)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IConceptMap);
      otherKeys.push('_versionAlgorithmString' as keyof IConceptMap);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IConceptMap);
      otherKeys.push('_versionAlgorithmCoding' as keyof IConceptMap);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set sourceScope choice type (sourceScopeUri, sourceScopeCanonical)
   * @param type - 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSourceScope('Uri', value)
   */
  setSourceScope<T extends 'Uri' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `sourceScope${type}` as keyof IConceptMap;
    const otherKeys: (keyof IConceptMap)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('sourceScopeUri' as keyof IConceptMap);
      otherKeys.push('_sourceScopeUri' as keyof IConceptMap);
    }
    if (type !== 'Canonical') {
      otherKeys.push('sourceScopeCanonical' as keyof IConceptMap);
      otherKeys.push('_sourceScopeCanonical' as keyof IConceptMap);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set targetScope choice type (targetScopeUri, targetScopeCanonical)
   * @param type - 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTargetScope('Uri', value)
   */
  setTargetScope<T extends 'Uri' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `targetScope${type}` as keyof IConceptMap;
    const otherKeys: (keyof IConceptMap)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('targetScopeUri' as keyof IConceptMap);
      otherKeys.push('_targetScopeUri' as keyof IConceptMap);
    }
    if (type !== 'Canonical') {
      otherKeys.push('targetScopeCanonical' as keyof IConceptMap);
      otherKeys.push('_targetScopeCanonical' as keyof IConceptMap);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the concept map
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
   * Intended jurisdiction for concept map (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * E.g. Education, Treatment, Assessment, etc
   */
  addTopic(topic: ICodeableConcept): this {
    return this.addToArray('topic', topic);
  }

  /**
   * Add author
   * Who authored the ConceptMap
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the ConceptMap
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the ConceptMap
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the ConceptMap
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add relatedArtifact
   * Additional documentation, citations, etc
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add property
   * Additional properties of the mapping
   */
  addProperty(property: IConceptMapProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add additionalAttribute
   * Definition of an additional attribute to act as a data source or target
   */
  addAdditionalAttribute(additionalAttribute: IConceptMapAdditionalAttribute): this {
    return this.addToArray('additionalAttribute', additionalAttribute);
  }

  /**
   * Add group
   * Same source and target systems
   */
  addGroup(group: IConceptMapGroup): this {
    return this.addToArray('group', group);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMap instance
   */
  build(): ConceptMap {
    return new ConceptMap(this.data);
  }

  /**
   * Build and validate the ConceptMap instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMap> {
    const conceptMap = this.build();
    await conceptMap.validateOrThrow();
    return conceptMap;
  }
}
