/**
 * AddressType
 * 
 * The type of an address (physical / postal).
 *
 * @see http://hl7.org/fhir/ValueSet/address-type
 */

export type AddressTypeType = 'postal' | 'physical' | 'both';

export enum AddressTypeEnum {
  /** Postal */
  Postal = 'postal',
  /** Physical */
  Physical = 'physical',
  /** Postal & Physical */
  Both = 'both',
}

export const AddressTypeValues = ['postal', 'physical', 'both'] as const;
