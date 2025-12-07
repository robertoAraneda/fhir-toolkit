/**
 * Subscription Payload Content
 * 
 * Codes to represent how much resource content to send in the notification payload.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-payload-content
 */

export type SubscriptionPayloadContentType = 'empty' | 'id-only' | 'full-resource';

export enum SubscriptionPayloadContentEnum {
  /** Empty */
  Empty = 'empty',
  /** Id-only */
  IdOnly = 'id-only',
  /** Full-resource */
  FullResource = 'full-resource',
}

export const SubscriptionPayloadContentValues = ['empty', 'id-only', 'full-resource'] as const;
