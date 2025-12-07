import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Evidence } from '../../models/resources/Evidence.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IEvidence,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * EvidenceBuilder - Fluent builder for Evidence resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidence = new EvidenceBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EvidenceBuilder extends DomainResourceBuilder<Evidence, IEvidence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this evidence, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the evidence
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this evidence (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this evidence (human friendly)
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
   * Subordinate title of the Evidence
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
   * Natural language description of the evidence
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
   * When the evidence was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the evidence was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the evidence is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set exposureBackground
   * What population?
   */
  setExposureBackground(exposureBackground: IReference<'EvidenceVariable'>): this {
    this.data.exposureBackground = exposureBackground;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the evidence
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
   * Intended jurisdiction for evidence (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * The category of the Evidence, such as Education, Treatment, Assessment, etc.
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
   * Add exposureVariant
   * What exposure?
   */
  addExposureVariant(exposureVariant: IReference<'EvidenceVariable'>): this {
    return this.addToArray('exposureVariant', exposureVariant);
  }

  /**
   * Add outcome
   * What outcome?
   */
  addOutcome(outcome: IReference<'EvidenceVariable'>): this {
    return this.addToArray('outcome', outcome);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Evidence instance
   */
  build(): Evidence {
    return new Evidence(this.data);
  }

  /**
   * Build and validate the Evidence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Evidence> {
    const evidence = this.build();
    await evidence.validateOrThrow();
    return evidence;
  }
}
