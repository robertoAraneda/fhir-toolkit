import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EffectEvidenceSynthesis } from '../../models/resources/EffectEvidenceSynthesis.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IEffectEvidenceSynthesis,
  IEffectEvidenceSynthesisCertainty,
  IEffectEvidenceSynthesisEffectEstimate,
  IEffectEvidenceSynthesisResultsByExposure,
  IEffectEvidenceSynthesisSampleSize,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisBuilder - Fluent builder for EffectEvidenceSynthesis resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesis = new EffectEvidenceSynthesisBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EffectEvidenceSynthesisBuilder extends DomainResourceBuilder<EffectEvidenceSynthesis, IEffectEvidenceSynthesis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the effect evidence synthesis
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this effect evidence synthesis (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this effect evidence synthesis (human friendly)
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
   * Natural language description of the effect evidence synthesis
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
   * Set approvalDate
   * When the effect evidence synthesis was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the effect evidence synthesis was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the effect evidence synthesis is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set synthesisType
   * Type of synthesis
   */
  setSynthesisType(synthesisType: ICodeableConcept): this {
    this.data.synthesisType = synthesisType;
    return this;
  }

  /**
   * Set studyType
   * Type of study
   */
  setStudyType(studyType: ICodeableConcept): this {
    this.data.studyType = studyType;
    return this;
  }

  /**
   * Set population
   * What population?
   */
  setPopulation(population: IReference<'EvidenceVariable'>): this {
    this.data.population = population;
    return this;
  }

  /**
   * Set exposure
   * What exposure?
   */
  setExposure(exposure: IReference<'EvidenceVariable'>): this {
    this.data.exposure = exposure;
    return this;
  }

  /**
   * Set exposureAlternative
   * What comparison exposure?
   */
  setExposureAlternative(exposureAlternative: IReference<'EvidenceVariable'>): this {
    this.data.exposureAlternative = exposureAlternative;
    return this;
  }

  /**
   * Set outcome
   * What outcome?
   */
  setOutcome(outcome: IReference<'EvidenceVariable'>): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set sampleSize
   * What sample size was involved?
   */
  setSampleSize(sampleSize: IEffectEvidenceSynthesisSampleSize): this {
    this.data.sampleSize = sampleSize;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the effect evidence synthesis
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
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
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
   * Intended jurisdiction for effect evidence synthesis (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc.
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
   * Add resultsByExposure
   * What was the result per exposure?
   */
  addResultsByExposure(resultsByExposure: IEffectEvidenceSynthesisResultsByExposure): this {
    return this.addToArray('resultsByExposure', resultsByExposure);
  }

  /**
   * Add effectEstimate
   * What was the estimated effect
   */
  addEffectEstimate(effectEstimate: IEffectEvidenceSynthesisEffectEstimate): this {
    return this.addToArray('effectEstimate', effectEstimate);
  }

  /**
   * Add certainty
   * How certain is the effect
   */
  addCertainty(certainty: IEffectEvidenceSynthesisCertainty): this {
    return this.addToArray('certainty', certainty);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EffectEvidenceSynthesis instance
   */
  build(): EffectEvidenceSynthesis {
    return new EffectEvidenceSynthesis(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesis> {
    const effectEvidenceSynthesis = this.build();
    await effectEvidenceSynthesis.validateOrThrow();
    return effectEvidenceSynthesis;
  }
}
