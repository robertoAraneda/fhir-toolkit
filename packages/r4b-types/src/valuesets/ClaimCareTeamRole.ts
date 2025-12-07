/**
 * Claim Care Team Role Codes
 * 
 * This value set includes sample Claim Care Team Role codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-careteamrole
 */

export type ClaimCareTeamRoleType = 'primary' | 'assist' | 'supervisor' | 'other';

export enum ClaimCareTeamRoleEnum {
  /** Primary provider */
  Primary = 'primary',
  /** Assisting Provider */
  Assist = 'assist',
  /** Supervising Provider */
  Supervisor = 'supervisor',
  /** Other */
  Other = 'other',
}

export const ClaimCareTeamRoleValues = ['primary', 'assist', 'supervisor', 'other'] as const;
