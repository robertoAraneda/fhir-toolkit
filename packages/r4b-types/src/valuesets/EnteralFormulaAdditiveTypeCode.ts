/**
 * Enteral Formula Additive Type Code
 * 
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/entformula-additive
 */

export type EnteralFormulaAdditiveTypeCodeType = 'lipid' | 'protein' | 'carbohydrate' | 'fiber' | 'water';

export enum EnteralFormulaAdditiveTypeCodeEnum {
  /** Lipid */
  Lipid = 'lipid',
  /** Protein */
  Protein = 'protein',
  /** Carbohydrate */
  Carbohydrate = 'carbohydrate',
  /** Fiber */
  Fiber = 'fiber',
  /** Water */
  Water = 'water',
}

export const EnteralFormulaAdditiveTypeCodeValues = ['lipid', 'protein', 'carbohydrate', 'fiber', 'water'] as const;
