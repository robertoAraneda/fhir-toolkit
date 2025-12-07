/**
 * Example Account Billing Statuses
 * 
 * Indicates whether the account is available to be used for billing purposes.
 *
 * @see http://hl7.org/fhir/ValueSet/account-billing-status
 */

export type AccountBillingStatusType = 'open' | 'carecomplete-notbilled' | 'billing' | 'closed-baddebt' | 'closed-voided' | 'closed-completed' | 'closed-combined';

export enum AccountBillingStatusEnum {
  /** Open */
  Open = 'open',
  /** CareComplete/Not Billed */
  CarecompleteNotbilled = 'carecomplete-notbilled',
  /** Billing */
  Billing = 'billing',
  /** Closed-Bad Debt */
  ClosedBaddebt = 'closed-baddebt',
  /** Closed-Voided */
  ClosedVoided = 'closed-voided',
  /** Closed-Completed */
  ClosedCompleted = 'closed-completed',
  /** Closed-Combined */
  ClosedCombined = 'closed-combined',
}

export const AccountBillingStatusValues = ['open', 'carecomplete-notbilled', 'billing', 'closed-baddebt', 'closed-voided', 'closed-completed', 'closed-combined'] as const;
