/**
 * Inventory Report Status
 * 
 * The status of the InventoryReport.
 *
 * @see http://hl7.org/fhir/ValueSet/inventoryreport-status
 */

export type InventoryReportStatusType = 'draft' | 'requested' | 'active' | 'entered-in-error';

export enum InventoryReportStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Requested */
  Requested = 'requested',
  /** Active */
  Active = 'active',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const InventoryReportStatusValues = ['draft', 'requested', 'active', 'entered-in-error'] as const;
