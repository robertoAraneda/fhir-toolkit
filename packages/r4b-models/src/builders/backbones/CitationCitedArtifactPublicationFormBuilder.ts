import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPublicationForm } from '../../models/backbones/CitationCitedArtifactPublicationForm.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICitationCitedArtifactPublicationForm,
  ICitationCitedArtifactPublicationFormPeriodicRelease,
  ICitationCitedArtifactPublicationFormPublishedIn,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

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
   * Set periodicRelease
   * The specific issue in which the cited article resides
   */
  setPeriodicRelease(periodicRelease: ICitationCitedArtifactPublicationFormPeriodicRelease): this {
    this.data.periodicRelease = periodicRelease;
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
   * Set copyright
   * Copyright notice for the full article or artifact
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set page choice type
   * @param type - 'String' | 'Count'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPage('String', value)
   */
  setPage<T extends 'String' | 'Count'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `page${type}` as keyof ICitationCitedArtifactPublicationForm;
    const otherKeys: (keyof ICitationCitedArtifactPublicationForm)[] = [];
    if (type !== 'String') {
      otherKeys.push('pageString' as keyof ICitationCitedArtifactPublicationForm);
      otherKeys.push('_pageString' as keyof ICitationCitedArtifactPublicationForm);
    }
    if (type !== 'Count') {
      otherKeys.push('pageCount' as keyof ICitationCitedArtifactPublicationForm);
      otherKeys.push('_pageCount' as keyof ICitationCitedArtifactPublicationForm);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add language
   * Language in which this form of the article is published
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
