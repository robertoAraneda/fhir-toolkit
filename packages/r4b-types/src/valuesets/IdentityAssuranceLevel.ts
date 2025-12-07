/**
 * IdentityAssuranceLevel
 * 
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 *
 * @see http://hl7.org/fhir/ValueSet/identity-assuranceLevel
 */

export type IdentityAssuranceLevelType = 'level1' | 'level2' | 'level3' | 'level4';

export enum IdentityAssuranceLevelEnum {
  /** Level 1 */
  Level1 = 'level1',
  /** Level 2 */
  Level2 = 'level2',
  /** Level 3 */
  Level3 = 'level3',
  /** Level 4 */
  Level4 = 'level4',
}

export const IdentityAssuranceLevelValues = ['level1', 'level2', 'level3', 'level4'] as const;
