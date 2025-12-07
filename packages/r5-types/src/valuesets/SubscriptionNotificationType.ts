/**
 * Subscription Notification Type
 * 
 * The type of notification represented by the status message.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-notification-type
 */

export type SubscriptionNotificationTypeType = 'handshake' | 'heartbeat' | 'event-notification' | 'query-status' | 'query-event';

export enum SubscriptionNotificationTypeEnum {
  /** Handshake */
  Handshake = 'handshake',
  /** Heartbeat */
  Heartbeat = 'heartbeat',
  /** Event Notification */
  EventNotification = 'event-notification',
  /** Query Status */
  QueryStatus = 'query-status',
  /** Query Event */
  QueryEvent = 'query-event',
}

export const SubscriptionNotificationTypeValues = ['handshake', 'heartbeat', 'event-notification', 'query-status', 'query-event'] as const;
