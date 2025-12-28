import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ConditionStage Interface
 * 
 * Stage/grade, usually assessed formally
 * 
 *
 * @see https://hl7.org/fhir/R4B/conditionstage.html
 */
export interface IConditionStage extends IBackboneElement {
  /**
   * Simple summary (disease specific)
   */
  summary?: ICodeableConcept;

  /**
   * Formal record of assessment
   */
  assessment?: IReference<'ClinicalImpression' | 'DiagnosticReport' | 'Observation'>[];

  /**
   * Kind of staging
   */
  type?: ICodeableConcept;

}
