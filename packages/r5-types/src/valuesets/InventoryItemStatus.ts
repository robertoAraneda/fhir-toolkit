/**
 * InventoryItem Name Typess
 * 
 * InventoryItem Name Types
 *
 * @see http://hl7.org/fhir/ValueSet/inventoryitem-nametype
 */

export type InventoryItemStatusType = 'trade-name' | 'alias' | 'original-name' | 'preferred';

export enum InventoryItemStatusEnum {
  /** Trade Name */
  TradeName = 'trade-name',
  /** Alias */
  Alias = 'alias',
  /** Original Name */
  OriginalName = 'original-name',
  /** Preferred */
  Preferred = 'preferred',
}

export const InventoryItemStatusValues = ['trade-name', 'alias', 'original-name', 'preferred'] as const;
