/**
 * IdentifierType
 * 
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 *
 * @see http://hl7.org/fhir/ValueSet/identifier-type
 */

export type IdentifierTypeType = 'DL' | 'PPN' | 'BRN' | 'MR' | 'MCN' | 'EN' | 'TAX' | 'NIIP' | 'PRN' | 'MD' | 'DR' | 'ACSN' | 'UDI' | 'SNO' | 'SB' | 'PLAC' | 'FILL' | 'JHN';

export enum IdentifierTypeEnum {
  Dl = 'DL',
  Ppn = 'PPN',
  Brn = 'BRN',
  Mr = 'MR',
  Mcn = 'MCN',
  En = 'EN',
  Tax = 'TAX',
  Niip = 'NIIP',
  Prn = 'PRN',
  Md = 'MD',
  Dr = 'DR',
  Acsn = 'ACSN',
  Udi = 'UDI',
  Sno = 'SNO',
  Sb = 'SB',
  Plac = 'PLAC',
  Fill = 'FILL',
  Jhn = 'JHN',
}

export const IdentifierTypeValues = ['DL', 'PPN', 'BRN', 'MR', 'MCN', 'EN', 'TAX', 'NIIP', 'PRN', 'MD', 'DR', 'ACSN', 'UDI', 'SNO', 'SB', 'PLAC', 'FILL', 'JHN'] as const;
