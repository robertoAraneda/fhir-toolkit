/**
 * ClaimPayeeResourceType
 * 
 * The type of Claim payee Resource.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-payee-resource-type
 */

export type ClaimPayeeResourceTypeType = 'organization' | 'patient' | 'practitioner' | 'relatedperson';

export enum ClaimPayeeResourceTypeEnum {
  /** Organization */
  Organization = 'organization',
  /** Patient */
  Patient = 'patient',
  /** Practitioner */
  Practitioner = 'practitioner',
  /** RelatedPerson */
  Relatedperson = 'relatedperson',
}

export const ClaimPayeeResourceTypeValues = ['organization', 'patient', 'practitioner', 'relatedperson'] as const;
