import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPublicationForm } from '../../models/backbones/CitationCitedArtifactPublicationForm.js';
import type {
  ICitationCitedArtifactPublicationForm,
  ICitationCitedArtifactPublicationFormPublishedIn,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactPublicationFormBuilder - Fluent builder for CitationCitedArtifactPublicationForm backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactPublicationForm = new CitationCitedArtifactPublicationFormBuilder()
 *   .setPublishedIn(value)
 *   .addLanguage({ ... })
 *   .build();
 */
export class CitationCitedArtifactPublicationFormBuilder extends BackboneElementBuilder<CitationCitedArtifactPublicationForm, ICitationCitedArtifactPublicationForm> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set publishedIn
   * The collection the cited article or artifact is published in
   */
  setPublishedIn(publishedIn: ICitationCitedArtifactPublicationFormPublishedIn): this {
    this.data.publishedIn = publishedIn;
    return this;
  }

  /**
   * Set citedMedium
   * Internet or Print
   */
  setCitedMedium(citedMedium: ICodeableConcept): this {
    this.data.citedMedium = citedMedium;
    return this;
  }

  /**
   * Set volume
   * Volume number of journal or other collection in which the article is published
   */
  setVolume(volume: string): this {
    this.data.volume = volume;
    return this;
  }

  /**
   * Set issue
   * Issue, part or supplement of journal or other collection in which the article is published
   */
  setIssue(issue: string): this {
    this.data.issue = issue;
    return this;
  }

  /**
   * Set articleDate
   * The date the article was added to the database, or the date the article was released
   */
  setArticleDate(articleDate: string): this {
    this.data.articleDate = articleDate;
    return this;
  }

  /**
   * Set publicationDateText
   * Text representation of the date on which the issue of the cited artifact was published
   */
  setPublicationDateText(publicationDateText: string): this {
    this.data.publicationDateText = publicationDateText;
    return this;
  }

  /**
   * Set publicationDateSeason
   * Season in which the cited artifact was published
   */
  setPublicationDateSeason(publicationDateSeason: string): this {
    this.data.publicationDateSeason = publicationDateSeason;
    return this;
  }

  /**
   * Set lastRevisionDate
   * The date the article was last revised or updated in the database
   */
  setLastRevisionDate(lastRevisionDate: string): this {
    this.data.lastRevisionDate = lastRevisionDate;
    return this;
  }

  /**
   * Set accessionNumber
   * Entry number or identifier for inclusion in a database
   */
  setAccessionNumber(accessionNumber: string): this {
    this.data.accessionNumber = accessionNumber;
    return this;
  }

  /**
   * Set pageString
   * Used for full display of pagination
   */
  setPageString(pageString: string): this {
    this.data.pageString = pageString;
    return this;
  }

  /**
   * Set firstPage
   * Used for isolated representation of first page
   */
  setFirstPage(firstPage: string): this {
    this.data.firstPage = firstPage;
    return this;
  }

  /**
   * Set lastPage
   * Used for isolated representation of last page
   */
  setLastPage(lastPage: string): this {
    this.data.lastPage = lastPage;
    return this;
  }

  /**
   * Set pageCount
   * Number of pages or screens
   */
  setPageCount(pageCount: string): this {
    this.data.pageCount = pageCount;
    return this;
  }

  /**
   * Set copyright
   * Copyright notice for the full article or artifact
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add language
   * Language(s) in which this form of the article is published
   */
  addLanguage(language: ICodeableConcept): this {
    return this.addToArray('language', language);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactPublicationForm instance
   */
  build(): CitationCitedArtifactPublicationForm {
    return new CitationCitedArtifactPublicationForm(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactPublicationForm instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactPublicationForm> {
    const citationCitedArtifactPublicationForm = this.build();
    await citationCitedArtifactPublicationForm.validateOrThrow();
    return citationCitedArtifactPublicationForm;
  }
}
