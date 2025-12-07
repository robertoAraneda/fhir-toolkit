/**
 * Organization Affiliation Role
 * 
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 *
 * @see http://hl7.org/fhir/ValueSet/organization-role
 */

export type OrganizationAffiliationRoleType = 'provider' | 'agency' | 'research' | 'payer' | 'diagnostics' | 'supplier' | 'HIE/HIO' | 'member';

export enum OrganizationAffiliationRoleEnum {
  /** Provider */
  Provider = 'provider',
  /** Agency */
  Agency = 'agency',
  /** Research */
  Research = 'research',
  /** Payer */
  Payer = 'payer',
  /** Diagnostics */
  Diagnostics = 'diagnostics',
  /** Supplier */
  Supplier = 'supplier',
  /** HIE/HIO */
  HieHio = 'HIE/HIO',
  /** Member */
  Member = 'member',
}

export const OrganizationAffiliationRoleValues = ['provider', 'agency', 'research', 'payer', 'diagnostics', 'supplier', 'HIE/HIO', 'member'] as const;
