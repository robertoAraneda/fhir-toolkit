import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ResearchStudyComparisonGroup Interface
 * 
 * Defined path through the study for a subject
 * 
 *
 * @see https://hl7.org/fhir/R4/researchstudycomparisongroup.html
 */
export interface IResearchStudyComparisonGroup extends IBackboneElement {
  /**
   * Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Label for study comparisonGroup
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Categorization of study comparisonGroup
   */
  type?: ICodeableConcept;

  /**
   * Short explanation of study path
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Interventions or exposures in this comparisonGroup or cohort
   */
  intendedExposure?: IReference<'EvidenceVariable'>[];

  /**
   * Group of participants who were enrolled in study comparisonGroup
   */
  observedGroup?: IReference<'Group'>;

}
