/**
 * PayeeResourceType
 * 
 * The type of payee Resource.
 *
 * @see http://hl7.org/fhir/ValueSet/resource-type-link
 */

export type PayeeResourceTypeType = 'organization' | 'patient' | 'practitioner' | 'relatedperson';

export enum PayeeResourceTypeEnum {
  /** Organization */
  Organization = 'organization',
  /** Patient */
  Patient = 'patient',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** RelatedPerson */
  Relatedperson = 'relatedperson',
}

export const PayeeResourceTypeValues = ['organization', 'patient', 'practitioner', 'relatedperson'] as const;
