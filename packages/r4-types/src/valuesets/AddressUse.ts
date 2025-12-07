/**
 * AddressUse
 * 
 * The use of an address.
 *
 * @see http://hl7.org/fhir/ValueSet/address-use
 */

export type AddressUseType = 'home' | 'work' | 'temp' | 'old' | 'billing';

export enum AddressUseEnum {
  /** Home */
  Home = 'home',
  /** Work */
  Work = 'work',
  /** Temporary */
  Temp = 'temp',
  /** Old / Incorrect */
  Old = 'old',
  /** Billing */
  Billing = 'billing',
}

export const AddressUseValues = ['home', 'work', 'temp', 'old', 'billing'] as const;
