/**
 * Price Component Type
 * 
 * Codes indicating the kind of the price component.
 *
 * @see http://hl7.org/fhir/ValueSet/price-component-type
 */

export type PriceComponentTypeType = 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';

export enum PriceComponentTypeEnum {
  /** base price */
  Base = 'base',
  /** surcharge */
  Surcharge = 'surcharge',
  /** deduction */
  Deduction = 'deduction',
  /** discount */
  Discount = 'discount',
  /** tax */
  Tax = 'tax',
  /** informational */
  Informational = 'informational',
}

export const PriceComponentTypeValues = ['base', 'surcharge', 'deduction', 'discount', 'tax', 'informational'] as const;
