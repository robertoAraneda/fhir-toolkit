/**
 * Inventory Count Type
 * 
 * The type of count.
 *
 * @see http://hl7.org/fhir/ValueSet/inventoryreport-counttype
 */

export type InventoryCountTypeType = 'snapshot' | 'difference';

export enum InventoryCountTypeEnum {
  /** Snapshot */
  Snapshot = 'snapshot',
  /** Difference */
  Difference = 'difference',
}

export const InventoryCountTypeValues = ['snapshot', 'difference'] as const;
