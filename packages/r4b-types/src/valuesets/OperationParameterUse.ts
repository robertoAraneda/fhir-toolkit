/**
 * OperationParameterUse
 * 
 * Whether an operation parameter is an input or an output parameter.
 *
 * @see http://hl7.org/fhir/ValueSet/operation-parameter-use
 */

export type OperationParameterUseType = 'in' | 'out';

export enum OperationParameterUseEnum {
  /** In */
  In = 'in',
  /** Out */
  Out = 'out',
}

export const OperationParameterUseValues = ['in', 'out'] as const;
