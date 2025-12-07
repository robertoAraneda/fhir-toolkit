/**
 * ActionRelationshipType
 * 
 * Defines the types of relationships between actions.
 *
 * @see http://hl7.org/fhir/ValueSet/action-relationship-type
 */

export type ActionRelationshipTypeType = 'before-start' | 'before' | 'before-end' | 'concurrent-with-start' | 'concurrent' | 'concurrent-with-end' | 'after-start' | 'after' | 'after-end';

export enum ActionRelationshipTypeEnum {
  /** Before Start */
  BeforeStart = 'before-start',
  /** Before */
  Before = 'before',
  /** Before End */
  BeforeEnd = 'before-end',
  /** Concurrent With Start */
  ConcurrentWithStart = 'concurrent-with-start',
  /** Concurrent */
  Concurrent = 'concurrent',
  /** Concurrent With End */
  ConcurrentWithEnd = 'concurrent-with-end',
  /** After Start */
  AfterStart = 'after-start',
  /** After */
  After = 'after',
  /** After End */
  AfterEnd = 'after-end',
}

export const ActionRelationshipTypeValues = ['before-start', 'before', 'before-end', 'concurrent-with-start', 'concurrent', 'concurrent-with-end', 'after-start', 'after', 'after-end'] as const;
