/**
 * ExpansionParameterSource
 * 
 * Declares what the source of a parameter is.
 *
 * @see http://hl7.org/fhir/ValueSet/expansion-parameter-source
 */

export type ExpansionParameterSourceType = 'input' | 'server' | 'codesystem';

export enum ExpansionParameterSourceEnum {
  /** Client Input */
  Input = 'input',
  /** Server Engine */
  Server = 'server',
  /** Code System */
  Codesystem = 'codesystem',
}

export const ExpansionParameterSourceValues = ['input', 'server', 'codesystem'] as const;
