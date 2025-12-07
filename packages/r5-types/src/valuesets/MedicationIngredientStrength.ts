/**
 * Medication Ingredient Strength Codes
 * 
 * Medication Ingredient Strength Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-ingredientstrength
 */

export type MedicationIngredientStrengthType = 'qs' | 'trace';

export enum MedicationIngredientStrengthEnum {
  /** QS */
  Qs = 'qs',
  /** Trace */
  Trace = 'trace',
}

export const MedicationIngredientStrengthValues = ['qs', 'trace'] as const;
