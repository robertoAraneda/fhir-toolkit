/**
 * CitationArtifactClassifier
 * 
 * Citation artifact classifier
 *
 * @see http://hl7.org/fhir/ValueSet/citation-artifact-classifier
 */

export type CitationArtifactClassifierType = 'webpage' | 'D016428' | 'D016422' | 'D016420' | 'D016425' | 'executable-app' | 'D000076942' | 'D019991' | 'D001877' | 'D064886' | '68059040' | 'audio' | 'image' | 'machine-code' | 'protocol' | 'fhir-resource' | 'Print' | 'Print-Electronic' | 'Electronic' | 'Electronic-Print' | 'Electronic-eCollection' | 'medline-base' | 'common-share' | 'project-specific';

export enum CitationArtifactClassifierEnum {
  /** Webpage */
  Webpage = 'webpage',
  /** Journal Article */
  D016428 = 'D016428',
  /** Letter */
  D016422 = 'D016422',
  /** Comment */
  D016420 = 'D016420',
  /** Published Erratum */
  D016425 = 'D016425',
  /** Executable app */
  ExecutableApp = 'executable-app',
  /** Preprint */
  D000076942 = 'D000076942',
  /** Database */
  D019991 = 'D019991',
  /** Book */
  D001877 = 'D001877',
  /** Dataset */
  D064886 = 'D064886',
  /** Video-Audio Media */
  _68059040 = '68059040',
  /** Audio file */
  Audio = 'audio',
  /** Image file */
  Image = 'image',
  /** Machine code */
  MachineCode = 'machine-code',
  /** Protocol */
  Protocol = 'protocol',
  /** FHIR Resource */
  FhirResource = 'fhir-resource',
  /** Print */
  Print = 'Print',
  /** Print Electronic */
  PrintElectronic = 'Print-Electronic',
  /** Electronic */
  Electronic = 'Electronic',
  /** Electronic-Print */
  ElectronicPrint = 'Electronic-Print',
  /** Electronic-eCollection */
  ElectronicEcollection = 'Electronic-eCollection',
  /** Medline Base */
  MedlineBase = 'medline-base',
  /** Common Share */
  CommonShare = 'common-share',
  /** Project Specific */
  ProjectSpecific = 'project-specific',
}

export const CitationArtifactClassifierValues = ['webpage', 'D016428', 'D016422', 'D016420', 'D016425', 'executable-app', 'D000076942', 'D019991', 'D001877', 'D064886', '68059040', 'audio', 'image', 'machine-code', 'protocol', 'fhir-resource', 'Print', 'Print-Electronic', 'Electronic', 'Electronic-Print', 'Electronic-eCollection', 'medline-base', 'common-share', 'project-specific'] as const;
