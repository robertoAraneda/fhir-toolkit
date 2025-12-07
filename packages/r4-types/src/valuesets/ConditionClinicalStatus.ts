/**
 * Condition Clinical Status Codes
 * 
 * Preferred value set for Condition Clinical Status.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-clinical
 */

export type ConditionClinicalStatusType = 'active' | 'recurrence' | 'relapse' | 'inactive' | 'remission' | 'resolved';

export enum ConditionClinicalStatusEnum {
  /** Active */
  Active = 'active',
  /** Recurrence */
  Recurrence = 'recurrence',
  /** Relapse */
  Relapse = 'relapse',
  /** Inactive */
  Inactive = 'inactive',
  /** Remission */
  Remission = 'remission',
  /** Resolved */
  Resolved = 'resolved',
}

export const ConditionClinicalStatusValues = ['active', 'recurrence', 'relapse', 'inactive', 'remission', 'resolved'] as const;
