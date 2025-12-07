/**
 * Financial Resource Status Codes
 * 
 * This value set includes Status codes.
 *
 * @see http://hl7.org/fhir/ValueSet/fm-status
 */

export type FinancialResourceStatusType = 'active' | 'cancelled' | 'draft' | 'entered-in-error';

export enum FinancialResourceStatusEnum {
  /** Active */
  Active = 'active',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Draft */
  Draft = 'draft',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const FinancialResourceStatusValues = ['active', 'cancelled', 'draft', 'entered-in-error'] as const;
