/**
 * Study Design
 * 
 * This is a set of terms for study design characteristics.
 *
 * @see http://hl7.org/fhir/ValueSet/study-design
 */

export type StudyDesignType = 'SEVCO:01001' | 'SEVCO:01003' | 'SEVCO:01006' | 'SEVCO:01007' | 'SEVCO:01008' | 'SEVCO:01009' | 'SEVCO:01005' | 'SEVCO:01004' | 'SEVCO:01029' | 'SEVCO:01041' | 'SEVCO:01038' | 'SEVCO:01030' | 'SEVCO:01031' | 'SEVCO:01032' | 'SEVCO:01033' | 'SEVCO:01034' | 'SEVCO:01035' | 'SEVCO:01036' | 'SEVCO:01002' | 'SEVCO:01037' | 'SEVCO:01010' | 'SEVCO:01011' | 'SEVCO:01012' | 'SEVCO:01024' | 'SEVCO:01025' | 'SEVCO:01013' | 'SEVCO:01014' | 'SEVCO:01020' | 'SEVCO:01021' | 'SEVCO:01015' | 'SEVCO:01023' | 'SEVCO:01016' | 'SEVCO:01017' | 'SEVCO:01022' | 'SEVCO:01044' | 'SEVCO:01027' | 'SEVCO:01028' | 'SEVCO:01018' | 'SEVCO:01019' | 'SEVCO:01045' | 'SEVCO:01026' | 'SEVCO:01039' | 'SEVCO:01050' | 'SEVCO:01040' | 'SEVCO:01048' | 'SEVCO:01046' | 'SEVCO:01049' | 'SEVCO:01042' | 'SEVCO:01051' | 'SEVCO:01086' | 'SEVCO:01087' | 'SEVCO:01060' | 'SEVCO:01061' | 'SEVCO:01062' | 'SEVCO:01063' | 'SEVCO:01064' | 'SEVCO:01043' | 'SEVCO:01052' | 'SEVCO:01053' | 'SEVCO:01054' | 'SEVCO:01085' | 'SEVCO:01089' | 'SEVCO:01096' | 'SEVCO:01097' | 'SEVCO:01098' | 'SEVCO:01088' | 'SEVCO:01091' | 'SEVCO:01090' | 'SEVCO:01092' | 'SEVCO:01093' | 'SEVCO:01094' | 'SEVCO:01095';

