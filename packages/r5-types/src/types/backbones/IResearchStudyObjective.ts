import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ResearchStudyObjective Interface
 * 
 * A goal for the study
 * 
 *
 * @see https://hl7.org/fhir/R5/researchstudyobjective.html
 */
export interface IResearchStudyObjective extends IBackboneElement {
  /**
   * Label for the objective
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * primary | secondary | exploratory
   */
  type?: ICodeableConcept;

  /**
   * Description of the objective
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
