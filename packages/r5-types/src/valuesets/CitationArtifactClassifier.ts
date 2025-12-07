/**
 * Citation Artifact Classifier
 * 
 * Citation artifact classifier
 *
 * @see http://hl7.org/fhir/ValueSet/citation-artifact-classifier
 */

export type CitationArtifactClassifierType = 'audio' | 'D001877' | 'cds-artifact' | 'D016420' | 'common-share' | 'D019991' | 'D064886' | 'dataset-unpublished' | 'Electronic' | 'Electronic-eCollection' | 'Electronic-Print' | 'executable-app' | 'fhir-resource' | 'image' | 'interactive-form' | 'D016428' | 'D016422' | 'machine-code' | 'medline-base' | 'prediction-model' | 'D000076942' | 'Print' | 'Print-Electronic' | 'project-specific' | 'protocol' | 'pseudocode' | 'D016425' | 'standard-specification' | 'terminology' | 'D059040' | 'webpage';

export enum CitationArtifactClassifierEnum {
  /** Audio file */
  Audio = 'audio',
  /** Book */
  D001877 = 'D001877',
  /** Clinical Decision Support Artifact */
  CdsArtifact = 'cds-artifact',
  /** Comment */
  D016420 = 'D016420',
  /** Common Share */
  CommonShare = 'common-share',
  /** Database */
  D019991 = 'D019991',
  /** Dataset */
  D064886 = 'D064886',
  /** Dataset Unpublished */
  DatasetUnpublished = 'dataset-unpublished',
  /** Electronic */
  Electronic = 'Electronic',
  /** Electronic-eCollection */
  ElectronicEcollection = 'Electronic-eCollection',
  /** Electronic-Print */
  ElectronicPrint = 'Electronic-Print',
  /** Executable app */
  ExecutableApp = 'executable-app',
  /** FHIR Resource */
  FhirResource = 'fhir-resource',
  /** Image file */
  Image = 'image',
  /** Interactive Form */
  InteractiveForm = 'interactive-form',
  /** Journal Article */
  D016428 = 'D016428',
  /** Letter */
  D016422 = 'D016422',
  /** Machine code */
  MachineCode = 'machine-code',
  /** Medline Base */
  MedlineBase = 'medline-base',
  /** Prediction Model */
  PredictionModel = 'prediction-model',
  /** Preprint */
  D000076942 = 'D000076942',
  /** Print */
  Print = 'Print',
  /** Print Electronic */
  PrintElectronic = 'Print-Electronic',
  /** Project Specific */
  ProjectSpecific = 'project-specific',
  /** Protocol */
  Protocol = 'protocol',
  /** PseudoCode */
  Pseudocode = 'pseudocode',
  /** Published Erratum */
  D016425 = 'D016425',
  /** Standard Specification */
  StandardSpecification = 'standard-specification',
  /** Terminology */
  Terminology = 'terminology',
  /** Video-Audio Media */
  D059040 = 'D059040',
  /** Webpage */
  Webpage = 'webpage',
}

export const CitationArtifactClassifierValues = ['audio', 'D001877', 'cds-artifact', 'D016420', 'common-share', 'D019991', 'D064886', 'dataset-unpublished', 'Electronic', 'Electronic-eCollection', 'Electronic-Print', 'executable-app', 'fhir-resource', 'image', 'interactive-form', 'D016428', 'D016422', 'machine-code', 'medline-base', 'prediction-model', 'D000076942', 'Print', 'Print-Electronic', 'project-specific', 'protocol', 'pseudocode', 'D016425', 'standard-specification', 'terminology', 'D059040', 'webpage'] as const;
