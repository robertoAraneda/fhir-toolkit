/**
 * Audit Event Action
 * 
 * Indicator for type of action performed during the event that generated the event.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-action
 */

export type AuditEventActionType = 'C' | 'R' | 'U' | 'D' | 'E';

export enum AuditEventActionEnum {
  /** Create */
  C = 'C',
  /** Read */
  R = 'R',
  /** Update */
  U = 'U',
  /** Delete */
  D = 'D',
  /** Execute */
  E = 'E',
}

export const AuditEventActionValues = ['C', 'R', 'U', 'D', 'E'] as const;
