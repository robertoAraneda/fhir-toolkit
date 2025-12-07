/**
 * Charge Item Status
 * 
 * Codes identifying the lifecycle stage of a ChargeItem.
 *
 * @see http://hl7.org/fhir/ValueSet/chargeitem-status
 */

export type ChargeItemStatusType = 'planned' | 'billable' | 'not-billable' | 'aborted' | 'billed' | 'entered-in-error' | 'unknown';

export enum ChargeItemStatusEnum {
  /** Planned */
  Planned = 'planned',
  /** Billable */
  Billable = 'billable',
  /** Not billable */
  NotBillable = 'not-billable',
  /** Aborted */
  Aborted = 'aborted',
  /** Billed */
  Billed = 'billed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const ChargeItemStatusValues = ['planned', 'billable', 'not-billable', 'aborted', 'billed', 'entered-in-error', 'unknown'] as const;
