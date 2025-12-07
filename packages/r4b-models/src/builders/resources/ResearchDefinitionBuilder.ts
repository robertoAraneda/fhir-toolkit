import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ResearchDefinition } from '../../models/resources/ResearchDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchDefinition,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ResearchDefinitionBuilder - Fluent builder for ResearchDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchDefinition = new ResearchDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ResearchDefinitionBuilder extends DomainResourceBuilder<ResearchDefinition, IResearchDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this research definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the research definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this research definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this research definition (human friendly)
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
   * Subordinate title of the ResearchDefinition
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
   * Natural language description of the research definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this research definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set usage
   * Describes the clinical usage of the ResearchDefinition
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
   * When the research definition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the research definition was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the research definition is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set population
   * What population?
   */
  setPopulation(population: IReference<'ResearchElementDefinition'>): this {
    this.data.population = population;
    return this;
  }

  /**
   * Set exposure
   * What exposure?
   */
  setExposure(exposure: IReference<'ResearchElementDefinition'>): this {
    this.data.exposure = exposure;
    return this;
  }

  /**
   * Set exposureAlternative
   * What alternative exposure state?
   */
  setExposureAlternative(exposureAlternative: IReference<'ResearchElementDefinition'>): this {
    this.data.exposureAlternative = exposureAlternative;
    return this;
  }

  /**
   * Set outcome
   * What outcome?
   */
  setOutcome(outcome: IReference<'ResearchElementDefinition'>): this {
    this.data.outcome = outcome;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type
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
    const key = `subject${type}` as keyof IResearchDefinition;
    const otherKeys: (keyof IResearchDefinition)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IResearchDefinition);
      otherKeys.push('_subjectCodeableConcept' as keyof IResearchDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IResearchDefinition);
      otherKeys.push('_subjectReference' as keyof IResearchDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the research definition
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
   * Intended jurisdiction for research definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc.
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
   * Logic used by the ResearchDefinition
   */
  addLibrary(library: string): this {
    return this.addToArray('library', library);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchDefinition instance
   */
  build(): ResearchDefinition {
    return new ResearchDefinition(this.data);
  }

  /**
   * Build and validate the ResearchDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchDefinition> {
    const researchDefinition = this.build();
    await researchDefinition.validateOrThrow();
    return researchDefinition;
  }
}
