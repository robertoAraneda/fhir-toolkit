/**
 * RequestStatus
 * 
 * Codes identifying the lifecycle stage of a request.
 *
 * @see http://hl7.org/fhir/ValueSet/request-status
 */

export type RequestStatusType = 'draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown';

export enum RequestStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** On Hold */
  OnHold = 'on-hold',
  /** Revoked */
  Revoked = 'revoked',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const RequestStatusValues = ['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'] as const;
