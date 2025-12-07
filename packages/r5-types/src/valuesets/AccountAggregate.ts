/**
 * Account Aggregate
 * 
 * Indicates who is expected to pay a part of the account balance.
 *
 * @see http://hl7.org/fhir/ValueSet/account-aggregate
 */

export type AccountAggregateType = 'patient' | 'insurance' | 'total';

export enum AccountAggregateEnum {
  /** Patient */
  Patient = 'patient',
  /** Insurance */
  Insurance = 'insurance',
  /** Total */
  Total = 'total',
}

export const AccountAggregateValues = ['patient', 'insurance', 'total'] as const;
