/**
 * Artifact Assessment Information Type
 * 
 * The type of information contained in a component of an artifact assessment.
 *
 * @see http://hl7.org/fhir/ValueSet/artifactassessment-information-type
 */

export type ArtifactAssessmentInformationTypeType = 'comment' | 'classifier' | 'rating' | 'container' | 'response' | 'change-request';

export enum ArtifactAssessmentInformationTypeEnum {
  /** Comment */
  Comment = 'comment',
  /** Classifier */
  Classifier = 'classifier',
  /** Rating */
  Rating = 'rating',
  /** Container */
  Container = 'container',
  /** Response */
  Response = 'response',
  /** Change Request */
  ChangeRequest = 'change-request',
}

export const ArtifactAssessmentInformationTypeValues = ['comment', 'classifier', 'rating', 'container', 'response', 'change-request'] as const;
