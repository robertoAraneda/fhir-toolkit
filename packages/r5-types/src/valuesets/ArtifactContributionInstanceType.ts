/**
 * Artifact Contribution Instance Type
 * 
 * Artifact Contribution Instance Type
 *
 * @see http://hl7.org/fhir/ValueSet/artifact-contribution-instance-type
 */

export type ArtifactContributionInstanceTypeType = 'reviewed' | 'approved' | 'edited';

export enum ArtifactContributionInstanceTypeEnum {
  /** Reviewed */
  Reviewed = 'reviewed',
  /** Approved */
  Approved = 'approved',
  /** Edited */
  Edited = 'edited',
}

export const ArtifactContributionInstanceTypeValues = ['reviewed', 'approved', 'edited'] as const;
