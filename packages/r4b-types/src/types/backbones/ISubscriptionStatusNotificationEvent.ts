import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * SubscriptionStatusNotificationEvent Interface
 * 
 * Detailed information about any events relevant to this notification
 * 
 *
 * @see https://hl7.org/fhir/R4B/subscriptionstatusnotificationevent.html
 */
export interface ISubscriptionStatusNotificationEvent extends IBackboneElement {
  /**
   * Event number
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
   * The focus of this event
   */
  focus?: IReference<'Resource'>;

  /**
   * Additional context for this event
   */
  additionalContext?: IReference<'Resource'>[];

}
