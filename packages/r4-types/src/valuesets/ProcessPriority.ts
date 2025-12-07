/**
 * Process Priority Codes
 * 
 * This value set includes the financial processing priority codes.
 *
 * @see http://hl7.org/fhir/ValueSet/process-priority
 */

export type ProcessPriorityType = 'stat' | 'normal' | 'deferred';

export enum ProcessPriorityEnum {
  /** Immediate */
  Stat = 'stat',
  /** Normal */
  Normal = 'normal',
  /** Deferred */
  Deferred = 'deferred',
}

export const ProcessPriorityValues = ['stat', 'normal', 'deferred'] as const;
