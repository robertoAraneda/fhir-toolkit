import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * ResearchStudyProgressStatus Interface
 * 
 * Status of study with time for that status
 * 
 *
 * @see https://hl7.org/fhir/R5/researchstudyprogressstatus.html
 */
export interface IResearchStudyProgressStatus extends IBackboneElement {
  /**
   * Label for status or state (e.g. recruitment status)
   */
  state: ICodeableConcept;

  /**
   * Actual if true else anticipated
   */
  actual?: boolean;
  /**
   * Extension for actual
   */
  _actual?: IElement;

  /**
   * Date range
   */
  period?: IPeriod;

}
