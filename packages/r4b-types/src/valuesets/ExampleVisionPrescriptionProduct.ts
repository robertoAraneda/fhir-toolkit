/**
 * Example Vision Prescription Product Codes
 * 
 * This value set includes a smattering of Prescription Product codes.
 *
 * @see http://hl7.org/fhir/ValueSet/vision-product
 */

export type ExampleVisionPrescriptionProductType = 'lens' | 'contact';

export enum ExampleVisionPrescriptionProductEnum {
  /** Lens */
  Lens = 'lens',
  /** Contact Lens */
  Contact = 'contact',
}

export const ExampleVisionPrescriptionProductValues = ['lens', 'contact'] as const;
