/**
 * SubstanceNameDomain
 * 
 * The use context of a substance name for example if there is a different name when used as a drug active ingredient as opposed to a food colour additive.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-name-domain
 */

export type SubstanceNameDomainType = 'ActiveIngredient' | 'FoodColorAdditive';

export enum SubstanceNameDomainEnum {
  /** Active Ingredient */
  Activeingredient = 'ActiveIngredient',
  /** Food Color Additive */
  Foodcoloradditive = 'FoodColorAdditive',
}

export const SubstanceNameDomainValues = ['ActiveIngredient', 'FoodColorAdditive'] as const;
