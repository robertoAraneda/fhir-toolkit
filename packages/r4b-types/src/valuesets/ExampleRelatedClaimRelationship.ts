/**
 * Example Related Claim Relationship Codes
 * 
 * This value set includes sample Related Claim Relationship codes.
 *
 * @see http://hl7.org/fhir/ValueSet/related-claim-relationship
 */

export type ExampleRelatedClaimRelationshipType = 'prior' | 'associated';

export enum ExampleRelatedClaimRelationshipEnum {
  /** Prior Claim */
  Prior = 'prior',
  /** Associated Claim */
  Associated = 'associated',
}

export const ExampleRelatedClaimRelationshipValues = ['prior', 'associated'] as const;
