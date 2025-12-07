/**
 * Request priority
 * 
 * The clinical priority of a diagnostic order.
 *
 * @see http://hl7.org/fhir/ValueSet/request-priority
 */

export type RequestPriorityType = 'routine' | 'urgent' | 'asap' | 'stat';

export enum RequestPriorityEnum {
  /** Routine */
  Routine = 'routine',
  /** Urgent */
  Urgent = 'urgent',
  /** ASAP */
  Asap = 'asap',
  /** STAT */
  Stat = 'stat',
}

export const RequestPriorityValues = ['routine', 'urgent', 'asap', 'stat'] as const;
