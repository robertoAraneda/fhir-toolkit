import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ResearchStudyArm Interface
 * 
 * Defined path through the study for a subject
 * 
 *
 * @see https://hl7.org/fhir/R4B/researchstudyarm.html
 */
export interface IResearchStudyArm extends IBackboneElement {
  /**
   * Label for study arm
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Categorization of study arm
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

}
