/**
 * Example Pharmacy Service Codes
 * 
 * This value set includes a smattering of Pharmacy Service codes.
 *
 * @see http://hl7.org/fhir/ValueSet/service-pharmacy
 */

export type ExamplePharmacyServiceType = 'smokecess' | 'flushot' | 'drugcost' | 'markup' | 'dispensefee' | 'compoundfee';

export enum ExamplePharmacyServiceEnum {
  /** Smoking cessation */
  Smokecess = 'smokecess',
  /** Flu Shot */
  Flushot = 'flushot',
  /** Drug Cost */
  Drugcost = 'drugcost',
  /** Markup */
  Markup = 'markup',
  /** Dispense Fee */
  Dispensefee = 'dispensefee',
  /** Compounding Fee */
  Compoundfee = 'compoundfee',
}

export const ExamplePharmacyServiceValues = ['smokecess', 'flushot', 'drugcost', 'markup', 'dispensefee', 'compoundfee'] as const;
