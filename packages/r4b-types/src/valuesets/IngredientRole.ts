/**
 * IngredientRole
 * 
 * A classification of the ingredient identifying its purpose within the product.
 *
 * @see http://hl7.org/fhir/ValueSet/ingredient-role
 */

export type IngredientRoleType = '100000072072' | '100000072073' | '100000072082' | '100000136065' | '100000136066' | '100000136178' | '100000136179' | '100000136561' | '200000003427';

export enum IngredientRoleEnum {
  /** Active */
  _100000072072 = '100000072072',
  /** Adjuvant */
  _100000072073 = '100000072073',
  /** Excipient */
  _100000072082 = '100000072082',
  /** Starting material for excipient */
  _100000136065 = '100000136065',
  /** Solvent / Diluent */
  _100000136066 = '100000136066',
  /** Raw materials used in the manufacture of the product */
  _100000136178 = '100000136178',
  /** Starting material for active substance */
  _100000136179 = '100000136179',
  /** Overage */
  _100000136561 = '100000136561',
  /** bioenhancer */
  _200000003427 = '200000003427',
}

export const IngredientRoleValues = ['100000072072', '100000072073', '100000072082', '100000136065', '100000136066', '100000136178', '100000136179', '100000136561', '200000003427'] as const;
