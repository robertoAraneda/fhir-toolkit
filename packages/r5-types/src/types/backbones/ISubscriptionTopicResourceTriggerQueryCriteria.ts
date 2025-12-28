import type { IBackboneElement, IElement } from '../../base/index.js';
import type { CriteriaNotExistsBehaviorType } from '../../valuesets/index.js';

/**
 * SubscriptionTopicResourceTriggerQueryCriteria Interface
 * 
 * Query based trigger rule
 * 
 *
 * @see https://hl7.org/fhir/R5/subscriptiontopicresourcetriggerquerycriteria.html
 */
export interface ISubscriptionTopicResourceTriggerQueryCriteria extends IBackboneElement {
  /**
   * Rule applied to previous resource state
   */
  previous?: string;
  /**
   * Extension for previous
   */
  _previous?: IElement;

  /**
   * test-passes | test-fails
   */
  resultForCreate?: CriteriaNotExistsBehaviorType;
  /**
   * Extension for resultForCreate
   */
  _resultForCreate?: IElement;

  /**
   * Rule applied to current resource state
   */
  current?: string;
  /**
   * Extension for current
   */
  _current?: IElement;

  /**
   * test-passes | test-fails
   */
  resultForDelete?: CriteriaNotExistsBehaviorType;
  /**
   * Extension for resultForDelete
   */
  _resultForDelete?: IElement;

  /**
   * Both must be true flag
   */
  requireBoth?: boolean;
  /**
   * Extension for requireBoth
   */
  _requireBoth?: IElement;

}
