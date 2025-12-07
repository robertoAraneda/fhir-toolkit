import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Citation } from '../../models/resources/Citation.js';
import type {
  IAnnotation,
  ICitation,
  ICitationCitedArtifact,
  ICitationClassification,
  ICitationRelatesTo,
  ICitationStatusDate,
  ICitationSummary,
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationBuilder - Fluent builder for Citation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const citation = new CitationBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CitationBuilder extends DomainResourceBuilder<Citation, ICitation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this citation, represented as a globally unique URI
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the citation
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this citation (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this citation (human friendly)
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
   * The publisher of the Citation, not the publisher of the article or artifact being cited
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the citation
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this citation is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions for the Citation, not for the cited artifact
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set approvalDate
   * When the citation was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the citation was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the citation is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set citedArtifact
   * The article or artifact being described
   */
  setCitedArtifact(citedArtifact: ICitationCitedArtifact): this {
    this.data.citedArtifact = citedArtifact;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier for the Citation resource itself
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for the publisher of the Citation Resource
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the Citation Resource content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for citation (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add author
   * Who authored the Citation
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the Citation
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the Citation
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the Citation
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add summary
   * A human-readable display of the citation
   */
  addSummary(summary: ICitationSummary): this {
    return this.addToArray('summary', summary);
  }

  /**
   * Add classification
   * The assignment to an organizing scheme
   */
  addClassification(classification: ICitationClassification): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add note
   * Used for general notes and annotations not coded elsewhere
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add currentState
   * The status of the citation
   */
  addCurrentState(currentState: ICodeableConcept): this {
    return this.addToArray('currentState', currentState);
  }

  /**
   * Add statusDate
   * An effective date or period for a status of the citation
   */
  addStatusDate(statusDate: ICitationStatusDate): this {
    return this.addToArray('statusDate', statusDate);
  }

  /**
   * Add relatesTo
   * Artifact related to the Citation Resource
   */
  addRelatesTo(relatesTo: ICitationRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Citation instance
   */
  build(): Citation {
    return new Citation(this.data);
  }

  /**
   * Build and validate the Citation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Citation> {
    const citation = this.build();
    await citation.validateOrThrow();
    return citation;
  }
}
