/**
 * Account Balance Term
 * 
 * Indicates the account balance's age.
 *
 * @see http://hl7.org/fhir/ValueSet/account-balance-term
 */

export type AccountBalanceTermType = 'current' | '30' | '60' | '90' | '120';

export enum AccountBalanceTermEnum {
  /** Current */
  Current = 'current',
  /** 30 day */
  _30 = '30',
  /** 60 day */
  _60 = '60',
  /** 90 day */
  _90 = '90',
  /** 120 day */
  _120 = '120',
}

export const AccountBalanceTermValues = ['current', '30', '60', '90', '120'] as const;
