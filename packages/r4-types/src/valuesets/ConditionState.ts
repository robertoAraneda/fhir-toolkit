/**
 * ConditionState
 * 
 * Enumeration indicating whether the condition is currently active, inactive, or has been resolved.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-state
 */

export type ConditionStateType = 'active' | 'inactive' | 'resolved';

export enum ConditionStateEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Resolved */
  Resolved = 'resolved',
}

export const ConditionStateValues = ['active', 'inactive', 'resolved'] as const;
