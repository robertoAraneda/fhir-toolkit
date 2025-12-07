/**
 * InvoicePriceComponentType
 * 
 * Codes indicating the kind of the price component.
 *
 * @see http://hl7.org/fhir/ValueSet/invoice-priceComponentType
 */

export type InvoicePriceComponentTypeType = 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';

export enum InvoicePriceComponentTypeEnum {
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

export const InvoicePriceComponentTypeValues = ['base', 'surcharge', 'deduction', 'discount', 'tax', 'informational'] as const;
