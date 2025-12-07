import type { IBackboneElement, IElement } from '../../base/index.js';
import type { FilterOperatorType } from '../../valuesets/index.js';

/**
 * CodeSystemFilter Interface
 * 
 * Filter that can be used in a value set
 * 
 *
 * @see https://hl7.org/fhir/R4/codesystemfilter.html
 */
export interface ICodeSystemFilter extends IBackboneElement {
  /**
   * Code that identifies the filter
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * How or why the filter is used
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists
   */
  operator: FilterOperatorType[];
  /**
   * Extension for operator
   */
  _operator?: IElement;

  /**
   * What to use for the value
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
