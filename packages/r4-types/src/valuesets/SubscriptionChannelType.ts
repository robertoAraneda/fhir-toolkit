/**
 * SubscriptionChannelType
 * 
 * The type of method used to execute a subscription.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-channel-type
 */

export type SubscriptionChannelTypeType = 'rest-hook' | 'websocket' | 'email' | 'sms' | 'message';

export enum SubscriptionChannelTypeEnum {
  /** Rest Hook */
  RestHook = 'rest-hook',
  /** Websocket */
  Websocket = 'websocket',
  /** Email */
  Email = 'email',
  /** SMS */
  Sms = 'sms',
  /** Message */
  Message = 'message',
}

export const SubscriptionChannelTypeValues = ['rest-hook', 'websocket', 'email', 'sms', 'message'] as const;
