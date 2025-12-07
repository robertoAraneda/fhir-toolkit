import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SearchComparatorType, SearchModifierCodeType } from '../../valuesets/index.js';

/**
 * SubscriptionTopicCanFilterBy Interface
 * 
 * Properties by which a Subscription can filter notifications from the SubscriptionTopic
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptiontopiccanfilterby.html
 */
export interface ISubscriptionTopicCanFilterBy extends IBackboneElement {
  /**
   * Description of this filter parameter
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * URL of the triggering Resource that this filter applies to
   */
  resource?: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter
   */
  filterParameter: string;
  /**
   * Extension for filterParameter
   */
  _filterParameter?: IElement;

  /**
   * Canonical URL for a filterParameter definition
   */
  filterDefinition?: string;
  /**
   * Extension for filterDefinition
   */
  _filterDefinition?: IElement;

  /**
   * eq | ne | gt | lt | ge | le | sa | eb | ap
   */
  comparator?: SearchComparatorType[];
  /**
   * Extension for comparator
   */
  _comparator?: IElement;

  /**
   * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   */
  modifier?: SearchModifierCodeType[];
  /**
   * Extension for modifier
   */
  _modifier?: IElement;

}
