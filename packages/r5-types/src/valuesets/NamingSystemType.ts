/**
 * Naming System Type
 * 
 * Identifies the purpose of the naming system.
 *
 * @see http://hl7.org/fhir/ValueSet/namingsystem-type
 */

export type NamingSystemTypeType = 'codesystem' | 'identifier' | 'root';

export enum NamingSystemTypeEnum {
  /** Code System */
  Codesystem = 'codesystem',
  /** Identifier */
  Identifier = 'identifier',
  /** Root */
  Root = 'root',
}

export const NamingSystemTypeValues = ['codesystem', 'identifier', 'root'] as const;
