/**
 * Nutrition Product Status
 * 
 * Codes identifying the lifecycle stage of a product.
 *
 * @see http://hl7.org/fhir/ValueSet/nutritionproduct-status
 */

export type NutritionProductStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum NutritionProductStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const NutritionProductStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
