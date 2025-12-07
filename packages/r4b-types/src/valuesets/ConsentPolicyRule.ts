/**
 * Consent PolicyRule Codes
 * 
 * This value set includes sample Regulatory consent policy types from the US and other regions.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-policy
 */

export type ConsentPolicyRuleType = 'cric' | 'illinois-minor-procedure' | 'hipaa-auth' | 'hipaa-npp' | 'hipaa-restrictions' | 'hipaa-research' | 'hipaa-self-pay' | 'mdhhs-5515' | 'nyssipp' | 'va-10-0484' | 'va-10-0485' | 'va-10-5345' | 'va-10-5345a' | 'va-10-5345a-mhv' | 'va-10-10116' | 'va-21-4142' | 'ssa-827' | 'dch-3927' | 'squaxin' | 'nl-lsp' | 'at-elga' | 'nih-hipaa' | 'nci' | 'nih-grdr' | 'nih-527' | 'ga4gh';

export enum ConsentPolicyRuleEnum {
  /** Common Rule Informed Consent */
  Cric = 'cric',
  /** Illinois Consent by Minors to Medical Procedures */
  IllinoisMinorProcedure = 'illinois-minor-procedure',
  /** HIPAA Authorization */
  HipaaAuth = 'hipaa-auth',
  /** HIPAA Notice of Privacy Practices */
  HipaaNpp = 'hipaa-npp',
  /** HIPAA Restrictions */
  HipaaRestrictions = 'hipaa-restrictions',
  /** HIPAA Research Authorization */
  HipaaResearch = 'hipaa-research',
  /** HIPAA Self-Pay Restriction */
  HipaaSelfPay = 'hipaa-self-pay',
  /** Michigan MDHHS-5515 Consent to Share Behavioral Health Information for Care Coordination Purposes */
  Mdhhs5515 = 'mdhhs-5515',
  /** New York State Surgical and Invasive Procedure Protocol */
  Nyssipp = 'nyssipp',
  /** VA Form 10-0484 */
  Va100484 = 'va-10-0484',
  /** VA Form 10-0485 */
  Va100485 = 'va-10-0485',
  /** VA Form 10-5345 */
  Va105345 = 'va-10-5345',
  /** VA Form 10-5345a */
  Va105345a = 'va-10-5345a',
  /** VA Form 10-5345a-MHV */
  Va105345aMhv = 'va-10-5345a-mhv',
  /** VA Form 10-10-10116 */
  Va1010116 = 'va-10-10116',
  /** VA Form 21-4142 */
  Va214142 = 'va-21-4142',
  /** SSA Authorization to Disclose */
  Ssa827 = 'ssa-827',
  /** Michigan behavior and mental health consent */
  Dch3927 = 'dch-3927',
  /** Squaxin Indian behavioral health and HIPAA consent */
  Squaxin = 'squaxin',
  /** NL LSP Permission */
  NlLsp = 'nl-lsp',
  /** AT ELGA Opt-in Consent */
  AtElga = 'at-elga',
  /** HHS NIH HIPAA Research Authorization */
  NihHipaa = 'nih-hipaa',
  /** NCI Cancer Clinical Trial consent */
  Nci = 'nci',
  /** NIH Global Rare Disease Patient Registry and Data Repository consent */
  NihGrdr = 'nih-grdr',
  /** NIH Authorization for the Release of Medical Information */
  Nih527 = 'nih-527',
  /** Population origins and ancestry research consent */
  Ga4gh = 'ga4gh',
}

export const ConsentPolicyRuleValues = ['cric', 'illinois-minor-procedure', 'hipaa-auth', 'hipaa-npp', 'hipaa-restrictions', 'hipaa-research', 'hipaa-self-pay', 'mdhhs-5515', 'nyssipp', 'va-10-0484', 'va-10-0485', 'va-10-5345', 'va-10-5345a', 'va-10-5345a-mhv', 'va-10-10116', 'va-21-4142', 'ssa-827', 'dch-3927', 'squaxin', 'nl-lsp', 'at-elga', 'nih-hipaa', 'nci', 'nih-grdr', 'nih-527', 'ga4gh'] as const;
