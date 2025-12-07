/**
 * Example with inactive codes
 * 
 * HL7 v3 ActMood Predicate codes, including inactive codes
 *
 * @see http://hl7.org/fhir/ValueSet/inactive
 */

export type ExampleInactiveType = 'CRT' | 'EXPEC' | 'OPT';

export enum ExampleInactiveEnum {
  /** criterion */
  Crt = 'CRT',
  /** expectation */
  Expec = 'EXPEC',
  /** option */
  Opt = 'OPT',
}

export const ExampleInactiveValues = ['CRT', 'EXPEC', 'OPT'] as const;
