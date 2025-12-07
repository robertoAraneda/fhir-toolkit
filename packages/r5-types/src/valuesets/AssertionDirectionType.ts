/**
 * Assertion Direction Type
 * 
 * The type of direction to use for assertion.
 *
 * @see http://hl7.org/fhir/ValueSet/assert-direction-codes
 */

export type AssertionDirectionTypeType = 'response' | 'request';

export enum AssertionDirectionTypeEnum {
  /** response */
  Response = 'response',
  /** request */
  Request = 'request',
}

export const AssertionDirectionTypeValues = ['response', 'request'] as const;
