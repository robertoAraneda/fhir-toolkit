/**
 * Supply Delivery Supply Item Type
 * 
 * This value sets refers to a specific supply item.
 *
 * @see http://hl7.org/fhir/ValueSet/supplydelivery-supplyitemtype
 */

export type SupplyDeliverySupplyItemTypeType = 'medication' | 'device' | 'biologicallyderivedproduct';

export enum SupplyDeliverySupplyItemTypeEnum {
  /** Medication */
  Medication = 'medication',
  /** Device */
  Device = 'device',
  /** Biologically Derived Product */
  Biologicallyderivedproduct = 'biologicallyderivedproduct',
}

export const SupplyDeliverySupplyItemTypeValues = ['medication', 'device', 'biologicallyderivedproduct'] as const;
