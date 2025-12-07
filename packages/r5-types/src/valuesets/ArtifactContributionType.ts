/**
 * Artifact Contribution Type
 * 
 * Citation contribution.
 *
 * @see http://hl7.org/fhir/ValueSet/artifact-contribution-type
 */

export type ArtifactContributionTypeType = 'conceptualization' | 'data-curation' | 'formal-analysis' | 'funding-acquisition' | 'investigation' | 'methodology' | 'project-administration' | 'resources' | 'software' | 'supervision' | 'validation' | 'visualization' | 'writing-original-draft' | 'writing-review-editing';

export enum ArtifactContributionTypeEnum {
  /** Conceptualization */
  Conceptualization = 'conceptualization',
  /** Data curation */
  DataCuration = 'data-curation',
  /** Formal analysis */
  FormalAnalysis = 'formal-analysis',
  /** Funding acquisition */
  FundingAcquisition = 'funding-acquisition',
  /** Investigation */
  Investigation = 'investigation',
  /** Methodology */
  Methodology = 'methodology',
  /** Project administration */
  ProjectAdministration = 'project-administration',
  /** Resources */
  Resources = 'resources',
  /** Software */
  Software = 'software',
  /** Supervision */
  Supervision = 'supervision',
  /** Validation */
  Validation = 'validation',
  /** Visualization */
  Visualization = 'visualization',
  /** Writing - original draft */
  WritingOriginalDraft = 'writing-original-draft',
  /** Writing - review & editing */
  WritingReviewEditing = 'writing-review-editing',
}

export const ArtifactContributionTypeValues = ['conceptualization', 'data-curation', 'formal-analysis', 'funding-acquisition', 'investigation', 'methodology', 'project-administration', 'resources', 'software', 'supervision', 'validation', 'visualization', 'writing-original-draft', 'writing-review-editing'] as const;
