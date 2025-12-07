/**
 * Supply Type
 * 
 * This value sets refers to a Category of supply.
 *
 * @see http://hl7.org/fhir/ValueSet/supplyrequest-kind
 */

export type SupplyTypeType = 'central' | 'nonstock';

export enum SupplyTypeEnum {
  /** Central Supply */
  Central = 'central',
  /** Non-Stock */
  Nonstock = 'nonstock',
}

export const SupplyTypeValues = ['central', 'nonstock'] as const;
