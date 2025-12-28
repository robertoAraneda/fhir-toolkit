import type { IBackboneElement, IElement } from '../../base/index.js';
import type { GuideParameterCodeType } from '../../valuesets/index.js';

/**
 * ImplementationGuideDefinitionParameter Interface
 * 
 * Defines how IG is built by tools
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitionparameter.html
 */
export interface IImplementationGuideDefinitionParameter extends IBackboneElement {
  /**
   * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
   */
  code: GuideParameterCodeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Value for named type
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
