/**
 * CitationClassificationType
 * 
 * Citation classification type
 *
 * @see http://hl7.org/fhir/ValueSet/citation-classification-type
 */

export type CitationClassificationTypeType = 'citation-source' | 'medline-owner' | 'fevir-platform-use';

export enum CitationClassificationTypeEnum {
  /** Citation Source */
  CitationSource = 'citation-source',
  /** MEDLINE Citation Owner */
  MedlineOwner = 'medline-owner',
  /** FEvIR Platform Use */
  FevirPlatformUse = 'fevir-platform-use',
}

export const CitationClassificationTypeValues = ['citation-source', 'medline-owner', 'fevir-platform-use'] as const;
