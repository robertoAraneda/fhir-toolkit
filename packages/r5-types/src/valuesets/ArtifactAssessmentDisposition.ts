/**
 * Artifact Assessment Disposition
 * 
 * Possible values for the disposition of a comment or change request, typically used for comments and change requests, to indicate the disposition of the responsible party towards the changes suggested by the comment or change request.
 *
 * @see http://hl7.org/fhir/ValueSet/artifactassessment-disposition
 */

export type ArtifactAssessmentDispositionType = 'unresolved' | 'not-persuasive' | 'persuasive' | 'persuasive-with-modification' | 'not-persuasive-with-modification';

export enum ArtifactAssessmentDispositionEnum {
  /** Unresolved */
  Unresolved = 'unresolved',
  /** Not Persuasive */
  NotPersuasive = 'not-persuasive',
  /** Persuasive */
  Persuasive = 'persuasive',
  /** Persuasive with Modification */
  PersuasiveWithModification = 'persuasive-with-modification',
  /** Not Persuasive with Modification */
  NotPersuasiveWithModification = 'not-persuasive-with-modification',
}

export const ArtifactAssessmentDispositionValues = ['unresolved', 'not-persuasive', 'persuasive', 'persuasive-with-modification', 'not-persuasive-with-modification'] as const;
