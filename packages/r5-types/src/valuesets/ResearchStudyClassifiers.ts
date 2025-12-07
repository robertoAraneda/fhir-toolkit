/**
 * Research Study Classifiers
 * 
 * Codes that convey the type of label that is provided.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-classifiers
 */

export type ResearchStudyClassifiersType = 'fda-regulated-drug' | 'fda-regulated-device' | 'mpg-paragraph-23b' | 'irb-exempt';

export enum ResearchStudyClassifiersEnum {
  /** FDA regulated drug */
  FdaRegulatedDrug = 'fda-regulated-drug',
  /** FDA regulated device */
  FdaRegulatedDevice = 'fda-regulated-device',
  /** MPG Paragraph 23b */
  MpgParagraph23b = 'mpg-paragraph-23b',
  /** IRB-exempt */
  IrbExempt = 'irb-exempt',
}

export const ResearchStudyClassifiersValues = ['fda-regulated-drug', 'fda-regulated-device', 'mpg-paragraph-23b', 'irb-exempt'] as const;
