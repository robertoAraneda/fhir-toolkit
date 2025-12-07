/**
 * Goal category
 * 
 * Example codes for grouping goals to use for filtering or presentation.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-category
 */

export type GoalCategoryType = 'dietary' | 'safety' | 'behavioral' | 'nursing' | 'physiotherapy';

export enum GoalCategoryEnum {
  /** Dietary */
  Dietary = 'dietary',
  /** Safety */
  Safety = 'safety',
  /** Behavioral */
  Behavioral = 'behavioral',
  /** Nursing */
  Nursing = 'nursing',
  /** Physiotherapy */
  Physiotherapy = 'physiotherapy',
}

export const GoalCategoryValues = ['dietary', 'safety', 'behavioral', 'nursing', 'physiotherapy'] as const;
