/**
 * Supply Item Type
 * 
 * This value sets refers to a specific supply item.
 *
 * @see http://hl7.org/fhir/ValueSet/supplydelivery-type
 */

export type SupplyItemTypeType = 'medication' | 'device';

export enum SupplyItemTypeEnum {
  /** Medication */
  Medication = 'medication',
  /** Device */
  Device = 'device',
}

export const SupplyItemTypeValues = ['medication', 'device'] as const;
