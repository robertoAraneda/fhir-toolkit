/**
 * MedicationDispense Administration Location Codes
 * 
 * MedicationDispense Administration Location Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationdispense-admin-location
 */

export type MedicationDispenseAdministrationLocationType = 'inpatient' | 'outpatient' | 'community';

export enum MedicationDispenseAdministrationLocationEnum {
  /** Inpatient */
  Inpatient = 'inpatient',
  /** Outpatient */
  Outpatient = 'outpatient',
  /** Community */
  Community = 'community',
}

export const MedicationDispenseAdministrationLocationValues = ['inpatient', 'outpatient', 'community'] as const;
