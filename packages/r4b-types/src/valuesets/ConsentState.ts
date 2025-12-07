/**
 * ConsentState
 * 
 * Indicates the state of the consent.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-state-codes
 */

export type ConsentStateType = 'draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error';

export enum ConsentStateEnum {
  /** Pending */
  Draft = 'draft',
  /** Proposed */
  Proposed = 'proposed',
  /** Active */
  Active = 'active',
  /** Rejected */
  Rejected = 'rejected',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const ConsentStateValues = ['draft', 'proposed', 'active', 'rejected', 'inactive', 'entered-in-error'] as const;
