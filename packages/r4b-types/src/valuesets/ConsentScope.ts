/**
 * Consent Scope Codes
 * 
 * This value set includes the four Consent scope codes.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-scope
 */

export type ConsentScopeType = 'adr' | 'research' | 'patient-privacy' | 'treatment';

export enum ConsentScopeEnum {
  /** Advanced Care Directive */
  Adr = 'adr',
  /** Research */
  Research = 'research',
  /** Privacy Consent */
  PatientPrivacy = 'patient-privacy',
  /** Treatment */
  Treatment = 'treatment',
}

export const ConsentScopeValues = ['adr', 'research', 'patient-privacy', 'treatment'] as const;
