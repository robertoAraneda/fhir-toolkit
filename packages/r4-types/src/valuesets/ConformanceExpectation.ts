/**
 * ConformanceExpectation
 * 
 * Indicates the degree of adherence to a specified behavior or capability expected for a system to be deemed conformant with a specification.
 *
 * @see http://hl7.org/fhir/ValueSet/conformance-expectation
 */

export type ConformanceExpectationType = 'SHALL' | 'SHOULD' | 'MAY' | 'SHOULD-NOT';

export enum ConformanceExpectationEnum {
  /** SHALL */
  Shall = 'SHALL',
  /** SHOULD */
  Should = 'SHOULD',
  /** MAY */
  May = 'MAY',
  /** SHOULD-NOT */
  ShouldNot = 'SHOULD-NOT',
}

export const ConformanceExpectationValues = ['SHALL', 'SHOULD', 'MAY', 'SHOULD-NOT'] as const;
