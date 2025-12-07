/**
 * Supply Request Status
 * 
 * Status of the supply request.
 *
 * @see http://hl7.org/fhir/ValueSet/supplyrequest-status
 */

export type SupplyRequestStatusType = 'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown';

export enum SupplyRequestStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** Suspended */
  Suspended = 'suspended',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const SupplyRequestStatusValues = ['draft', 'active', 'suspended', 'cancelled', 'completed', 'entered-in-error', 'unknown'] as const;
