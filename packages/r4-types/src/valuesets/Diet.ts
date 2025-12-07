/**
 * Diet
 * 
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-diet
 */

export type DietType = 'vegetarian' | 'dairy-free' | 'nut-free' | 'gluten-free' | 'vegan' | 'halal' | 'kosher';

export enum DietEnum {
  /** Vegetarian */
  Vegetarian = 'vegetarian',
  /** Dairy Free */
  DairyFree = 'dairy-free',
  /** Nut Free */
  NutFree = 'nut-free',
  /** Gluten Free */
  GlutenFree = 'gluten-free',
  /** Vegan */
  Vegan = 'vegan',
  /** Halal */
  Halal = 'halal',
  /** Kosher */
  Kosher = 'kosher',
}

export const DietValues = ['vegetarian', 'dairy-free', 'nut-free', 'gluten-free', 'vegan', 'halal', 'kosher'] as const;
