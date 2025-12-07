/**
 * SubscriptionTag
 * 
 * Tags to put on a resource after subscriptions have been sent.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-tag
 */

export type SubscriptionTagType = 'queued' | 'delivered';

export enum SubscriptionTagEnum {
  /** Queued */
  Queued = 'queued',
  /** Delivered */
  Delivered = 'delivered',
}

export const SubscriptionTagValues = ['queued', 'delivered'] as const;
