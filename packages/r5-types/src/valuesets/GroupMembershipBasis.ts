/**
 * Group Membership Basis
 * 
 * Basis for membership in a group
 *
 * @see http://hl7.org/fhir/ValueSet/group-membership-basis
 */

export type GroupMembershipBasisType = 'definitional' | 'enumerated';

export enum GroupMembershipBasisEnum {
  /** Definitional */
  Definitional = 'definitional',
  /** Enumerated */
  Enumerated = 'enumerated',
}

export const GroupMembershipBasisValues = ['definitional', 'enumerated'] as const;
