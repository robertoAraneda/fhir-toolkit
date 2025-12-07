/**
 * Contract Action Codes
 * 
 * This value set includes sample Contract Action codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-action
 */

export type ContractActionType = 'action-a' | 'action-b';

export enum ContractActionEnum {
  /** Action A */
  ActionA = 'action-a',
  /** Action B */
  ActionB = 'action-b',
}

export const ContractActionValues = ['action-a', 'action-b'] as const;
