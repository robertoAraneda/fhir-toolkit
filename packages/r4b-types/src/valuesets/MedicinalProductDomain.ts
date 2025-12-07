/**
 * MedicinalProductDomain
 * 
 * Applicable domain for this product (e.g. human, veterinary)
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-domain
 */

export type MedicinalProductDomainType = 'Human' | 'Veterinary' | 'HumanAndVeterinary';

export enum MedicinalProductDomainEnum {
  /** Human use */
  Human = 'Human',
  /** Veterinary use */
  Veterinary = 'Veterinary',
  /** Human and Veterinary use */
  Humanandveterinary = 'HumanAndVeterinary',
}

export const MedicinalProductDomainValues = ['Human', 'Veterinary', 'HumanAndVeterinary'] as const;
