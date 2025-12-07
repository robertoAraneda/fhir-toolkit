/**
 * NamingSystemIdentifierType
 * 
 * Identifies the style of unique identifier used to identify a namespace.
 *
 * @see http://hl7.org/fhir/ValueSet/namingsystem-identifier-type
 */

export type NamingSystemIdentifierTypeType = 'oid' | 'uuid' | 'uri' | 'other';

export enum NamingSystemIdentifierTypeEnum {
  /** OID */
  Oid = 'oid',
  /** UUID */
  Uuid = 'uuid',
  /** URI */
  Uri = 'uri',
  /** Other */
  Other = 'other',
}

export const NamingSystemIdentifierTypeValues = ['oid', 'uuid', 'uri', 'other'] as const;
