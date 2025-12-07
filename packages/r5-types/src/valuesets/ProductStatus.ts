/**
 * ProductStatus
 * 
 * Codes identifying the lifecycle stage of a product.
 *
 * @see http://hl7.org/fhir/ValueSet/product-status
 */

export type ProductStatusType = 'active' | 'entered-in-error';

export enum ProductStatusEnum {
  /** Active */
  Active = 'active',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const ProductStatusValues = ['active', 'entered-in-error'] as const;
