/**
 * ProductIntendedUse
 * 
 * The overall intended use of a product.
 *
 * @see http://hl7.org/fhir/ValueSet/product-intended-use
 */

export type ProductIntendedUseType = 'Prevention' | 'Treatment' | 'Alleviation' | 'Diagnosis' | 'Monitoring';

export enum ProductIntendedUseEnum {
  /** Prevention */
  Prevention = 'Prevention',
  /** Treatment */
  Treatment = 'Treatment',
  /** Alleviation */
  Alleviation = 'Alleviation',
  /** Diagnosis */
  Diagnosis = 'Diagnosis',
  /** Monitoring */
  Monitoring = 'Monitoring',
}

export const ProductIntendedUseValues = ['Prevention', 'Treatment', 'Alleviation', 'Diagnosis', 'Monitoring'] as const;
