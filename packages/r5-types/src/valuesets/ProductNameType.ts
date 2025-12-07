/**
 * Product Name Type
 * 
 * Type of a name for a Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-name-type
 */

export type ProductNameTypeType = 'BAN' | 'INN' | 'INNM' | 'pINN' | 'rINN';

export enum ProductNameTypeEnum {
  /** British Approved Name */
  Ban = 'BAN',
  /** International Non-Proprietary Name */
  Inn = 'INN',
  /** Modified International Non-Proprietary Name */
  Innm = 'INNM',
  /** Proposed International Non-Proprietary Name */
  Pinn = 'pINN',
  /** Recommended International Non-Proprietary Name */
  Rinn = 'rINN',
}

export const ProductNameTypeValues = ['BAN', 'INN', 'INNM', 'pINN', 'rINN'] as const;
