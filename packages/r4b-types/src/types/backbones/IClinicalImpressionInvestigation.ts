import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ClinicalImpressionInvestigation Interface
 * 
 * One or more sets of investigations (signs, symptoms, etc.)
 * 
 *
 * @see https://hl7.org/fhir/R4B/clinicalimpressioninvestigation.html
 */
export interface IClinicalImpressionInvestigation extends IBackboneElement {
  /**
   * A name/code for the set
   */
  code: ICodeableConcept;

  /**
   * Record of a specific investigation
   */
  item?: IReference<'Observation' | 'QuestionnaireResponse' | 'FamilyMemberHistory' | 'DiagnosticReport' | 'RiskAssessment' | 'ImagingStudy' | 'Media'>[];

}
