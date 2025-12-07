/**
 * Contract Resource Action Status codes
 * 
 * This value set contract specific codes for action status.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-actionstatus
 */

export type ContractResourceActionStatusType = 'complete';

export enum ContractResourceActionStatusEnum {
  /** Complete */
  Complete = 'complete',
}

export const ContractResourceActionStatusValues = ['complete'] as const;
