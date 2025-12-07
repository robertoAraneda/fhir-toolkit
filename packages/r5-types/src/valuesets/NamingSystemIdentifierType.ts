/**
 * Naming System Identifier Type
 * 
 * Identifies the style of unique identifier used to identify a namespace.
 *
 * @see http://hl7.org/fhir/ValueSet/namingsystem-identifier-type
 */

export type NamingSystemIdentifierTypeType = 'oid' | 'uuid' | 'uri' | 'iri-stem' | 'v2csmnemonic' | 'other';

export enum NamingSystemIdentifierTypeEnum {
  /** OID */
  Oid = 'oid',
  /** UUID */
  Uuid = 'uuid',
  /** URI */
  Uri = 'uri',
  /** IRI stem */
  IriStem = 'iri-stem',
  /** V2CSMNemonic */
  V2csmnemonic = 'v2csmnemonic',
  /** Other */
  Other = 'other',
}

export const NamingSystemIdentifierTypeValues = ['oid', 'uuid', 'uri', 'iri-stem', 'v2csmnemonic', 'other'] as const;
