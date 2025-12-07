/**
 * Care Team category
 * 
 * Indicates the type of care team.
 *
 * @see http://hl7.org/fhir/ValueSet/care-team-category
 */

export type CareTeamCategoryType = 'LA27975-4' | 'LA27976-2' | 'LA27977-0' | 'LA27978-8' | 'LA28865-6' | 'LA28866-4' | 'LA27980-4' | 'LA28867-2';

export enum CareTeamCategoryEnum {
  /** Event-focused care team */
  La279754 = 'LA27975-4',
  /** Encounter-focused care team */
  La279762 = 'LA27976-2',
  /** Episode of care-focused care team */
  La279770 = 'LA27977-0',
  /** Condition-focused care team */
  La279788 = 'LA27978-8',
  /** Longitudinal care-coordination focused care team */
  La288656 = 'LA28865-6',
  /** Home & Community Based Services (HCBS)-focused care team */
  La288664 = 'LA28866-4',
  /** Clinical research-focused care team */
  La279804 = 'LA27980-4',
  /** Public health-focused care team */
  La288672 = 'LA28867-2',
}

export const CareTeamCategoryValues = ['LA27975-4', 'LA27976-2', 'LA27977-0', 'LA27978-8', 'LA28865-6', 'LA28866-4', 'LA27980-4', 'LA28867-2'] as const;
