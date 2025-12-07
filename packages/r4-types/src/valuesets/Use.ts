/**
 * Use
 * 
 * The purpose of the Claim: predetermination, preauthorization, claim.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-use
 */

export type UseType = 'claim' | 'preauthorization' | 'predetermination';

export enum UseEnum {
  /** Claim */
  Claim = 'claim',
  /** Preauthorization */
  Preauthorization = 'preauthorization',
  /** Predetermination */
  Predetermination = 'predetermination',
}

export const UseValues = ['claim', 'preauthorization', 'predetermination'] as const;
