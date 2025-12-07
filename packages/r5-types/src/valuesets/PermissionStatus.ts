/**
 * Permission Status
 * 
 * Codes identifying the lifecycle stage of a product.
 *
 * @see http://hl7.org/fhir/ValueSet/permission-status
 */

export type PermissionStatusType = 'active' | 'entered-in-error' | 'draft' | 'rejected';

export enum PermissionStatusEnum {
  /** Active */
  Active = 'active',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Draft */
  Draft = 'draft',
  /** Rejected */
  Rejected = 'rejected',
}

export const PermissionStatusValues = ['active', 'entered-in-error', 'draft', 'rejected'] as const;