export enum StudyDesignEnum {
  /** Interventional research */
  Sevco01001 = 'SEVCO:01001',
  /** randomized assignment */
  Sevco01003 = 'SEVCO:01003',
  /** simple randomization */
  Sevco01006 = 'SEVCO:01006',
  /** stratified randomization */
  Sevco01007 = 'SEVCO:01007',
  /** block randomization */
  Sevco01008 = 'SEVCO:01008',
  /** adaptive randomization */
  Sevco01009 = 'SEVCO:01009',
  /** Non-randomized assignment */
  Sevco01005 = 'SEVCO:01005',
  /** Quasi-Randomized assignment */
  Sevco01004 = 'SEVCO:01004',
  /** Clinical trial */
  Sevco01029 = 'SEVCO:01029',
  /** Pragmatic clinical trial */
  Sevco01041 = 'SEVCO:01041',
  /** Expanded Access study */
  Sevco01038 = 'SEVCO:01038',
  /** Phase 1 trial */
  Sevco01030 = 'SEVCO:01030',
  /** Exploratory investigational new drug study */
  Sevco01031 = 'SEVCO:01031',
  /** Phase 1/Phase 2 trial */
  Sevco01032 = 'SEVCO:01032',
  /** Phase 2 trial */
  Sevco01033 = 'SEVCO:01033',
  /** Phase 2/Phase 3 trial */
  Sevco01034 = 'SEVCO:01034',
  /** Phase 3 Trial */
  Sevco01035 = 'SEVCO:01035',
  /** Post-marketing study */
  Sevco01036 = 'SEVCO:01036',
  /** Observational research */
  Sevco01002 = 'SEVCO:01002',
  /** Post-Marketing Surveillance study */
  Sevco01037 = 'SEVCO:01037',
  /** Comparative study design */
  Sevco01010 = 'SEVCO:01010',
  /** Parallel cohort design */
  Sevco01011 = 'SEVCO:01011',
  /** Crossover cohort design */
  Sevco01012 = 'SEVCO:01012',
  /** Controlled crossover cohort design */
  Sevco01024 = 'SEVCO:01024',
  /** Single-arm crossover design */
  Sevco01025 = 'SEVCO:01025',
  /** Case control design */
  Sevco01013 = 'SEVCO:01013',
  /** Matching for comparison */
  Sevco01014 = 'SEVCO:01014',
  /** Family study design */
  Sevco01020 = 'SEVCO:01020',
  /** Twin study design */
  Sevco01021 = 'SEVCO:01021',
  /** Cluster as unit of allocation */
  Sevco01015 = 'SEVCO:01015',
  /** Non-comparative study design */
  Sevco01023 = 'SEVCO:01023',
  /** Uncontrolled cohort design */
  Sevco01016 = 'SEVCO:01016',
  /** Case report */
  Sevco01017 = 'SEVCO:01017',
  /** Population-based design */
  Sevco01022 = 'SEVCO:01022',
  /** Ecological design */
  Sevco01044 = 'SEVCO:01044',
  /** Cross sectional data collection  */
  Sevco01027 = 'SEVCO:01027',
  /** Longitudinal data collection */
  Sevco01028 = 'SEVCO:01028',
  /** Time series design */
  Sevco01018 = 'SEVCO:01018',
  /** Before and after comparison */
  Sevco01019 = 'SEVCO:01019',
  /** Primary data collection */
  Sevco01045 = 'SEVCO:01045',
  /** Real world data collection */
  Sevco01026 = 'SEVCO:01026',
  /** Real world data collection from healthcare records */
  Sevco01039 = 'SEVCO:01039',
  /** Real world data collection from personal health records */
  Sevco01050 = 'SEVCO:01050',
  /** Real world data collection from healthcare financing records */
  Sevco01040 = 'SEVCO:01040',
  /** Real world data collection from testing procedures */
  Sevco01048 = 'SEVCO:01048',
  /** Real world data collection from monitoring procedures */
  Sevco01046 = 'SEVCO:01046',
  /** Secondary data collection from prior research */
  Sevco01049 = 'SEVCO:01049',
  /** Secondary data collection from a registry */
  Sevco01042 = 'SEVCO:01042',
  /** Multisite data collection */
  Sevco01051 = 'SEVCO:01051',
  /** Quantitative analysis */
  Sevco01086 = 'SEVCO:01086',
  /** Qualitative analysis */
  Sevco01087 = 'SEVCO:01087',
  /** Blinding of study participants */
  Sevco01060 = 'SEVCO:01060',
  /** Blinding of intervention providers */
  Sevco01061 = 'SEVCO:01061',
  /** Blinding of outcome assessors */
  Sevco01062 = 'SEVCO:01062',
  /** Blinding of data analysts */
  Sevco01063 = 'SEVCO:01063',
  /** Allocation concealment */
  Sevco01064 = 'SEVCO:01064',
  /** Multicentric */
  Sevco01043 = 'SEVCO:01043',
  /** Includes patient-reported outcome */
  Sevco01052 = 'SEVCO:01052',
  /** Includes patient-centered outcome */
  Sevco01053 = 'SEVCO:01053',
  /** Includes disease-oriented outcome */
  Sevco01054 = 'SEVCO:01054',
  /** Includes process measure */
  Sevco01085 = 'SEVCO:01085',
  /** Study Goal */
  Sevco01089 = 'SEVCO:01089',
  /** Evaluation Goal */
  Sevco01096 = 'SEVCO:01096',
  /** Derivation Goal */
  Sevco01097 = 'SEVCO:01097',
  /** Validation Goal */
  Sevco01098 = 'SEVCO:01098',
  /** Comparison Goal */
  Sevco01088 = 'SEVCO:01088',
  /** Comparative Effectiveness Goal */
  Sevco01091 = 'SEVCO:01091',
  /** Comparative Efficacy Goal */
  Sevco01090 = 'SEVCO:01090',
  /** Comparative Safety Goal */
  Sevco01092 = 'SEVCO:01092',
  /** Equivalence Goal */
  Sevco01093 = 'SEVCO:01093',
  /** Non-inferiority Goal */
  Sevco01094 = 'SEVCO:01094',
  /** Superiority Goal */
  Sevco01095 = 'SEVCO:01095',
}

export const StudyDesignValues = ['SEVCO:01001', 'SEVCO:01003', 'SEVCO:01006', 'SEVCO:01007', 'SEVCO:01008', 'SEVCO:01009', 'SEVCO:01005', 'SEVCO:01004', 'SEVCO:01029', 'SEVCO:01041', 'SEVCO:01038', 'SEVCO:01030', 'SEVCO:01031', 'SEVCO:01032', 'SEVCO:01033', 'SEVCO:01034', 'SEVCO:01035', 'SEVCO:01036', 'SEVCO:01002', 'SEVCO:01037', 'SEVCO:01010', 'SEVCO:01011', 'SEVCO:01012', 'SEVCO:01024', 'SEVCO:01025', 'SEVCO:01013', 'SEVCO:01014', 'SEVCO:01020', 'SEVCO:01021', 'SEVCO:01015', 'SEVCO:01023', 'SEVCO:01016', 'SEVCO:01017', 'SEVCO:01022', 'SEVCO:01044', 'SEVCO:01027', 'SEVCO:01028', 'SEVCO:01018', 'SEVCO:01019', 'SEVCO:01045', 'SEVCO:01026', 'SEVCO:01039', 'SEVCO:01050', 'SEVCO:01040', 'SEVCO:01048', 'SEVCO:01046', 'SEVCO:01049', 'SEVCO:01042', 'SEVCO:01051', 'SEVCO:01086', 'SEVCO:01087', 'SEVCO:01060', 'SEVCO:01061', 'SEVCO:01062', 'SEVCO:01063', 'SEVCO:01064', 'SEVCO:01043', 'SEVCO:01052', 'SEVCO:01053', 'SEVCO:01054', 'SEVCO:01085', 'SEVCO:01089', 'SEVCO:01096', 'SEVCO:01097', 'SEVCO:01098', 'SEVCO:01088', 'SEVCO:01091', 'SEVCO:01090', 'SEVCO:01092', 'SEVCO:01093', 'SEVCO:01094', 'SEVCO:01095'] as const;
