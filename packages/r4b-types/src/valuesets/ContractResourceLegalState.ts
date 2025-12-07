/**
 * Contract Resource Legal State codes
 * 
 * This value set contract specific codes for status.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-legalstate
 */

export type ContractResourceLegalStateType = 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated';

export enum ContractResourceLegalStateEnum {
  /** Amended */
  Amended = 'amended',
  /** Appended */
  Appended = 'appended',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Disputed */
  Disputed = 'disputed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Executable */
  Executable = 'executable',
  /** Executed */
  Executed = 'executed',
  /** Negotiable */
  Negotiable = 'negotiable',
  /** Offered */
  Offered = 'offered',
  /** Policy */
  Policy = 'policy',
  /** Rejected */
  Rejected = 'rejected',
  /** Renewed */
  Renewed = 'renewed',
  /** Revoked */
  Revoked = 'revoked',
  /** Resolved */
  Resolved = 'resolved',
  /** Terminated */
  Terminated = 'terminated',
}

export const ContractResourceLegalStateValues = ['amended', 'appended', 'cancelled', 'disputed', 'entered-in-error', 'executable', 'executed', 'negotiable', 'offered', 'policy', 'rejected', 'renewed', 'revoked', 'resolved', 'terminated'] as const;
