/**
 * Condition Precondition Type
 * 
 * Kind of precondition for the condition.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-precondition-type
 */

export type ConditionPreconditionTypeType = 'sensitive' | 'specific';

export enum ConditionPreconditionTypeEnum {
  /** Sensitive */
  Sensitive = 'sensitive',
  /** Specific */
  Specific = 'specific',
}

export const ConditionPreconditionTypeValues = ['sensitive', 'specific'] as const;
