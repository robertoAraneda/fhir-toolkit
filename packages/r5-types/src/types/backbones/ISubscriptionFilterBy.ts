import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SearchComparatorType, SearchModifierCodeType } from '../../valuesets/index.js';

/**
 * SubscriptionFilterBy Interface
 * 
 * Criteria for narrowing the subscription topic stream
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptionfilterby.html
 */
export interface ISubscriptionFilterBy extends IBackboneElement {
  /**
   * Allowed Resource (reference to definition) for this Subscription filter
   */
  resourceType?: string;
  /**
   * Extension for resourceType
   */
  _resourceType?: IElement;

  /**
   * Filter label defined in SubscriptionTopic
   */
  filterParameter: string;
  /**
   * Extension for filterParameter
   */
  _filterParameter?: IElement;

  /**
   * eq | ne | gt | lt | ge | le | sa | eb | ap
   */
  comparator?: SearchComparatorType;
  /**
   * Extension for comparator
   */
  _comparator?: IElement;

  /**
   * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   */
  modifier?: SearchModifierCodeType;
  /**
   * Extension for modifier
   */
  _modifier?: IElement;

  /**
   * Literal value or resource path
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
