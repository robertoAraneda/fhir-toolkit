/**
 * UDI Codes
 * 
 * This value set includes sample UDI codes.
 *
 * @see http://hl7.org/fhir/ValueSet/udi
 */

export type UDIType = 'gudid';

export enum UDIEnum {
  /** GUDID (FDA) */
  Gudid = 'gudid',
}

export const UDIValues = ['gudid'] as const;
