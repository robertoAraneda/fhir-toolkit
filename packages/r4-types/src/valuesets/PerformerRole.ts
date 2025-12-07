/**
 * Performer Role Codes
 * 
 * This value set includes sample Performer Role codes.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-performer
 */

export type PerformerRoleType = 'consenter' | 'grantee' | 'grantor' | 'delegatee' | 'delegator';

export enum PerformerRoleEnum {
  /** Consenter */
  Consenter = 'consenter',
  /** Grantee */
  Grantee = 'grantee',
  /** Grantor */
  Grantor = 'grantor',
  /** Delegatee */
  Delegatee = 'delegatee',
  /** Delegator */
  Delegator = 'delegator',
}

export const PerformerRoleValues = ['consenter', 'grantee', 'grantor', 'delegatee', 'delegator'] as const;
