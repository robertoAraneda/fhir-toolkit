import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ExplanationOfBenefitProcessNote Interface
 * 
 * Note concerning adjudication
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitprocessnote.html
 */
export interface IExplanationOfBenefitProcessNote extends IBackboneElement {
  /**
   * Note instance identifier
   */
  number?: number;
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * Note purpose
   */
  type?: ICodeableConcept;

  /**
   * Note explanatory text
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Language of the text
   */
  language?: ICodeableConcept;

}
