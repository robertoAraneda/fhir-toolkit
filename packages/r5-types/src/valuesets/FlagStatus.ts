/**
 * Flag Status
 * 
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 *
 * @see http://hl7.org/fhir/ValueSet/flag-status
 */

export type FlagStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum FlagStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const FlagStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
