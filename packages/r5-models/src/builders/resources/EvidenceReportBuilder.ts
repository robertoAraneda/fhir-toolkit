import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EvidenceReport } from '../../models/resources/EvidenceReport.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IEvidenceReport,
  IEvidenceReportRelatesTo,
  IEvidenceReportSection,
  IEvidenceReportSubject,
  IIdentifier,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportBuilder - Fluent builder for EvidenceReport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReport = new EvidenceReportBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addUseContext({ ... })
 *   .build();
 */
export class EvidenceReportBuilder extends DomainResourceBuilder<EvidenceReport, IEvidenceReport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this EvidenceReport, represented as a globally unique URI
   */
  setUrl(url: string): this {
    this.data.url = url;
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
   * Set type
   * Kind of report
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Focus of the report
   */
  setSubject(subject: IEvidenceReportSubject): this {
    this.data.subject = subject;
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

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set citeAs choice type (citeAsReference, citeAsMarkdown)
   * @param type - 'Reference' | 'Markdown'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCiteAs('Reference', value)
   */
  setCiteAs<T extends 'Reference' | 'Markdown'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `citeAs${type}` as keyof IEvidenceReport;
    const otherKeys: (keyof IEvidenceReport)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('citeAsReference' as keyof IEvidenceReport);
      otherKeys.push('_citeAsReference' as keyof IEvidenceReport);
    }
    if (type !== 'Markdown') {
      otherKeys.push('citeAsMarkdown' as keyof IEvidenceReport);
      otherKeys.push('_citeAsMarkdown' as keyof IEvidenceReport);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add identifier
   * Unique identifier for the evidence report
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add relatedIdentifier
   * Identifiers for articles that may relate to more than one evidence report
   */
  addRelatedIdentifier(relatedIdentifier: IIdentifier): this {
    return this.addToArray('relatedIdentifier', relatedIdentifier);
  }

  /**
   * Add note
   * Used for footnotes and annotations
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add relatedArtifact
   * Link, description or reference to artifact associated with the report
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
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
   * Add relatesTo
   * Relationships to other compositions/documents
   */
  addRelatesTo(relatesTo: IEvidenceReportRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  /**
   * Add section
   * Composition is broken into sections
   */
  addSection(section: IEvidenceReportSection): this {
    return this.addToArray('section', section);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReport instance
   */
  build(): EvidenceReport {
    return new EvidenceReport(this.data);
  }

  /**
   * Build and validate the EvidenceReport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReport> {
    const evidenceReport = this.build();
    await evidenceReport.validateOrThrow();
    return evidenceReport;
  }
}
