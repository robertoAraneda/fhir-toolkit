/**
 * Research Study Party Role
 * 
 * This is a ResearchStudy's party role.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-party-role
 */

export type ResearchStudyPartyRoleType = 'sponsor' | 'lead-sponsor' | 'sponsor-investigator' | 'primary-investigator' | 'collaborator' | 'funding-source' | 'general-contact' | 'recruitment-contact' | 'sub-investigator' | 'study-director' | 'study-chair' | 'irb';

export enum ResearchStudyPartyRoleEnum {
  /** sponsor */
  Sponsor = 'sponsor',
  /** lead-sponsor */
  LeadSponsor = 'lead-sponsor',
  /** sponsor-investigator */
  SponsorInvestigator = 'sponsor-investigator',
  /** primary-investigator */
  PrimaryInvestigator = 'primary-investigator',
  /** collaborator */
  Collaborator = 'collaborator',
  /** funding-source */
  FundingSource = 'funding-source',
  /** general-contact */
  GeneralContact = 'general-contact',
  /** recruitment-contact */
  RecruitmentContact = 'recruitment-contact',
  /** sub-investigator */
  SubInvestigator = 'sub-investigator',
  /** study-director */
  StudyDirector = 'study-director',
  /** study-chair */
  StudyChair = 'study-chair',
  /** Institutional Review Board */
  Irb = 'irb',
}

export const ResearchStudyPartyRoleValues = ['sponsor', 'lead-sponsor', 'sponsor-investigator', 'primary-investigator', 'collaborator', 'funding-source', 'general-contact', 'recruitment-contact', 'sub-investigator', 'study-director', 'study-chair', 'irb'] as const;
