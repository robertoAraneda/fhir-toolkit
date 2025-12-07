import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ISubscriptionTopicResourceTriggerQueryCriteria } from './ISubscriptionTopicResourceTriggerQueryCriteria.js';
import type { InteractionTriggerType } from '../../valuesets/index.js';

/**
 * SubscriptionTopicResourceTrigger Interface
 * 
 * Definition of a resource-based trigger for the subscription topic
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptiontopicresourcetrigger.html
 */
export interface ISubscriptionTopicResourceTrigger extends IBackboneElement {
  /**
   * Text representation of the resource trigger
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Data Type or Resource (reference to definition) for this trigger definition
   */
  resource: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * create | update | delete
   */
  supportedInteraction?: InteractionTriggerType[];
  /**
   * Extension for supportedInteraction
   */
  _supportedInteraction?: IElement;

  /**
   * Query based trigger rule
   */
  queryCriteria?: ISubscriptionTopicResourceTriggerQueryCriteria;

  /**
   * FHIRPath based trigger rule
   */
  fhirPathCriteria?: string;
  /**
   * Extension for fhirPathCriteria
   */
  _fhirPathCriteria?: IElement;

}
