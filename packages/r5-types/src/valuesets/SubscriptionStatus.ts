/**
 * Subscription Status
 * 
 * State values for FHIR Subscriptions.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-status
 */

export type SubscriptionStatusType = 'requested' | 'active' | 'error' | 'off' | 'entered-in-error';

export enum SubscriptionStatusEnum {
  /** Requested */
  Requested = 'requested',
  /** Active */
  Active = 'active',
  /** Error */
  Error = 'error',
  /** Off */
  Off = 'off',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const SubscriptionStatusValues = ['requested', 'active', 'error', 'off', 'entered-in-error'] as const;
