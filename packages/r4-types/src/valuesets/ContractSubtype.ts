/**
 * Contract Subtype Codes
 * 
 * This value set includes sample Contract Subtype codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-subtype
 */

export type ContractSubtypeType = 'disclosure-ca' | 'disclosure-us';

export enum ContractSubtypeEnum {
  /** Disclosure-CA */
  DisclosureCa = 'disclosure-ca',
  /** Disclosure-US */
  DisclosureUs = 'disclosure-us',
}

export const ContractSubtypeValues = ['disclosure-ca', 'disclosure-us'] as const;
