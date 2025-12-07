/**
 * Observation Reference Range Normal Value Codes
 * 
 * Codes that describe the normal value in the reference range, such as “Negative” or “Absent”
 *
 * @see http://hl7.org/fhir/ValueSet/observation-referencerange-normalvalue
 */

export type ObservationReferenceRangeNormalValueType = 'negative' | 'absent';

export enum ObservationReferenceRangeNormalValueEnum {
  /** Negative */
  Negative = 'negative',
  /** Absent */
  Absent = 'absent',
}

export const ObservationReferenceRangeNormalValueValues = ['negative', 'absent'] as const;
