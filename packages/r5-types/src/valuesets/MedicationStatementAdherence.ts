/**
 * MedicationStatement Adherence Codes
 * 
 * MedicationStatement Adherence Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medication-statement-adherence
 */

export type MedicationStatementAdherenceType = 'taking' | 'taking-as-directed' | 'taking-not-as-directed' | 'not-taking' | 'on-hold' | 'on-hold-as-directed' | 'on-hold-not-as-directed' | 'stopped' | 'stopped-as-directed' | 'stopped-not-as-directed' | 'unknown';

export enum MedicationStatementAdherenceEnum {
  /** Taking */
  Taking = 'taking',
  /** Taking As Directed */
  TakingAsDirected = 'taking-as-directed',
  /** Taking Not As Directed */
  TakingNotAsDirected = 'taking-not-as-directed',
  /** Not Taking */
  NotTaking = 'not-taking',
  /** On Hold */
  OnHold = 'on-hold',
  /** On Hold As Directed */
  OnHoldAsDirected = 'on-hold-as-directed',
  /** On Hold Not As Directed */
  OnHoldNotAsDirected = 'on-hold-not-as-directed',
  /** Stopped */
  Stopped = 'stopped',
  /** Stopped As Directed */
  StoppedAsDirected = 'stopped-as-directed',
  /** Stopped Not As Directed */
  StoppedNotAsDirected = 'stopped-not-as-directed',
  /** Unknown */
  Unknown = 'unknown',
}

export const MedicationStatementAdherenceValues = ['taking', 'taking-as-directed', 'taking-not-as-directed', 'not-taking', 'on-hold', 'on-hold-as-directed', 'on-hold-not-as-directed', 'stopped', 'stopped-as-directed', 'stopped-not-as-directed', 'unknown'] as const;
