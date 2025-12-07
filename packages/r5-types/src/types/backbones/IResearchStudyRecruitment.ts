import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ResearchStudyRecruitment Interface
 * 
 * Target or actual group of participants enrolled in study
 * 
 *
 * @see https://hl7.org/fhir/R4/researchstudyrecruitment.html
 */
export interface IResearchStudyRecruitment extends IBackboneElement {
  /**
   * Estimated total number of participants to be enrolled
   */
  targetNumber?: number;
  /**
   * Extension for targetNumber
   */
  _targetNumber?: IElement;

  /**
   * Actual total number of participants enrolled in study
   */
  actualNumber?: number;
  /**
   * Extension for actualNumber
   */
  _actualNumber?: IElement;

  /**
   * Inclusion and exclusion criteria
   */
  eligibility?: IReference<'Group' | 'EvidenceVariable'>;

  /**
   * Group of participants who were enrolled in study
   */
  actualGroup?: IReference<'Group'>;

}
