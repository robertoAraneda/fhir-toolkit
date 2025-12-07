/**
 * EvidenceClassifier
 * 
 * Commonly used classifiers for evidence sets.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-classifier-code
 */

export type EvidenceClassifierType = 'COVID19Specific' | 'COVID19Relevant' | 'COVID19HumanResearch' | 'OriginalResearch' | 'ResearchSynthesis' | 'Guideline' | 'ResearchProtocol' | 'NotResearchNotGuideline' | 'Treatment' | 'PreventionAndControl' | 'Diagnosis' | 'PrognosisPrediction' | 'RatedAsYes' | 'RatedAsNo' | 'NotAssessed' | 'RatedAsRCT' | 'RatedAsControlledTrial' | 'RatedAsComparativeCohort' | 'RatedAsCaseControl' | 'RatedAsUncontrolledSeries' | 'RatedAsMixedMethods' | 'RatedAsOther' | 'RiskOfBias' | 'NoBlinding' | 'AllocConcealNotStated' | 'EarlyTrialTermination' | 'NoITT' | 'Preprint' | 'PreliminaryAnalysis' | 'BaselineImbalance' | 'SubgroupAnalysis';

export enum EvidenceClassifierEnum {
  /** COVID-19 specific article */
  Covid19specific = 'COVID19Specific',
  /** COVID-19 relevant (but not specific) article */
  Covid19relevant = 'COVID19Relevant',
  /** COVID-19 human data in population, exposure, or outcome */
  Covid19humanresearch = 'COVID19HumanResearch',
  /** Article includes original research */
  Originalresearch = 'OriginalResearch',
  /** Article includes synthesis of research */
  Researchsynthesis = 'ResearchSynthesis',
  /** Article includes guideline */
  Guideline = 'Guideline',
  /** Article provides protocol without results */
  Researchprotocol = 'ResearchProtocol',
  /** Article is neither research nor guideline */
  Notresearchnotguideline = 'NotResearchNotGuideline',
  /** Article about treatment */
  Treatment = 'Treatment',
  /** Article about prevention and control */
  Preventionandcontrol = 'PreventionAndControl',
  /** Article about diagnosis */
  Diagnosis = 'Diagnosis',
  /** Article about prognosis or prediction */
  Prognosisprediction = 'PrognosisPrediction',
  /** Rated as yes, affirmative, positive, present, or include */
  Ratedasyes = 'RatedAsYes',
  /** Rated as no, negative, absent, or exclude */
  Ratedasno = 'RatedAsNo',
  /** Not rated, not assessed */
  Notassessed = 'NotAssessed',
  /** classified as randomized controlled trial */
  Ratedasrct = 'RatedAsRCT',
  /** classified as nonrandomized controlled trial (experimental) */
  Ratedascontrolledtrial = 'RatedAsControlledTrial',
  /** classified as comparative cohort study (observational) */
  Ratedascomparativecohort = 'RatedAsComparativeCohort',
  /** classified as case-control study */
  Ratedascasecontrol = 'RatedAsCaseControl',
  /** classified as uncontrolled cohort (case series) */
  Ratedasuncontrolledseries = 'RatedAsUncontrolledSeries',
  /** classified as mixed-methods study */
  Ratedasmixedmethods = 'RatedAsMixedMethods',
  /** classified as other concept (not elsewhere classified) */
  Ratedasother = 'RatedAsOther',
  /** Risk of bias assessment */
  Riskofbias = 'RiskOfBias',
  /** No blinding */
  Noblinding = 'NoBlinding',
  /** Allocation concealment not stated */
  Allocconcealnotstated = 'AllocConcealNotStated',
  /** Early trial termination */
  Earlytrialtermination = 'EarlyTrialTermination',
  /** No intention-to-treat analysis */
  Noitt = 'NoITT',
  /** Preprint (not final publication) */
  Preprint = 'Preprint',
  /** Preliminary analysis */
  Preliminaryanalysis = 'PreliminaryAnalysis',
  /** Baseline imbalances */
  Baselineimbalance = 'BaselineImbalance',
  /** Subgroup analysis */
  Subgroupanalysis = 'SubgroupAnalysis',
}

export const EvidenceClassifierValues = ['COVID19Specific', 'COVID19Relevant', 'COVID19HumanResearch', 'OriginalResearch', 'ResearchSynthesis', 'Guideline', 'ResearchProtocol', 'NotResearchNotGuideline', 'Treatment', 'PreventionAndControl', 'Diagnosis', 'PrognosisPrediction', 'RatedAsYes', 'RatedAsNo', 'NotAssessed', 'RatedAsRCT', 'RatedAsControlledTrial', 'RatedAsComparativeCohort', 'RatedAsCaseControl', 'RatedAsUncontrolledSeries', 'RatedAsMixedMethods', 'RatedAsOther', 'RiskOfBias', 'NoBlinding', 'AllocConcealNotStated', 'EarlyTrialTermination', 'NoITT', 'Preprint', 'PreliminaryAnalysis', 'BaselineImbalance', 'SubgroupAnalysis'] as const;
