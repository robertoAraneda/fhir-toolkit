/**
 * AuditEventOutcome
 * 
 * Indicates whether the event succeeded or failed.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-outcome
 */

export type AuditEventOutcomeType = '0' | '4' | '8' | '12';

export enum AuditEventOutcomeEnum {
  /** Success */
  _0 = '0',
  /** Minor failure */
  _4 = '4',
  /** Serious failure */
  _8 = '8',
  /** Major failure */
  _12 = '12',
}

export const AuditEventOutcomeValues = ['0', '4', '8', '12'] as const;
