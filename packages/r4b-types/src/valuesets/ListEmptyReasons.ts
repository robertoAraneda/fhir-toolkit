/**
 * List Empty Reasons
 * 
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 *
 * @see http://hl7.org/fhir/ValueSet/list-empty-reason
 */

export type ListEmptyReasonsType = 'nilknown' | 'notasked' | 'withheld' | 'unavailable' | 'notstarted' | 'closed';

export enum ListEmptyReasonsEnum {
  /** Nil Known */
  Nilknown = 'nilknown',
  /** Not Asked */
  Notasked = 'notasked',
  /** Information Withheld */
  Withheld = 'withheld',
  /** Unavailable */
  Unavailable = 'unavailable',
  /** Not Started */
  Notstarted = 'notstarted',
  /** Closed */
  Closed = 'closed',
}

export const ListEmptyReasonsValues = ['nilknown', 'notasked', 'withheld', 'unavailable', 'notstarted', 'closed'] as const;
