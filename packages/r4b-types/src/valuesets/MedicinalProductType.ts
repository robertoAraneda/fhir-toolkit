/**
 * MedicinalProductType
 * 
 * Overall defining type of this Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-type
 */

export type MedicinalProductTypeType = 'MedicinalProduct' | 'InvestigationalProduct';

export enum MedicinalProductTypeEnum {
  /** Medicinal Product */
  Medicinalproduct = 'MedicinalProduct',
  /** Investigational Medicinal Product */
  Investigationalproduct = 'InvestigationalProduct',
}

export const MedicinalProductTypeValues = ['MedicinalProduct', 'InvestigationalProduct'] as const;
