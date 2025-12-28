import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ResearchStudyLabel Interface
 * 
 * Additional names for the study
 * 
 *
 * @see https://hl7.org/fhir/R5/researchstudylabel.html
 */
export interface IResearchStudyLabel extends IBackboneElement {
  /**
   * primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid
   */
  type?: ICodeableConcept;

  /**
   * The name
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
