/**
 * AccountStatus
 * 
 * Indicates whether the account is available to be used.
 *
 * @see http://hl7.org/fhir/ValueSet/account-status
 */

export type AccountStatusType = 'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown';

export enum AccountStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in error */
  EnteredInError = 'entered-in-error',
  /** On Hold */
  OnHold = 'on-hold',
  /** Unknown */
  Unknown = 'unknown',
}

export const AccountStatusValues = ['active', 'inactive', 'entered-in-error', 'on-hold', 'unknown'] as const;
