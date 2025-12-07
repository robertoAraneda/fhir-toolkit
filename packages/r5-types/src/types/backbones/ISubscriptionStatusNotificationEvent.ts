import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * SubscriptionStatusNotificationEvent Interface
 * 
 * Detailed information about any events relevant to this notification
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptionstatusnotificationevent.html
 */
export interface ISubscriptionStatusNotificationEvent extends IBackboneElement {
  /**
   * Sequencing index of this event
   */
  eventNumber: string;
  /**
   * Extension for eventNumber
   */
  _eventNumber?: IElement;

  /**
   * The instant this event occurred
   */
  timestamp?: string;
  /**
   * Extension for timestamp
   */
  _timestamp?: IElement;

  /**
   * Reference to the primary resource or information of this event
   */
  focus?: IReference<'Resource'>;

  /**
   * References related to the focus resource and/or context of this event
   */
  additionalContext?: IReference<'Resource'>[];

}
