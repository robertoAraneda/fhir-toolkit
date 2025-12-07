/**
 * Example Use Codes for List
 * 
 * Example use codes for the List resource - typical kinds of use.
 *
 * @see http://hl7.org/fhir/ValueSet/list-example-codes
 */

export type ExampleUseCodesForListType = 'alerts' | 'adverserxns' | 'allergies' | 'medications' | 'problems' | 'worklist' | 'waiting' | 'protocols' | 'plans';

export enum ExampleUseCodesForListEnum {
  /** Alerts */
  Alerts = 'alerts',
  /** Adverse Reactions */
  Adverserxns = 'adverserxns',
  /** Allergies */
  Allergies = 'allergies',
  /** Medication List */
  Medications = 'medications',
  /** Problem List */
  Problems = 'problems',
  /** Worklist */
  Worklist = 'worklist',
  /** Waiting List */
  Waiting = 'waiting',
  /** Protocols */
  Protocols = 'protocols',
  /** Care Plans */
  Plans = 'plans',
}

export const ExampleUseCodesForListValues = ['alerts', 'adverserxns', 'allergies', 'medications', 'problems', 'worklist', 'waiting', 'protocols', 'plans'] as const;
