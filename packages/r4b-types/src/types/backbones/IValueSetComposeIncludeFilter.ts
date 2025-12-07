import type { IBackboneElement, IElement } from '../../base/index.js';
import type { FilterOperatorType } from '../../valuesets/index.js';

/**
 * ValueSetComposeIncludeFilter Interface
 * 
 * Select codes/concepts by their properties (including relationships)
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludefilter.html
 */
export interface IValueSetComposeIncludeFilter extends IBackboneElement {
  /**
   * A property/filter defined by the code system
   */
  property: string;
  /**
   * Extension for property
   */
  _property?: IElement;

  /**
   * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
   */
  op: FilterOperatorType;
  /**
   * Extension for op
   */
  _op?: IElement;

  /**
   * Code from the system, or regex criteria, or boolean value for exists
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
