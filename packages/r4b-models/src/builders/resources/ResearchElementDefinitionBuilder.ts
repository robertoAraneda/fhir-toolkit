import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchElementDefinition } from '../../models/resources/ResearchElementDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchElementDefinition,
  IResearchElementDefinitionCharacteristic,
  IUsageContext,
  PublicationStatusType,
  ResearchElementTypeType,
  VariableTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * ResearchElementDefinitionBuilder - Fluent builder for ResearchElementDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchElementDefinition = new ResearchElementDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ResearchElementDefinitionBuilder extends DomainResourceBuilder<ResearchElementDefinition, IResearchElementDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this research element definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the research element definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this research element definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this research element definition (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set shortTitle
   * Title for use in informal contexts
   */
  setShortTitle(shortTitle: string): this {
    this.data.shortTitle = shortTitle;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the ResearchElementDefinition
   */
  setSubtitle(subtitle: string): this {
    this.data.subtitle = subtitle;
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
   * Natural language description of the research element definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this research element definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set usage
   * Describes the clinical usage of the ResearchElementDefinition
   */
  setUsage(usage: string): this {
    this.data.usage = usage;
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
   * Set approvalDate
   * When the research element definition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the research element definition was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the research element definition is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set type
   * population | exposure | outcome
   */
  setType(type: ResearchElementTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set variableType
   * dichotomous | continuous | descriptive
   */
  setVariableType(variableType: VariableTypeType): this {
    this.data.variableType = variableType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type (subjectCodeableConcept, subjectReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof IResearchElementDefinition;
    const otherKeys: (keyof IResearchElementDefinition)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IResearchElementDefinition);
      otherKeys.push('_subjectCodeableConcept' as keyof IResearchElementDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IResearchElementDefinition);
      otherKeys.push('_subjectReference' as keyof IResearchElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the research element definition
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
   * Add comment
   * Used for footnotes or explanatory notes
   */
  addComment(comment: string): this {
    return this.addToArray('comment', comment);
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
   * Intended jurisdiction for research element definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc.
   */
  addTopic(topic: ICodeableConcept): this {
    return this.addToArray('topic', topic);
  }

  /**
   * Add author
   * Who authored the content
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the content
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the content
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the content
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add relatedArtifact
   * Additional documentation, citations, etc.
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add library
   * Logic used by the ResearchElementDefinition
   */
  addLibrary(library: string): this {
    return this.addToArray('library', library);
  }

  /**
   * Add characteristic
   * What defines the members of the research element
   */
  addCharacteristic(characteristic: IResearchElementDefinitionCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchElementDefinition instance
   */
  build(): ResearchElementDefinition {
    return new ResearchElementDefinition(this.data);
  }

  /**
   * Build and validate the ResearchElementDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchElementDefinition> {
    const researchElementDefinition = this.build();
    await researchElementDefinition.validateOrThrow();
    return researchElementDefinition;
  }
}
