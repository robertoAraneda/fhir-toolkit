/**
 * Consent State
 * 
 * Indicates the state of the consent.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-state-codes
 */

export type ConsentStateType = 'draft' | 'active' | 'inactive' | 'not-done' | 'entered-in-error' | 'unknown';

export enum ConsentStateEnum {
  /** Pending */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Abandoned */
  NotDone = 'not-done',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const ConsentStateValues = ['draft', 'active', 'inactive', 'not-done', 'entered-in-error', 'unknown'] as const;
