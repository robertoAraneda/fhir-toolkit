/**
 * Contact entity type
 * 
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 *
 * @see http://hl7.org/fhir/ValueSet/contactentity-type
 */

export type ContactEntityTypeType = 'BILL' | 'ADMIN' | 'HR' | 'PAYOR' | 'PATINF' | 'PRESS';

export enum ContactEntityTypeEnum {
  /** Billing */
  Bill = 'BILL',
  /** Administrative */
  Admin = 'ADMIN',
  /** Human Resource */
  Hr = 'HR',
  /** Payor */
  Payor = 'PAYOR',
  /** Patient */
  Patinf = 'PATINF',
  /** Press */
  Press = 'PRESS',
}

export const ContactEntityTypeValues = ['BILL', 'ADMIN', 'HR', 'PAYOR', 'PATINF', 'PRESS'] as const;
