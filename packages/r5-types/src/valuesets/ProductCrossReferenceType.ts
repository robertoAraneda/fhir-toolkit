/**
 * Product Cross Reference Type
 * 
 * Relationship to another Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-cross-reference-type
 */

export type ProductCrossReferenceTypeType = 'InvestigationalProduct' | 'VirtualProduct' | 'ActualProduct' | 'BrandedProduct' | 'GenericProduct' | 'Parallel';

export enum ProductCrossReferenceTypeEnum {
  /** Link to Investigational Product */
  Investigationalproduct = 'InvestigationalProduct',
  /** Link Actual to Virtual Product */
  Virtualproduct = 'VirtualProduct',
  /** Link Virtual to Actual Product */
  Actualproduct = 'ActualProduct',
  /** Link Generic to Branded Product */
  Brandedproduct = 'BrandedProduct',
  /** Link Branded to Generic Product */
  Genericproduct = 'GenericProduct',
  /** Link to Parallel Import Product */
  Parallel = 'Parallel',
}

export const ProductCrossReferenceTypeValues = ['InvestigationalProduct', 'VirtualProduct', 'ActualProduct', 'BrandedProduct', 'GenericProduct', 'Parallel'] as const;
