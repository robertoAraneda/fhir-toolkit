/**
 * Example Diagnosis Related Group Codes
 * 
 * This value set includes example Diagnosis Related Group codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-diagnosisrelatedgroup
 */

export type ExampleDiagnosisRelatedGroupType = '100' | '101' | '300' | '400';

export enum ExampleDiagnosisRelatedGroupEnum {
  /** Normal Vaginal Delivery */
  _100 = '100',
  /** Appendectomy - uncomplicated */
  _101 = '101',
  /** Tooth abscess */
  _300 = '300',
  /** Head trauma - concussion */
  _400 = '400',
}

export const ExampleDiagnosisRelatedGroupValues = ['100', '101', '300', '400'] as const;
