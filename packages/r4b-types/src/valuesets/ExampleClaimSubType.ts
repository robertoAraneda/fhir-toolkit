/**
 * Example Claim SubType Codes
 * 
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-subtype
 */

export type ExampleClaimSubTypeType = 'ortho' | 'emergency';

export enum ExampleClaimSubTypeEnum {
  /** Orthodontic Claim */
  Ortho = 'ortho',
  /** Emergency Claim */
  Emergency = 'emergency',
}

export const ExampleClaimSubTypeValues = ['ortho', 'emergency'] as const;
