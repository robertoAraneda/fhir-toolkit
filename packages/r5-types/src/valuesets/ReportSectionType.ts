/**
 * Report Section Type
 * 
 * Evidence Report Section Type.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-report-section
 */

export type ReportSectionTypeType = 'Evidence' | 'Intervention-group-alone-Evidence' | 'Intervention-vs-Control-Evidence' | 'Control-group-alone-Evidence' | 'EvidenceVariable' | 'EvidenceVariable-observed' | 'EvidenceVariable-intended' | 'EvidenceVariable-population' | 'EvidenceVariable-exposure' | 'EvidenceVariable-outcome' | 'Efficacy-outcomes' | 'Harms-outcomes' | 'SampleSize' | 'References' | 'Assertion' | 'Reasons' | 'Certainty-of-Evidence' | 'Evidence-Classifier' | 'Warnings' | 'Text-Summary' | 'SummaryOfBodyOfEvidenceFindings' | 'SummaryOfIndividualStudyFindings' | 'Header' | 'Tables' | 'Table' | 'Row-Headers' | 'Column-Header' | 'Column-Headers';

export enum ReportSectionTypeEnum {
  /** Evidence Results */
  Evidence = 'Evidence',
  /** Evidence Results for the intervention exposure only */
  InterventionGroupAloneEvidence = 'Intervention-group-alone-Evidence',
  /** Evidence Results for comparison of Intervention and Control */
  InterventionVsControlEvidence = 'Intervention-vs-Control-Evidence',
  /** Evidence Results for the control exposure only */
  ControlGroupAloneEvidence = 'Control-group-alone-Evidence',
  /** Evidence Variables used */
  Evidencevariable = 'EvidenceVariable',
  /** Evidence Variables actually observed */
  EvidencevariableObserved = 'EvidenceVariable-observed',
  /** Evidence Variables intended for interpretation */
  EvidencevariableIntended = 'EvidenceVariable-intended',
  /** Evidence Variable in variable role Population */
  EvidencevariablePopulation = 'EvidenceVariable-population',
  /** Evidence Variable in variable role Exposure */
  EvidencevariableExposure = 'EvidenceVariable-exposure',
  /** Evidence Variable in variable role Outcome (MeasuredVariable) */
  EvidencevariableOutcome = 'EvidenceVariable-outcome',
  /** Efficacy-outcomes */
  EfficacyOutcomes = 'Efficacy-outcomes',
  /** Harms outcomes */
  HarmsOutcomes = 'Harms-outcomes',
  /** Sample Size */
  Samplesize = 'SampleSize',
  /** References */
  References = 'References',
  /** Assertion */
  Assertion = 'Assertion',
  /** Reasons */
  Reasons = 'Reasons',
  /** Certainty of Evidence */
  CertaintyOfEvidence = 'Certainty-of-Evidence',
  /** Evidence Classifier section */
  EvidenceClassifier = 'Evidence-Classifier',
  /** Warnings */
  Warnings = 'Warnings',
  /** Text Summary */
  TextSummary = 'Text-Summary',
  /** Summary of Body of Evidence Findings */
  Summaryofbodyofevidencefindings = 'SummaryOfBodyOfEvidenceFindings',
  /** Summary of Individual Study Findings */
  Summaryofindividualstudyfindings = 'SummaryOfIndividualStudyFindings',
  /** Header */
  Header = 'Header',
  /** Tables */
  Tables = 'Tables',
  /** Table */
  Table = 'Table',
  /** Row Headers */
  RowHeaders = 'Row-Headers',
  /** Column Header */
  ColumnHeader = 'Column-Header',
  /** Column Headers */
  ColumnHeaders = 'Column-Headers',
}

export const ReportSectionTypeValues = ['Evidence', 'Intervention-group-alone-Evidence', 'Intervention-vs-Control-Evidence', 'Control-group-alone-Evidence', 'EvidenceVariable', 'EvidenceVariable-observed', 'EvidenceVariable-intended', 'EvidenceVariable-population', 'EvidenceVariable-exposure', 'EvidenceVariable-outcome', 'Efficacy-outcomes', 'Harms-outcomes', 'SampleSize', 'References', 'Assertion', 'Reasons', 'Certainty-of-Evidence', 'Evidence-Classifier', 'Warnings', 'Text-Summary', 'SummaryOfBodyOfEvidenceFindings', 'SummaryOfIndividualStudyFindings', 'Header', 'Tables', 'Table', 'Row-Headers', 'Column-Header', 'Column-Headers'] as const;
