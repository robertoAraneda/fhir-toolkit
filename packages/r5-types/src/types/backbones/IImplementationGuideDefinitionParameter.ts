import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * ImplementationGuideDefinitionParameter Interface
 * 
 * Defines how IG is built by tools
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguidedefinitionparameter.html
 */
export interface IImplementationGuideDefinitionParameter extends IBackboneElement {
  /**
   * Code that identifies parameter
   */
  code: ICoding;

  /**
   * Value for named type
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
