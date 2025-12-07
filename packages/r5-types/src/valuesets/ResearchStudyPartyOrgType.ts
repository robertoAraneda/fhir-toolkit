/**
 * Research Study Party Organization Type
 * 
 * This is a ResearchStudy's party organization type.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-party-organization-type
 */

export type ResearchStudyPartyOrgTypeType = 'nih' | 'fda' | 'government' | 'nonprofit' | 'academic' | 'industry';

export enum ResearchStudyPartyOrgTypeEnum {
  /** NIH */
  Nih = 'nih',
  /** FDA */
  Fda = 'fda',
  /** Government */
  Government = 'government',
  /** Nonprofit */
  Nonprofit = 'nonprofit',
  /** Academic */
  Academic = 'academic',
  /** Industry */
  Industry = 'industry',
}

export const ResearchStudyPartyOrgTypeValues = ['nih', 'fda', 'government', 'nonprofit', 'academic', 'industry'] as const;
