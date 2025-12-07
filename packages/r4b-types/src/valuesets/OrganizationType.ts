/**
 * OrganizationType
 * 
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 *
 * @see http://hl7.org/fhir/ValueSet/organization-type
 */

export type OrganizationTypeType = 'prov' | 'dept' | 'team' | 'govt' | 'ins' | 'pay' | 'edu' | 'reli' | 'crs' | 'cg' | 'bus' | 'other';

export enum OrganizationTypeEnum {
  /** Healthcare Provider */
  Prov = 'prov',
  /** Hospital Department */
  Dept = 'dept',
  /** Organizational team */
  Team = 'team',
  /** Government */
  Govt = 'govt',
  /** Insurance Company */
  Ins = 'ins',
  /** Payer */
  Pay = 'pay',
  /** Educational Institute */
  Edu = 'edu',
  /** Religious Institution */
  Reli = 'reli',
  /** Clinical Research Sponsor */
  Crs = 'crs',
  /** Community Group */
  Cg = 'cg',
  /** Non-Healthcare Business or Corporation */
  Bus = 'bus',
  /** Other */
  Other = 'other',
}

export const OrganizationTypeValues = ['prov', 'dept', 'team', 'govt', 'ins', 'pay', 'edu', 'reli', 'crs', 'cg', 'bus', 'other'] as const;
