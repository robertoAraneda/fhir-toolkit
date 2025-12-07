/**
 * ProductConfidentiality
 * 
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-confidentiality
 */

export type ProductConfidentialityType = 'CommerciallySensitive' | 'NotCommerciallySensitive';

export enum ProductConfidentialityEnum {
  /** Commercially Sensitive */
  Commerciallysensitive = 'CommerciallySensitive',
  /** Not Commercially Sensitive */
  Notcommerciallysensitive = 'NotCommerciallySensitive',
}

export const ProductConfidentialityValues = ['CommerciallySensitive', 'NotCommerciallySensitive'] as const;
