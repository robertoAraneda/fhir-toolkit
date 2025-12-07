/**
 * Cited Artifact Part Type
 * 
 * To describe the reason for the variant citation, such as version number or subpart specification.
 *
 * @see http://hl7.org/fhir/ValueSet/cited-artifact-part-type
 */

export type CitedArtifactPartTypeType = 'pages' | 'sections' | 'paragraphs' | 'lines' | 'tables' | 'figures' | 'supplement' | 'supplement-subpart' | 'article-set';

export enum CitedArtifactPartTypeEnum {
  /** pages */
  Pages = 'pages',
  /** sections */
  Sections = 'sections',
  /** paragraphs */
  Paragraphs = 'paragraphs',
  /** lines */
  Lines = 'lines',
  /** tables */
  Tables = 'tables',
  /** figures */
  Figures = 'figures',
  /** Supplement or Appendix */
  Supplement = 'supplement',
  /** Supplement or Appendix Subpart */
  SupplementSubpart = 'supplement-subpart',
  /** Part of an article set */
  ArticleSet = 'article-set',
}

export const CitedArtifactPartTypeValues = ['pages', 'sections', 'paragraphs', 'lines', 'tables', 'figures', 'supplement', 'supplement-subpart', 'article-set'] as const;
