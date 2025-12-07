/**
 * Laterality
 * 
 * Laterality: SNOMED-CT concepts for 'left', 'right', and 'bilateral'
 *
 * @see http://hl7.org/fhir/ValueSet/bodysite-laterality
 */

export type LateralityType = '419161000' | '419465000' | '51440002';

export enum LateralityEnum {
  /** Unilateral left */
  _419161000 = '419161000',
  /** Unilateral right */
  _419465000 = '419465000',
  /** Bilateral */
  _51440002 = '51440002',
}

export const LateralityValues = ['419161000', '419465000', '51440002'] as const;
