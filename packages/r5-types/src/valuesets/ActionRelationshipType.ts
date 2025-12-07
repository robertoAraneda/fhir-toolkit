/**
 * Action Relationship Type
 * 
 * Defines the types of relationships between actions.
 *
 * @see http://hl7.org/fhir/ValueSet/action-relationship-type
 */

export type ActionRelationshipTypeType = 'before' | 'before-start' | 'before-end' | 'concurrent' | 'concurrent-with-start' | 'concurrent-with-end' | 'after' | 'after-start' | 'after-end';

export enum ActionRelationshipTypeEnum {
  /** Before */
  Before = 'before',
  /** Before Start */
  BeforeStart = 'before-start',
  /** Before End */
  BeforeEnd = 'before-end',
  /** Concurrent */
  Concurrent = 'concurrent',
  /** Concurrent With Start */
  ConcurrentWithStart = 'concurrent-with-start',
  /** Concurrent With End */
  ConcurrentWithEnd = 'concurrent-with-end',
  /** After */
  After = 'after',
  /** After Start */
  AfterStart = 'after-start',
  /** After End */
  AfterEnd = 'after-end',
}

export const ActionRelationshipTypeValues = ['before', 'before-start', 'before-end', 'concurrent', 'concurrent-with-start', 'concurrent-with-end', 'after', 'after-start', 'after-end'] as const;
