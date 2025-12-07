/**
 * Medication request  course of  therapy  codes
 * 
 * MedicationRequest Course of Therapy Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy
 */

export type MedicationRequestCourseOfTherapyType = 'continuous' | 'acute' | 'seasonal';

export enum MedicationRequestCourseOfTherapyEnum {
  /** Continuous long term therapy */
  Continuous = 'continuous',
  /** Short course (acute) therapy */
  Acute = 'acute',
  /** Seasonal */
  Seasonal = 'seasonal',
}

export const MedicationRequestCourseOfTherapyValues = ['continuous', 'acute', 'seasonal'] as const;
