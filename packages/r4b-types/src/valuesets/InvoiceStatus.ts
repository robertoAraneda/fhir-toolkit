/**
 * InvoiceStatus
 * 
 * Codes identifying the lifecycle stage of an Invoice.
 *
 * @see http://hl7.org/fhir/ValueSet/invoice-status
 */

export type InvoiceStatusType = 'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error';

export enum InvoiceStatusEnum {
  /** draft */
  Draft = 'draft',
  /** issued */
  Issued = 'issued',
  /** balanced */
  Balanced = 'balanced',
  /** cancelled */
  Cancelled = 'cancelled',
  /** entered in error */
  EnteredInError = 'entered-in-error',
}

export const InvoiceStatusValues = ['draft', 'issued', 'balanced', 'cancelled', 'entered-in-error'] as const;
