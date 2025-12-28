import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ValueSetScope Interface
 * 
 * Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description
 * 
 *
 * @see https://hl7.org/fhir/R5/valuesetscope.html
 */
export interface IValueSetScope extends IBackboneElement {
  /**
   * Criteria describing which concepts or codes should be included and why
   */
  inclusionCriteria?: string;
  /**
   * Extension for inclusionCriteria
   */
  _inclusionCriteria?: IElement;

  /**
   * Criteria describing which concepts or codes should be excluded and why
   */
  exclusionCriteria?: string;
  /**
   * Extension for exclusionCriteria
   */
  _exclusionCriteria?: IElement;

}
