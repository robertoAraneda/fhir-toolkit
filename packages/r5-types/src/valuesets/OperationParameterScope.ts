/**
 * Operation Parameter Scope
 * 
 * Indicates that a parameter applies when the operation is being invoked at the specified level
 *
 * @see http://hl7.org/fhir/ValueSet/operation-parameter-scope
 */

export type OperationParameterScopeType = 'instance' | 'type' | 'system';

export enum OperationParameterScopeEnum {
  /** Instance */
  Instance = 'instance',
  /** Type */
  Type = 'type',
  /** System */
  System = 'system',
}

export const OperationParameterScopeValues = ['instance', 'type', 'system'] as const;
