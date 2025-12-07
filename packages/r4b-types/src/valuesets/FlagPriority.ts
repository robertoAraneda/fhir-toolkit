/**
 * Flag Priority Codes
 * 
 * This value set is provided as an exemplar. The value set is driven by IHE Table B.8-4: Abnormal Flags, Alert Priority.
 *
 * @see http://hl7.org/fhir/ValueSet/flag-priority
 */

export type FlagPriorityType = 'PN' | 'PL' | 'PM' | 'PH';

export enum FlagPriorityEnum {
  /** No alarm */
  Pn = 'PN',
  /** Low priority */
  Pl = 'PL',
  /** Medium priority */
  Pm = 'PM',
  /** High priority */
  Ph = 'PH',
}

export const FlagPriorityValues = ['PN', 'PL', 'PM', 'PH'] as const;
