/**
 * ContributorSummarySource
 * 
 * Used to code the producer or rule for creating the display string.
 *
 * @see http://hl7.org/fhir/ValueSet/contributor-summary-source
 */

export type ContributorSummarySourceType = 'publisher-data' | 'article-copy' | 'citation-manager' | 'custom';

export enum ContributorSummarySourceEnum {
  /** Publisher provided */
  PublisherData = 'publisher-data',
  /** Copied from article */
  ArticleCopy = 'article-copy',
  /** Reported by citation manager */
  CitationManager = 'citation-manager',
  /** custom format */
  Custom = 'custom',
}

export const ContributorSummarySourceValues = ['publisher-data', 'article-copy', 'citation-manager', 'custom'] as const;
