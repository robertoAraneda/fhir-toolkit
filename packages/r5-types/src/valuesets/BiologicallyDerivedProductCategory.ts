/**
 * Biologically Derived Product Category
 * 
 * Biologically Derived Product Category.
 *
 * @see http://hl7.org/fhir/ValueSet/product-category
 */

export type BiologicallyDerivedProductCategoryType = 'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent';

export enum BiologicallyDerivedProductCategoryEnum {
  /** Organ */
  Organ = 'organ',
  /** Tissue */
  Tissue = 'tissue',
  /** Fluid */
  Fluid = 'fluid',
  /** Cells */
  Cells = 'cells',
  /** BiologicalAgent */
  Biologicalagent = 'biologicalAgent',
}

export const BiologicallyDerivedProductCategoryValues = ['organ', 'tissue', 'fluid', 'cells', 'biologicalAgent'] as const;
