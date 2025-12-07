/**
 * IngredientManufacturerRole
 * 
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 *
 * @see http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role
 */

export type IngredientManufacturerRoleType = 'allowed' | 'possible' | 'actual';

export enum IngredientManufacturerRoleEnum {
  /** Manufacturer is specifically allowed for this ingredient */
  Allowed = 'allowed',
  /** Manufacturer is known to make this ingredient in general */
  Possible = 'possible',
  /** Manufacturer actually makes this particular ingredient */
  Actual = 'actual',
}

export const IngredientManufacturerRoleValues = ['allowed', 'possible', 'actual'] as const;
