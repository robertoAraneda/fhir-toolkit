/**
 * AllergyIntolerance Clinical Status Codes
 * 
 * Preferred value set for AllergyIntolerance Clinical Status.
 *
 * @see http://hl7.org/fhir/ValueSet/allergyintolerance-clinical
 */

export type AllergyIntoleranceClinicalStatusType = 'active' | 'inactive' | 'resolved';

export enum AllergyIntoleranceClinicalStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Resolved */
  Resolved = 'resolved',
}

export const AllergyIntoleranceClinicalStatusValues = ['active', 'inactive', 'resolved'] as const;
