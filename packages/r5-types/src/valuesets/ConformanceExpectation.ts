/**
 * Conformance Expectation
 * 
 * Description Needed Here
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
