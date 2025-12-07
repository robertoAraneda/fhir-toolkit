/**
 * Coverage Class Codes
 * 
 * This value set includes Coverage Class codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-class
 */

export type CoverageClassType = 'group' | 'subgroup' | 'plan' | 'subplan' | 'class' | 'subclass' | 'sequence' | 'rxbin' | 'rxpcn' | 'rxid' | 'rxgroup';

export enum CoverageClassEnum {
  /** Group */
  Group = 'group',
  /** SubGroup */
  Subgroup = 'subgroup',
  /** Plan */
  Plan = 'plan',
  /** SubPlan */
  Subplan = 'subplan',
  /** Class */
  Class = 'class',
  /** SubClass */
  Subclass = 'subclass',
  /** Sequence */
  Sequence = 'sequence',
  /** RX BIN */
  Rxbin = 'rxbin',
  /** RX PCN */
  Rxpcn = 'rxpcn',
  /** RX Id */
  Rxid = 'rxid',
  /** RX Group */
  Rxgroup = 'rxgroup',
}

export const CoverageClassValues = ['group', 'subgroup', 'plan', 'subplan', 'class', 'subclass', 'sequence', 'rxbin', 'rxpcn', 'rxid', 'rxgroup'] as const;
