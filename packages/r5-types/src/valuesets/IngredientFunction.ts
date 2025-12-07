/**
 * Ingredient Function
 * 
 * A classification of the ingredient identifying its precise purpose(s) in the drug product (beyond e.g. active/inactive).
 *
 * @see http://hl7.org/fhir/ValueSet/ingredient-function
 */

export type IngredientFunctionType = 'Antioxidant' | 'AlkalizingAgent';

export enum IngredientFunctionEnum {
  /** Antioxidant */
  Antioxidant = 'Antioxidant',
  /** Alkalizing Agent */
  Alkalizingagent = 'AlkalizingAgent',
}

export const IngredientFunctionValues = ['Antioxidant', 'AlkalizingAgent'] as const;
