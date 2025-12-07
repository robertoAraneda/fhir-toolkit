import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubscriptionTopicEventTrigger Interface
 * 
 * Event definitions the SubscriptionTopic
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptiontopiceventtrigger.html
 */
export interface ISubscriptionTopicEventTrigger extends IBackboneElement {
  /**
   * Text representation of the event trigger
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Event which can trigger a notification from the SubscriptionTopic
   */
  event: ICodeableConcept;

  /**
   * Data Type or Resource (reference to definition) for this trigger definition
   */
  resource: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

}
