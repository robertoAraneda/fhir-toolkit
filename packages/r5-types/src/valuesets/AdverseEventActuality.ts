/**
 * Adverse Event Actuality
 * 
 * Overall nature of the adverse event, e.g. real or potential.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-actuality
 */

export type AdverseEventActualityType = 'actual' | 'potential';

export enum AdverseEventActualityEnum {
  /** Adverse Event */
  Actual = 'actual',
  /** Potential Adverse Event */
  Potential = 'potential',
}

export const AdverseEventActualityValues = ['actual', 'potential'] as const;
