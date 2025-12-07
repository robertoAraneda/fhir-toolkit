/**
 * Account Relationship
 * 
 * Relationship between accounts
 *
 * @see http://hl7.org/fhir/ValueSet/account-relationship
 */

export type AccountRelationshipType = 'parent' | 'guarantor';

export enum AccountRelationshipEnum {
  /** Parent */
  Parent = 'parent',
  /** Guarantor */
  Guarantor = 'guarantor',
}

export const AccountRelationshipValues = ['parent', 'guarantor'] as const;
