/**
 * SubscriptionStatusCodes
 * 
 * The status of a subscription.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-status
 */

export type SubscriptionStatusType = 'requested' | 'active' | 'error' | 'off';

export enum SubscriptionStatusEnum {
  /** Requested */
  Requested = 'requested',
  /** Active */
  Active = 'active',
  /** Error */
  Error = 'error',
  /** Off */
  Off = 'off',
}

export const SubscriptionStatusValues = ['requested', 'active', 'error', 'off'] as const;
