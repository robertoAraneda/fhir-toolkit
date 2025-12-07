/**
 * ArticleUrlType
 * 
 * Code the reason for different URLs, eg abstract and full-text.
 *
 * @see http://hl7.org/fhir/ValueSet/article-url-type
 */

export type ArticleUrlTypeType = 'abstract' | 'abstract-version' | 'doi-based' | 'full-text' | 'full-text-version' | 'pdf' | 'pdf-version' | 'webpage' | 'not-specified' | 'json' | 'json-version' | 'xml' | 'xml-version' | 'supplement' | 'supplementary-file-directory' | 'compressed-file';

export enum ArticleUrlTypeEnum {
  /** Abstract */
  Abstract = 'abstract',
  /** Abstract Version */
  AbstractVersion = 'abstract-version',
  /** DOI Based */
  DoiBased = 'doi-based',
  /** Full-Text */
  FullText = 'full-text',
  /** Full-Text Version */
  FullTextVersion = 'full-text-version',
  /** PDF */
  Pdf = 'pdf',
  /** PDF Version */
  PdfVersion = 'pdf-version',
  /** Webpage */
  Webpage = 'webpage',
  /** Not Specified */
  NotSpecified = 'not-specified',
  /** JSON */
  Json = 'json',
  /** JSON Version */
  JsonVersion = 'json-version',
  /** XML */
  Xml = 'xml',
  /** XML */
  XmlVersion = 'xml-version',
  /** Supplement */
  Supplement = 'supplement',
  /** Supplementary file directory */
  SupplementaryFileDirectory = 'supplementary-file-directory',
  /** Compressed file */
  CompressedFile = 'compressed-file',
}

export const ArticleUrlTypeValues = ['abstract', 'abstract-version', 'doi-based', 'full-text', 'full-text-version', 'pdf', 'pdf-version', 'webpage', 'not-specified', 'json', 'json-version', 'xml', 'xml-version', 'supplement', 'supplementary-file-directory', 'compressed-file'] as const;
