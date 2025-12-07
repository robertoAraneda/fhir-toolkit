/**
 * Contract Actor Role Codes
 * 
 * This value set includes sample Contract Actor Role codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-actorrole
 */

export type ContractActorRoleType = 'practitioner' | 'patient';

export enum ContractActorRoleEnum {
  /** Practitioner */
  Practitioner = 'practitioner',
  /** Patient */
  Patient = 'patient',
}

export const ContractActorRoleValues = ['practitioner', 'patient'] as const;
