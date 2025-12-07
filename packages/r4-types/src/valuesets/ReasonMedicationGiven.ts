/**
 * Reason Medication Given Codes
 * 
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 *
 * @see http://hl7.org/fhir/ValueSet/reason-medication-given-codes
 */

export type ReasonMedicationGivenType = 'a' | 'b' | 'c';

export enum ReasonMedicationGivenEnum {
  /** None */
  A = 'a',
  /** Given as Ordered */
  B = 'b',
  /** Emergency */
  C = 'c',
}

export const ReasonMedicationGivenValues = ['a', 'b', 'c'] as const;
