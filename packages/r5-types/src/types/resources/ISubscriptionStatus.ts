import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ISubscriptionStatusNotificationEvent } from '../backbones/ISubscriptionStatusNotificationEvent.js';
import type { SubscriptionNotificationTypeType, SubscriptionStatusType } from '../../valuesets/index.js';

/**
 * SubscriptionStatus Interface
 * 
 * The SubscriptionStatus resource describes the state of a Subscription during notifications.
 * 
 *
 * @see https://hl7.org/fhir/R4/subscriptionstatus.html
 */
export interface ISubscriptionStatus extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubscriptionStatus';

  /**
   * requested | active | error | off | entered-in-error
   */
  status?: SubscriptionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * handshake | heartbeat | event-notification | query-status | query-event
   */
  type: SubscriptionNotificationTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Events since the Subscription was created
   */
  eventsSinceSubscriptionStart?: string;
  /**
   * Extension for eventsSinceSubscriptionStart
   */
  _eventsSinceSubscriptionStart?: IElement;

  /**
   * Detailed information about any events relevant to this notification
   */
  notificationEvent?: ISubscriptionStatusNotificationEvent[];

  /**
   * Reference to the Subscription responsible for this notification
   */
  subscription: IReference<'Subscription'>;

  /**
   * Reference to the SubscriptionTopic this notification relates to
   */
  topic?: string;
  /**
   * Extension for topic
   */
  _topic?: IElement;

  /**
   * List of errors on the subscription
   */
  error?: ICodeableConcept[];

}
